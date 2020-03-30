from django.contrib import admin
from django.urls import path, include

from .views import *

urlpatterns = [
    path('get' , get_all_comment) ,
    path('postcomment'  , post_comment )
]