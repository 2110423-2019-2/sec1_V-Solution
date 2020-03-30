from djongo import models
from django.contrib.auth.models import User
from product.models import Product
from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles

class Cart(models.Model):
    user = models.ForeignKey(User, null=True, blank=True, on_delete='CASCADE')
    count = models.PositiveIntegerField(default=0)
    total_price = models.FloatField(default=0)
    total_deliver_price = models.FloatField(default=0)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "User {}'s cart".format(self.user)
    
class Entry(models.Model):
    product = models.ForeignKey(Product, null=True, on_delete='CASCADE')
    cart = models.ForeignKey(Cart, null=True, on_delete='CASCADE')
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return "This entry contains {} {}(s).".format(self.quantity, self.product.productName)