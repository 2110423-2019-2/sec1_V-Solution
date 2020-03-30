from djongo import models

# Create your models here.
class ReportForm(models.Model):
    
    subject = models.CharField(max_length=30)
    reported_user = models.CharField(max_length=30)
    description = models.CharField(max_length=200)
    picture = models.ImageField(upload_to='', null=True, blank=True)