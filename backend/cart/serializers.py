from .models import Cart, Entry
from product.serializers import product_to_dict
import product

def cart_to_list(cart):
    items = []
    entries = Entry.objects.filter(cart = cart)
    for entry in entries:
        items.append({
            'product': product_to_dict(entry.product),
            'amount': str(entry.quantity)
            })
    data = {
        'price' : cart.total_price,
        'deliver_price' : cart.total_deliver_price,
        'amount' : cart.count,
        'entries' : items
    }
    return data