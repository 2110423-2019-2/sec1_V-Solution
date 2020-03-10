from .models import Product

def calculate_product_price(product):
    return product.price * product.amount