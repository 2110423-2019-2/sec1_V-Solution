from django.shortcuts import render

from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_401_UNAUTHORIZED,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)
from rest_framework.response import Response
import json
from rest_framework.parsers import JSONParser
from django.core.serializers.json import DjangoJSONEncoder
from django.http import request
from django.http import HttpResponse , JsonResponse

from .models import *
from .serializers import *
from .utils import *
from profile.models import Profile
from product.models import Product
from cart.models import Cart, Entry

### GETTER
@api_view(["GET"])
def get_seller_order_api(request):
    token_string = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    token = Token.objects.get(key=token_string)
    user = token.user

    orders = get_seller_order_items(user)
    data = []
    for order in orders:
        data.append(order_item_serializer(order))
    return Response(data, status=HTTP_200_OK)

@api_view(["GET"])
def get_all_order(request):
    token_string = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    token = Token.objects.get(key=token_string)
    user = token.user

    orders = get_user_order(user)
    data = []
    for order in orders:
        data.append(order_serializer(order))
    return Response(data, status=HTTP_200_OK)

@api_view(["GET"])
def get_order(request, order_id):
    token_string = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    token = Token.objects.get(key=token_string)
    user = token.user

    order = Order.objects.get(id=order_id)
    if order.buyer == user:
        data = order_serializer(order)
        return Response(data, status=HTTP_200_OK)
    return Response({'error': 'Authorization failed'}, status=HTTP_401_UNAUTHORIZED)
