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
from .serializers import ProductSerializer
from profile.models import Profile

@api_view(["POST"])
def create_product(request):
    token_string = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    token = Token.objects.get(key=token_string)
    user = token.user
    user_profile = Profile.objects.get(user=user)

    if not user_profile.is_active:
        return Response({'result': 'User is not authenticate.'}, status=HTTP_200_OK)
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
def get_product(request, product_id):
    product = Product.objects.get(pk=product_id)
    try:
        image = product.image.url
    except ValueError:
        image = ''
    data = {
        "seller" = product.seller,
        "productName" = product['productName'],
        "proDuctDesc" = product['proDuctDesc'],
        "category" = product['category'],
        "subcategory" = product['subcategory'],
        "province" = product['province'],
        "district" = product['district'],
        "productType" = product['productType'],
        "harvest_date" = product['harvest_date'],
        "price" = product['price'],
        "amount" = product['amount'],
        "unitOfAmount" = product['unitOfAmount'],
        "deliverCompany" = product['deliverCompany'],
        "deliverPrice" = product['deliverPrice'],
        "image" = image,
    }
    return Response(data, status=HTTP_200_OK)

@api_view(["POST"])
def upload_product_image(request, product_id):
    token_string = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    token = Token.objects.get(key=token_string)
    user = token.user
    user_profile = Profile.objects.get(user=user)

    file = request.FILES['image']
    product = Product.objects.get(pk=product_id)
    product.image = file
    product.save()
    return Response(status=HTTP_200_OK)

"""def home(request) :
    if request.method == 'GET' :
        product_data = Product.objects.all()
        responseData = list()
        for field in product_data :
            Datas = {
                    "sellerID" : field.sellerID ,
                    "productID" : field.productID ,
                    "productName" : field.productName ,
                    "proDuctDesc" :  field.proDuctDesc ,
                    "category" : field.category ,
                    "subcategory" : field.subcategory ,
                    "province" : field.province ,
                    "district" : field.district ,
                    "productType" : field.productType ,
                    "harvest_date" :field.harvest_date ,
                    "price" : field.price ,
                    "amount" :  field.amount , 
                    "unitOfAmount" : field.unitOfAmount ,
                    "deliverCompany" : field.deliverCompany ,
                    "deliverPrice" : field.deliverPrice
            }
            responseData.append(Datas)
        return JsonResponse({ "allproduct" : responseData })
    
    elif request.method == 'POST' :
        sellerID = request.data.get("sellerID")
        productID = request.data.get("productID")
        productName = request.data.get("productName")
        proDuctDesc = request.data.get("proDuctDesc")
        category = models.CharField(max_length=20)
        subcategory = models.CharField(max_length=20)
        province = models.CharField(max_length=30)
        district = models.CharField(max_length=30)
        productType = models.CharField(max_length=1)
        harvest_date = models.DateField()
        price = models.FloatField()
        amount = models.FloatField()
        unitOfAmount = models.CharField(max_length=20)
        deliverCompany = models.CharField(max_length=20)
        deliverPrice  = models.FloatField()"""

'''
def product_list(request) :
    if request.method == "GET" :
        product = Product.objects.all()
        serializer = ProductSerializer(product, many=True)
        return JsonResponse(serializer.data , safe=False)
    
    elif request.method == "POST" :
        data = JSONParser().parse(request)
        serializer = ProductSerializer(data=data)
        if serializer.is_valid() :
            serializer.save()
            return JsonResponse(data , status=201)
        return JsonResponse(serializer.errors , status=400)

def product_detail(request,pk):

    try :
        product = Product.objects.get(pk=pk)
    except Product.DoesNotExist :
        return HttpResponse(status=404)

    if request.method == 'GET' :
        serializer = ProductSerializer(product)
        return JsonResponse(serializer.data)
    
    elif request.method == 'PUT' :
        data = JSONParser().parse(request)
        serializer = ProductSerializer(product, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400 )

    elif request.method == 'DELETE':
        product.delete()
        return HttpResponse(status=204)
'''