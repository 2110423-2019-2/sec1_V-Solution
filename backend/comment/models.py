from djongo import models
from django.contrib.auth.models import User
from product.models import Product
from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles
# Create your models here.

class Comment(models.Model):

    timestamp = models.DateTimeField(auto_now=True)
    store_name = models.CharField(max_length=20, blank=True)
    poster_user = models.ForeignKey(User, null=True, on_delete='CASCADE')
    text = models.CharField(max_length=500)

