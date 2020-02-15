from djongo import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

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

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    user_type = models.CharField(max_length=1, choices=USER_TYPES, blank=True)

    firstName = models.CharField(max_length=20, blank=True)
    lastName = models.CharField(max_length=20, blank=True)
    address = models.TextField(max_length=500, blank=True)
    tel = models.CharField(max_length=10, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)

    bio = models.TextField(max_length=500, blank=True)
    storeName = models.CharField(max_length=20, blank=True)

    is_active = models.BooleanField(default=False)
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)

    def __str__(self):
        return f'{self.user.username} Profile'