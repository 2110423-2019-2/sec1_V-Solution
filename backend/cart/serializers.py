from .models import Cart
import product

def cart_to_dict(cart):
    data = []
    for item in cart.items.all():
        data.append(product.serializers.product_to_dict(item))
    return data