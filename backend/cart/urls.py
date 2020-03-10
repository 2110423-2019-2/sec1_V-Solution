from django.contrib import admin
from django.urls import path, include

import .views

urlpatterns = [
    path('get/', get_cart),
    path('add/', add_product_to_cart),
    path('remove,', remove_product_from_cart))
]