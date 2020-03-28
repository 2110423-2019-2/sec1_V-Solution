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
from django.utils.datastructures import MultiValueDictKeyError

import json
import email_sys
from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.models import User
from .models import Profile
from .serializers import profile_to_dict
from email_sys import send_email
from backend import settings
from cart.models import Cart
from cart.serializers import cart_to_list
import os

@api_view(["POST"])
@permission_classes((AllowAny,))
def register(request):
    json_data = json.loads(request.body)
    try:
        username = json_data['username']
        password = json_data['password']
        email = json_data['email']

        first_name = json_data['first_name']
        last_name = json_data['last_name']
        address = json_data['address']
        tel = json_data['tel']
        birth_date = json_data['birth_date']
        gender = json_data['gender']
        nat_id = json_data['nat_id']
        store_name = json_data['store_name']
        bio = json_data['bio']

        #META
        user_type = json_data['user_type']
        if not (user_type in ['C', 'S']):
            return Response({'error': 'Invalid JSON'},status=HTTP_400_BAD_REQUEST)

        if not (User.objects.filter(username=username).exists() or User.objects.filter(email=email).exists()):
            user = User.objects.create_user(
                username = username,
                password = password,
                email = email,
                first_name = first_name,
                last_name = last_name
            )
            user.save()

            new_profile = Profile.objects.create(
                user = user,
                first_name = first_name,
                last_name = last_name,
                address = address,
                tel = tel,
                birth_date = birth_date,
                gender = gender,
                nat_id = nat_id,
                store_name = store_name,
                bio = bio,
                user_type = user_type,
            )
            new_profile.save()

            new_cart = Cart.objects.create(
                user = user
            )

            token, _ = Token.objects.get_or_create(user=user)

            if email_sys.config.ENABLE:
                text = "http://127.0.0.1:8000/verify/" + token.key
                send_email.send_email(email, 'Confirm your Freshfruit registeration', text, text)
            else:
                new_profile.is_active = True
                new_profile.save()
            return Response({'result': 'Registeration complete'},status=HTTP_200_OK)
        return Response({'result': 'Username or email already existed.'},status=HTTP_200_OK)
    except KeyError:
        return Response({'error': 'Invalid JSON'},status=HTTP_400_BAD_REQUEST)

@api_view(["GET"])
@permission_classes((AllowAny,))
def get_user_data(request, username):
    request_username = username

    user = User.objects.get(username=request_username)
    user_profile = Profile.objects.get(user=user)
    try:
        image = user_profile.avatar.url
    except ValueError:
        image = ''
    data = {
        'id' : user.id,
        'first_name' : user_profile.first_name,
        'last_name' : user_profile.last_name,
        'address' : user_profile.address,
        'tel' : user_profile.tel,
        'birth_date' : user_profile.birth_date,
        'gender' : user_profile.gender,
        'bio' : user_profile.bio,
        'store_name' : user_profile.store_name,
        'nat_id' : user_profile.nat_id,
        'user_type' : user_profile.user_type,
        'image' : image,
    }
    return Response(data, status=HTTP_200_OK)

@api_view(["GET"])
def get_token_data(request):
    token_string = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    token = Token.objects.get(key=token_string)
    user = token.user
    user_profile = Profile.objects.get(user=user)
    data = profile_to_dict(user_profile)
    return Response(data, status=HTTP_200_OK)

@api_view(["POST"])
def edit_user_data(request, username):
    token_string = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    token = Token.objects.get(key=token_string)
    user = token.user
    user_profile = Profile.objects.get(user=user)

    if user.username != username:
        return Response({'error': 'Invalid Credentials.'},status=HTTP_400_BAD_REQUEST)

    json_data = json.loads(request.body)
    try:
        first_name = json_data['first_name']
        last_name = json_data['last_name']
        address = json_data['address']
        tel = json_data['tel']
        birth_date = json_data['birth_date']
        gender = json_data['gender']
        nat_id = json_data['nat_id']
        store_name = json_data['store_name']
        bio = json_data['bio']
    except KeyError:
        return Response({'error': 'Invalid JSON'},status=HTTP_400_BAD_REQUEST)

    user_profile.first_name = first_name
    user_profile.last_name = last_name
    user_profile.address = address
    user_profile.tel = tel
    user_profile.birth_date = birth_date
    user_profile.gender = gender
    user_profile.store_name = store_name
    user_profile.bio = bio
    user_profile.nat_id = nat_id
    user_profile.save()

    data = {
        'id' : user.id,
        'first_name' : user_profile.first_name,
        'last_name' : user_profile.last_name,
        'address' : user_profile.address,
        'tel' : user_profile.tel,
        'birth_date' : user_profile.birth_date,
        'gender' : user_profile.gender,
        'store_name' : user_profile.store_name,
        'bio' : user_profile.bio,
    }

    return Response(data, status=HTTP_200_OK)

@api_view(["POST"])
def upload_user_profile(request):
    token_string = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    token = Token.objects.get(key=token_string)
    user = token.user
    user_profile = Profile.objects.get(user=user)
    try:
        file = request.FILES['image']
    except MultiValueDictKeyError:
        return Response({'error': 'Invalid request'}, status=HTTP_400_BAD_REQUEST)
    user_profile.avatar = file
    user_profile.save()
    image = user_profile.avatar.url
    return Response({'url': image}, status=HTTP_200_OK)

@api_view(["GET"])
@permission_classes((AllowAny,))
def search_store(request):
    try:
        json_data = json.loads(request.body)
        store_name = json_data['store_name']
        store_filtered = Profile.objects.filter(store_name__icontains = store_filtered)
    except KeyError:
        return Response({'error': 'Invalid JSON'},status=HTTP_400_BAD_REQUEST)
    data = []
    for profile in store_filtered:
        data.append(profile_to_dict(profile))
    return Response(data, status=HTTP_200_OK)

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