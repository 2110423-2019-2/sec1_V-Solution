from django.contrib import admin
from django.urls import path, include

from .views import *

urlpatterns = [
    path('get/seller', get_seller_order_api),
    path('get/allorder', get_all_order)
]