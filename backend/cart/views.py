from django.shortcuts import render
from .models import Entry

##
def add_entry(cart, product, amount):
    try:
        old_entry = Entry.objects.get(cart=cart, product=product)
    except Entry.DoesNotExist:
        old_entry = None

    if old_entry:
        old_entry.quantity += amount
    else:
        entry = Entry.objects.create(
            product = product,
            cart = cart,
            quantity = amount
        )
    
    cart.count += amount
    cart.total_deliver_price += product.deliverPrice * amount


## add entry

## remove entry


## checkout