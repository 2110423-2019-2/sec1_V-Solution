from django.contrib import admin
from django.urls import path, include

from .views import *

urlpatterns = [
    path('get/<str:store_name>' , get_all_comment) ,
    path('postcomment'  , post_comment )
]