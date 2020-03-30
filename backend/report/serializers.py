from rest_framework import serializers
from .models import ReportForm

def report_to_dict(report):
    try:
        image = report.image.url
    except ValueError:
        image = ''
    data = {
        'report_id' : report.report_id ,
        'subject' : report.subject ,
        'reported_user' : report.reported_user ,
        'description' : report.description ,
        'image' : image
    }


    return data