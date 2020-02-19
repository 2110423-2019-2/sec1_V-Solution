from __future__ import unicode_literals

from djongo import models
from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles

LEXERS = [item for item in get_all_lexers() if item[1]]
LANGUAGE_CHOICES = sorted([(item[1][0], item[0]) for item in LEXERS])
STYLE_CHOICES = sorted([(item, item) for item in get_all_styles()])

# Create your models here.
class Product(models.Model):
    seller = models.ForeignKey(to='profile.Profile', null=True, on_delete=models.PROTECT)
    productName = models.CharField(max_length=50)
    proDuctDesc = models.CharField(max_length=500, blank=True)
    category = models.CharField(max_length=20, blank=True)
    subcategory = models.CharField(max_length=20, blank=True)
    province = models.CharField(max_length=30)
    district = models.CharField(max_length=30)
    productType = models.CharField(max_length=1)
    harvest_date = models.DateField()
    price = models.FloatField()
    amount = models.FloatField()
    unitOfAmount = models.CharField(max_length=20)
    deliverCompany = models.CharField(max_length=20)
    deliverPrice  = models.FloatField()

    
    def __str__(self):
        return f'{self.seller.first_name} {self.seller.last_name} : {self.productName}'

