from django.contrib import admin
from django.urls import path, include

from .views import *

urlpatterns = [
    path('getallreport' , get_all_report) ,
    path('submitreport'  , submit_report ) ,
    path('uploadreportimage/<str:report_id>' , upload_report_pic )
]