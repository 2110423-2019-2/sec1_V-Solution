from djongo import models
from django.contrib.auth.models import User
from product.models import Product
from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles

# Create your models here.

class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    items = models.ManyToManyField(Product)

    def __str__(self):
        return f"{self.seller.first_name} {self.seller.last_name}'s cart"
    
