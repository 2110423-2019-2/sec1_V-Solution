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

from django.shortcuts import render
from django.contrib.auth.models import User
from .models import Profile

@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def register(request):
    username = request.data.get("username")
    password = request.data.get("password")
    email = request.data.get("email")
    user = User.objects.create_user(
        username = username,
        password = password,
        email = email
    )
    user.save()

    gender = request.data.get("gender")

    new_profile = Profile.objects.create(
        user = user,
        gender = gender
    )
    return Response({'result': 'Registeration complete'},
                    status=HTTP_200_OK)