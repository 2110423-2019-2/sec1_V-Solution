from .models import Cart, Entry
from product.serializers import product_to_dict
import product

def cart_to_list(cart):
    data = []
    entries = Entry.objects.filter(cart = cart)
    for entry in entries:
        data.append({
            'product': product_to_dict(entry.product),
            'amount': str(entry.quantity)
            })

    return data