from .models import *
from .utils import * 
from .serializers import *
from profile.models import Profile
from product.models import Product
from product.utility import calculate_product_price
import purchase

def calculate_price(cart):
    entries = Entry.objects.filter(cart=cart)
    price = 0
    for entry in entries:
        price += (entry.product.price * entry.quantity)
    return price

def add_entry(cart, product, amount):
    try:
        old_entry = Entry.objects.get(cart=cart, product=product)
    except Entry.DoesNotExist:
        old_entry = None

    new_amount = 0
    old_amount = 0

    if old_entry:
        old_amount = old_entry.quantity
        new_amount = min(old_amount + amount, product.amount)
        old_entry.quantity = new_amount
        old_entry.save()
    else:
        new_amount = min(amount, product.amount)
        entry = Entry.objects.create(
            product = product,
            cart = cart,
            quantity = new_amount
        )

    amount_in = new_amount-old_amount
    
    cart.count += amount_in
    cart.total_price = calculate_price(cart)
    cart.total_deliver_price += ( product.deliverPrice * amount_in )
    cart.save()
    return cart

def decrease_entry(cart, product, amount):
    try:
        old_entry = Entry.objects.get(cart=cart, product=product)
    except Entry.DoesNotExist:
        return cart
    
    new_amount = max(old_entry.quantity - amount, 0)
    amount_de = old_entry.quantity - new_amount
    old_entry.quantity = new_amount
    if old_entry.quantity == 0:
        old_entry.delete()
    else:
        old_entry.save()

    cart.count -= amount_de
    cart.total_price = calculate_price(cart)
    cart.total_deliver_price -= product.deliverPrice * amount_de
    cart.save()
    return cart

def clear_cart_entry(cart):
    cart.total_price = 0
    cart.total_deliver_price = 0
    cart.count = 0
    cart.save()
    entries = Entry.objects.filter(cart=cart)
    for entry in entries:
        entry.delete()
        return cart