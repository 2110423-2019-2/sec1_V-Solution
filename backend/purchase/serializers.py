from .models import * 
from product.serializers import product_to_dict
from profile.serializers import profile_to_dict
from profile.models import Profile
import product


def order_serializer(order):
    order_items = OrderItem.objects.filter(order=order)
    buyer = order.buyer
    buyer_profile = Profile.objects.get(user=buyer)
    status = order.status
    data = {
        "id" : order.id,
        "user" : profile_to_dict(buyer_profile),
        "status" : status,
        "items" : [],
    }
    for item in order_items:
        data["items"].append(order_item_serializer(item))
    return data

def order_item_serializer(order_item):
    data = {
        "product" : product_to_dict(order_item.product),
        # "order" : 
        "amount" : order_item.quantity,
        "status" : order_item.status
    }
    return data