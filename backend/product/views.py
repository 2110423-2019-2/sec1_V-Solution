from django.shortcuts import render

import json
from rest_framework.parsers import JSONParser
from django.core.serializers.json import DjangoJSONEncoder
from django.http import request
from django.http import HttpResponse , JsonResponse
from .models import Product
from .serializers import ProductSerializer

# Create your views here.

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
