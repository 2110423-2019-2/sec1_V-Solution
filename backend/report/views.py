from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist

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

from .models import ReportForm
from profile.models import Profile
# Create your views here.

@api_view(["POST"])
def submit_report(request):
    token_string = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    try :
        token = Token.objects.get(key=token_string)
    except ObjectDoesNotExist :
        return Response({'error': 'Invalid Credentials.'},status=HTTP_400_BAD_REQUEST)

    
    try :
        json_data = json.loads(request.body)
        report_form = ReportForm.objects.create(
            subject = json_data['subject'],
            reported_user = json_data['reported_user'],
            description = json_data['description']
        )
        report_form.save()
    except ValueError :
        return Response({'error' : 'Invalid JSON'} , status=HTTP_400_BAD_REQUEST)

    return Response({'result' : 'Submit Complete'} , status=HTTP_200_OK)



@api_view(["POST"])
def upload_report_pic(request):

    token_string = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    try :
        token = Token.objects.get(key=token_string)
    except ObjectDoesNotExist :
        return Response({'error': 'Invalid Credentials.'},status=HTTP_400_BAD_REQUEST)
    
    file = request.FILES['image']

    
    return
