"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from .views import login
from profile.views import *
from product.views import *

urlpatterns = [
    path('verify/<str:token>/', verify_email),
    path('admin/', admin.site.urls),
    path('api/login', login),
    path('api/register', register),
    path('api/getuser/<str:username>/', get_user_data),
    path('api/edituser/<str:username>/', edit_user_data),
    path('api/user/token/', get_token_data),
    path('api/user/uploadimage/', upload_user_profile),
    path('api/product/uploadimage', upload_product_image),
    path('api/createproduct/', create_product),
    path('api/allproduct/', get_all_product),
    path('api/getproduct/<str:product_id>/', get_product),
    path('api/getuserproduct/<str:username>/', get_product_from_user),
    path('api/updateproduct/<str:product_id>/<str:status>/', update_product),
    path('api/editproduct/<str:product_id>/', edit_product),
    # Cart
    path('api/cart/', include('cart.urls')),
    path('api/comment/', include('comment.urls')),
    path('api/report/', include('report.urls'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
