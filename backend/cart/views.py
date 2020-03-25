from django.shortcuts import render

from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)
from rest_framework.response import Response
import json
from rest_framework.parsers import JSONParser
from django.core.serializers.json import DjangoJSONEncoder
from django.http import request
from django.http import HttpResponse , JsonResponse

from .models import Entry
from profile.models import Profile
from product.models import Product
from cart.models import Cart
from cart.serializers import cart_to_list
from product.utility import calculate_product_price
import purchase

##
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
    
    new_amount = old_entry.quantity - amount
    if new_amount <= 0: 
        new_amount = 0
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
    entries = Entry.objects.filter(cart=cart)
    for entry in entries:
        entry.delete()
        return cart

## add entry
@api_view(["POST"])
def add_product_to_cart(request):
    token_string = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    token = Token.objects.get(key=token_string)
    user = token.user
    json_data = json.loads(request.body)
    
    # Data
    try:
        product_id = json_data['id']
        amount = int(json_data['amount'])
    except KeyError:
        return Response({'error': 'Invalid JSON'},status=HTTP_400_BAD_REQUEST)

    cart = Cart.objects.get(user=user)
    product = Product.objects.get(pk=product_id)
    add_entry(cart, product, amount)
    data = cart_to_list(cart)

    return Response(data, status=HTTP_200_OK)

## decrease entry
@api_view(["POST"])
def remove_product_from_cart(request):
    token_string = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    token = Token.objects.get(key=token_string)
    user = token.user
    json_data = json.loads(request.body)
    
    try:
        product_id = json_data['id']
        amount = int(json_data['amount'])
    except KeyError:
        return Response({'error': 'Invalid JSON'},status=HTTP_400_BAD_REQUEST)

    ##
    cart = Cart.objects.get(user=user)
    product = Product.objects.get(pk=product_id)
    decrease_entry(cart, product, amount)
    data = cart_to_list(cart)

    return Response(data, status=HTTP_200_OK)

## get cart
@api_view(["GET"])
def get_cart(request):
    token_string = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    token = Token.objects.get(key=token_string)
    user = token.user
    
    cart = Cart.objects.get(user=user)
    data = cart_to_list(cart)
    return Response(data, status=HTTP_200_OK)

## clear cart
@api_view(["POST"])
def clear_cart(request):
    token_string = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    token = Token.objects.get(key=token_string)
    user = token.user

    ##
    cart = Cart.objects.get(user=user)
    clear_cart_entry(cart)
    return Response({'result': 'Successful'}, status=HTTP_200_OK)

## checkout
@api_view(["POST"])
def cart_checkout(request):
    token_string = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    token = Token.objects.get(key=token_string)
    user = token.user

    cart = Cart.objects.get(user=user)
    order = purchase.utils.create_customer_order(user)
    clear_cart_entry(cart)
    data = purchase.serializers.order_serializer(order)
    return Response(data, status=HTTP_200_OK)
