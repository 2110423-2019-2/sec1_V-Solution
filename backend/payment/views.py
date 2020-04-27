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
import omise
from .serializers import *
from purchase.serializers import order_serializer
from purchase.models import Order
from backend import settings

@api_view(["POST"])
@permission_classes((AllowAny,))
def test_payment(request):
    omise_token = request.data["omiseToken"]
    #omise_source = request.data["omiseSource"]

    return Response(omise_token , status=HTTP_200_OK)

@api_view(["POST"])
@permission_classes((AllowAny,))
def order_payment(request, order_id):
    omise_token = request.data["omiseToken"]
    #omise_source = request.data["omiseSource"]
    
    omise.api_secret = settings.OMISE_SECRET_KEY

    order = Order.objects.get(pk=order_id)
    if order.status != 'O':
        return Response({'error': 'Order can not be paid.'}, status=HTTP_400_BAD_REQUEST)
    price = (int(order.total_price + order.total_deliver_price) * 100) + 2000

    try:
        charge = omise.Charge.create(
            amount = price,
            currency = 'thb',
            card = omise_token,
        )

    except omise.errors.BaseError as e:
        return Response({'error': 'Payment error'}, status=HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({'error': str(e)}, status=HTTP_400_BAD_REQUEST)

    if charge.status == "successful":
        order.status = 'P'
        order.save()
    else:
        return Response({'error': 'Payment failed'}, status=HTTP_400_BAD_REQUEST)

    data = order_serializer(order)

    return Response(data, status=HTTP_200_OK)

# For testing purposes
@api_view(["POST"])
@permission_classes((AllowAny,))
def order_payment_fake(request, order_id):
    omise_token = request.data["omiseToken"]
    #omise_source = request.data["omiseSource"]
    
    omise.api_secret = settings.OMISE_SECRET_KEY

    order = Order.objects.get(pk=order_id)
    if order.status != 'O':
        return Response({'error': 'Order can not be paid.'}, status=HTTP_400_BAD_REQUEST)
    price = (int(order.total_price + order.total_deliver_price) * 100) + 2000

    try:
        charge = omise.Charge.create(
            amount = price,
            currency = 'thb',
            card = omise_token,
        )
    except Exception as e:
        pass

    order.status = 'P'
    order.save()
    Order.objects.deduct_product(order)
    data = order_serializer(order)

    return Response(data, status=HTTP_200_OK)