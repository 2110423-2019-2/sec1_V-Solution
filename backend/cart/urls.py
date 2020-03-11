from django.contrib import admin
from django.urls import path, include

from .views import *

urlpatterns = [
    path('get/', get_cart),
    path('add/', add_product_to_cart),
    path('remove/', remove_product_from_cart),
    path('clear/', clear_cart),
    path('checkout/', cart_checkout)
]