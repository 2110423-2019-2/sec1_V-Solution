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
    HTTP_200_OK ,
    HTTP_401_UNAUTHORIZED
)
from rest_framework.response import Response
from django.utils.datastructures import MultiValueDictKeyError

import json
from rest_framework.parsers import JSONParser
from django.core.serializers.json import DjangoJSONEncoder
from django.http import request
from django.http import HttpResponse , JsonResponse

from .models import ReportForm
from profile.models import Profile
from.serializers import report_to_dict
# Create your views here.

@api_view(["POST"])
def submit_report(request):
    """token_string = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    try :
        token = Token.objects.get(key=token_string)
    except ObjectDoesNotExist :
        return Response({'error': 'Invalid Credentials.'},status=HTTP_400_BAD_REQUEST)"""
    token_string = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    token = Token.objects.get(key=token_string)
    user = token.user
    user_profile = Profile.objects.get(user=user)



    
    try :
        json_data = json.loads(request.body)
        report_form = ReportForm.objects.create(
            subject = json_data['subject'],
            reported_user = json_data['reported_user'],
            description = json_data['description']
        )
    except ValueError :
        return Response({'error' : 'Invalid JSON'} , status=HTTP_400_BAD_REQUEST)

    report_json_object = report_to_dict(report_form) 
    return Response( report_json_object , status=HTTP_200_OK)



@api_view(["POST"])
def upload_report_pic(request,report_id):
    token_string = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    token = Token.objects.get(key=token_string)
    user = token.user
    report = ReportForm.objects.get(id=report_id)

    try:
        file = request.FILES['image']
    except MultiValueDictKeyError:
        return Response({'error': 'Invalid request'}, status=HTTP_400_BAD_REQUEST)

    report.image = file
    report.save()
    image_url = report.image.url
    
    return Response({'url' : image_url},status=HTTP_200_OK)

@api_view(["GET"])
def get_all_report(request):

    token_string = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    token = Token.objects.get(key=token_string)
    user = token.user
    user_profile = Profile.objects.get(user=user)

    if user_profile.user_types != 'M' :
        return Response({'error': 'Invalid credentials'}, status=HTTP_401_UNAUTHORIZED )
    
    reports = ReportForm.objects.all()
    data = []
    for report in reports :
        data.append(report_to_dict(report))

    return Response(data , status=HTTP_200_OK)

