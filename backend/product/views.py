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
from .models import Product
from .serializers import ProductSerializer, product_to_dict
from django.contrib.auth.models import User
from profile.models import Profile

@api_view(["POST"])
def create_product(request):
    token_string = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    token = Token.objects.get(key=token_string)
    user = token.user
    user_profile = Profile.objects.get(user=user)

    if not user_profile.is_active:
        return Response({'result': 'User is not verify.'}, status=HTTP_200_OK)
    if user_profile.user_type != 'S':
        return Response({'result': 'User is not a Seller.'}, status=HTTP_200_OK)

    json_data = json.loads(request.body)
    try:
        productName = json_data['product_name']
        proDuctDesc = json_data['product_desc']
        category = json_data['category']
        subcategory = json_data['subcategory']
        province = json_data['province']
        district = json_data['district']
        productType = json_data['product_type']
        harvest_date = json_data['harvest_date']
        price = json_data['price']
        amount = json_data['amount']
        unitOfAmount = json_data['unit_of_amount']
        deliverCompany = json_data['deliver_company']
        deliverPrice  = json_data['deliver_price']
    except KeyError:
        return Response({'error': 'Invalid JSON'},status=HTTP_400_BAD_REQUEST)

    product = Product.objects.create(
        seller = user_profile,
        productName = productName,
        proDuctDesc = proDuctDesc,
        category = category,
        subcategory = subcategory,
        province = province,
        district = district,
        productType = productType,
        harvest_date = harvest_date,
        price = price,
        amount = amount,
        unitOfAmount = unitOfAmount,
        deliverCompany = deliverCompany,
        deliverPrice  = deliverPrice,
    )

    return Response({'result': 'Successfully create product'},status=HTTP_200_OK)

@api_view(['GET'])
@permission_classes((AllowAny,))
def get_product(request, product_id):
    product = Product.objects.get(pk=product_id)
    data = product_to_dict(product)
    return Response(data, status=HTTP_200_OK)

@api_view(["POST"])
def upload_product_image(request, product_id):
    token_string = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    token = Token.objects.get(key=token_string)
    user = token.user
    user_profile = Profile.objects.get(user=user)

    file = request.FILES['image']
    product = Product.objects.get(pk=product_id)
    if user_profile != product.seller:
        return Response(status=HTTP_400_BAD_REQUEST)
    product.image = file
    product.save()
    return Response(status=HTTP_200_OK)

@api_view(["POST"])
def update_product(request, product_id, status):
    token_string = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    token = Token.objects.get(key=token_string)
    user = token.user
    user_profile = Profile.objects.get(user=user)

    product = Product.objects.get(pk=product_id)
    if user_profile != product.seller:
        return Response({'error': 'Invalid credentials'}, status=HTTP_400_BAD_REQUEST)
    if status.upper() in ['L', 'R', 'N']:
        if product.productType == 'A' or status.upper() == 'N':
            product.productType = status.upper()
            product.save()
            return Response({'result': 'Successfully update product status'},status=HTTP_200_OK)

    return Response({'error': 'Invalid request'}, status=HTTP_400_BAD_REQUEST)

@api_view(["POST"])
def edit_product(request, product_id):
    token_string = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    token = Token.objects.get(key=token_string)
    user = token.user
    user_profile = Profile.objects.get(user=user)

    product = Product.objects.get(pk=product_id)
    if user_profile != product.seller:
        return Response({'error': 'Invalid credentials'}, status=HTTP_400_BAD_REQUEST)
    try:
        productName = json_data['product_name']
        proDuctDesc = json_data['product_desc']
        category = json_data['category']
        subcategory = json_data['subcategory']
        province = json_data['province']
        district = json_data['district']
        productType = json_data['product_type']
        harvest_date = json_data['harvest_date']
        price = json_data['price']
        amount = json_data['amount']
        unitOfAmount = json_data['unit_of_amount']
        deliverCompany = json_data['deliver_company']
        deliverPrice  = json_data['deliver_price']
    except KeyError:
        return Response({'error': 'Invalid JSON'},status=HTTP_400_BAD_REQUEST)

    product.productName = productName
    product.proDuctDesc = proDuctDesc
    product.category = category
    product.subcategory = subcategory
    product.province = province
    product.district = district
    product.productType = productType
    product.harvest_date = harvest_date
    product.price = price
    product.amount = amount
    product.unitOfAmount = unitOfAmount
    product.deliverCompany = deliverCompany
    product.deliverPrice = deliverPrice
    
    product.save()

    return Response({'result': 'Successfully update product status'},status=HTTP_200_OK)

@api_view(['GET'])
@permission_classes((AllowAny,))
def get_product_from_user(request, username):
    user = User.objects.get(username=username)
    profile = Profile.objects.get(user=user)
    products = Product.objects.filter(seller=profile).exclude(productType__in=['A', 'N'])
    data = []
    for product in products: 
        data.append(product_to_dict(product))
    return Response(data, status=HTTP_200_OK)

@api_view(['GET'])
@permission_classes((AllowAny,))
def get_all_product(request):
    products = Product.objects.all().exclude(productType__in=['A', 'N']).order_by('pk')
    data = []
    for product in products: 
        data.append(product_to_dict(product))
    return Response(data, status=HTTP_200_OK)