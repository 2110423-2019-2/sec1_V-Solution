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
        price += calculate_product_price(entry.product)
    return price

def add_entry(cart, product, amount):
    try:
        old_entry = Entry.objects.get(cart=cart, product=product)
    except Entry.DoesNotExist:
        old_entry = None

    if old_entry:
        old_entry.quantity += amount
        old_entry.save()
    else:
        entry = Entry.objects.create(
            product = product,
            cart = cart,
            quantity = amount
        )
    
    cart.count += amount
    cart.total_price += (calculate_product_price(product) * amount)
    cart.total_deliver_price += (product.deliverPrice * amount)
    cart.save()
    return cart

def decrease_entry(cart, product, amount):
    try:
        old_entry = Entry.objects.get(cart=cart, product=product)
    except Entry.DoesNotExist:
        return cart
    
    new_amount = max(old_entry.quantity - amount, 0)
    if new_amount == 0:
        old_entry.delete()
        return cart

    ## FIX HERE
    amount_de = old_entry.quantity - new_amount
    old_entry.quantity = new_amount
    old_entry.save()

    cart.count -= amount_de
    cart.total_price -= calculate_product_price(product) * amount_de
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