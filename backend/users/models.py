from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=30)

    storeName = models.CharField(max_length=20)
    firstName = models.CharField(max_length=20)
    lastName = models.CharField(max_length=20)
