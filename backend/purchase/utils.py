from .models import *
from .serializers import *
from profile.models import Profile
from product.models import Product
from cart.models import Cart, Entry

### Function
def get_seller_order_items(seller):
    items = OrderItem.objects.filter(product__seller = seller)
    return items

def get_user_order(user):
    orders = Order.objects.filter(buyer = user)
    return orders

def create_customer_order(user):
    user_profile = Profile.objects.get(user=user)
    user_cart = Cart.objects.get(user=user)
    user_entries = Entry.objects.filter(cart=user_cart)
    order = Order.objects.create(
        buyer = user,
        status = "O",
        total_price = user_cart.total_price,
        total_deliver_price = user_cart.total_deliver_price
    )
    order.save()

    for entry in user_entries:
        entry_to_item(order, entry)

    return order

def entry_to_item(order, entry):
    item = OrderItem.objects.create(
        product = entry.product,
        order = order,
        quantity = entry.quantity,
        status = "O",
    )
    item.save()
    return item