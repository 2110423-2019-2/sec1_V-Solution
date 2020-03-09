from djongo import models
from django.contrib.auth.models import User
from product.models import Product
from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles

# Create your models here.

class Cart(models.Model):
    user = models.ForeignKey(User, null=True, blank=True, on_delete='CASCADE')
    count = models.PositiveIntegerField(default=0)
    total = models.DecimalField(default=0.00, max_digits=10, decimal_places=2)
    updated = models.DateTimeField(auto_now=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "User: {} has {} items in their cart. Their total is ${}".format(self.user, self.count, self.total)
    
class Entry(models.Model):
    product = models.ForeignKey(Product, null=True, on_delete='CASCADE')
    cart = models.ForeignKey(Cart, null=True, on_delete='CASCADE')
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return "This entry contains {} {}(s).".format(self.quantity, self.product.name)