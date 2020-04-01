from django.contrib import admin
from django.urls import path, include

from .views import *

urlpatterns = [
    path('test', test_payment),
    path('order/<str:order_id>', order_payment)
]