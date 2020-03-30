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

from .models import Comment
from .serializers import comment_list
from profile.models import Profile
# Create your views here.

@api_view(['GET'])
@permission_classes((AllowAny,))
def get_all_comment(request,store_name):
    data = comment_list(store_name)
    return Response(data,status=HTTP_200_OK)

@api_view(['POST'])
def post_comment(request) :
    token_string = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    token = Token.objects.get(key=token_string)
    user = token.user
    user_profile = Profile.objects.get(user=user)

    json_data = json.loads(request.body)
    try :
        store_name = json_data['store_name']
        poster_user = json_data['poster_user']
        text = json_data['text']
    except ValueError :
        return Response({'error': 'Invalid JSON'},status=HTTP_400_BAD_REQUEST)
    
    comment = Comment.objects.create(
        store_name = store_name ,
        poster_user = poster_user ,
        text = text
    )

    return Response({'result' : 'successful add comment' } , status=HTTP_200_OK)




