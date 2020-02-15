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

from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.models import User
from .models import Profile
from email_sys import send_email

@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def register(request):
    username = request.data.get("username")
    password = request.data.get("password")
    email = request.data.get("email")

    if not User.objects.filter(username=username).exists():
        user = User.objects.create_user(
            username = username,
            password = password,
            email = email
        )
        user.save()

        gender = request.data.get("gender")

        new_profile = Profile.objects.create(
            user = user,
            gender = gender,
            user_type = 'C'
        )

        token, _ = Token.objects.get_or_create(user=user)

        '''
        #email verification is in here
        text = "http://127.0.0.1:8000/verify/" + token.key
        send_email.send_email(email, 'Confirm your Freshfruit registeration', text, text)
        '''

        return Response({'result': 'Registeration complete'},status=HTTP_200_OK)
    return Response({'result': 'Username already existed.'},status=HTTP_200_OK)

@api_view(["GET"])
@permission_classes((AllowAny,))
def verify_email(request, token):
    if Token.objects.filter(key=token).exists():
        user = Token.objects.get(key=token).user
        profile = Profile.objects.get(user=user)
        if profile.is_active:
            return HttpResponse("<html><body>User already verified.</body></html>")
        else:
            profile.is_active = True
            profile.save()
            return HttpResponse("<html><body>Verification successful.</body></html>")
    html = "<html><body>Token %s is not valid</body></html>" %token
    return HttpResponse(html)