from rest_framework import serializers
from django.contrib.auth.models import User

def profile_to_dict(profile):
    user = profile.user
    data = {
        'id' : user.id,
        'first_name' : profile.first_name,
        'last_name' : profile.last_name,
        'address' : profile.address,
        'tel' : profile.tel,
        'birth_date' : profile.birth_date,
        'gender' : profile.gender,
        'store_name' : profile.store_name,
        'bio' : profile.bio,
    }
    return data
