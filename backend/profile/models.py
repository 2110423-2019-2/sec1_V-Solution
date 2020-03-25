from djongo import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from product.models import Product

class Profile(models.Model):
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    USER_TYPES = {
        ('C', 'Customer'),
        ('S', 'Seller'),
        ('M', 'Moderator')
    }

    user = models.ForeignKey(User, null=True, on_delete='CASCADE')
    user_type = models.CharField(max_length=1, choices=USER_TYPES, blank=True)

    first_name = models.CharField(max_length=20, blank=True)
    last_name = models.CharField(max_length=20, blank=True)
    address = models.TextField(max_length=500, blank=True)
    tel = models.CharField(max_length=10, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)

    store_name = models.CharField(max_length=20, blank=True)
    bio = models.TextField(max_length=500, blank=True)
    nat_id = models.CharField(max_length=13, blank=True)

    is_active = models.BooleanField(default=False)
    avatar = models.ImageField(upload_to='', null=True, blank=True)

    def __str__(self):
        return f'{self.user.username} Profile'