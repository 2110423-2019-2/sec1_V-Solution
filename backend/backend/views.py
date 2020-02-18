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
from profile.models import Profile
import json

@api_view(["POST"])
@permission_classes((AllowAny,))
def login(request):
    json_data = json.loads(request.body)
    try:
        username = json_data['username']
        password = json_data['password']
        if username is None or password is None:
            return Response({'error': 'Please provide both username and password'},
                            status=HTTP_400_BAD_REQUEST)
        user = authenticate(username=username, password=password)
        if not user:
            return Response({'error': 'Invalid Credentials'},
                            status=HTTP_404_NOT_FOUND)
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key, 'id': token.user_id},
                        status=HTTP_200_OK)
    except KeyError:
        return Response({'error': 'Invalid JSON'},status=HTTP_400_BAD_REQUEST)

@api_view(["GET"])
def sample_api(request):
    token_string = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    token = Token.objects.get(key=token_string)
    user = token.user
    user_profile = Profile.objects.get(user=user)
    if not user_profile.is_active:
        return Response({'result': 'User is not authenticate.'}, status=HTTP_200_OK)
    data = {'sample_data': user_profile.store_name}
    return Response(data, status=HTTP_200_OK)