from djongo import models
from django.contrib.auth.models import User
from product.models import Product
from cart.models import *

class OrderManager(models.Manager):
    def deduct_product(self, order):
        items = OrderItem.objects.filter(order=order)
        for item in items:
            Product.objects.deduct_product(item.product, item.quantity)
        return order

class Order(models.Model):
    STATUS_TYPES = {
        ('O', 'Ordered'),
        ('P', 'Paid'),
        ('F', 'Finished')
    }

    buyer = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
    status = models.CharField(max_length=1, choices=STATUS_TYPES)
    total_price = models.FloatField(default=0)
    total_deliver_price = models.FloatField(default=0)

    objects = OrderManager()

    def __str__(self):
        return "User {}'s order".format(self.user)


class OrderItem(models.Model):
    STATUS_TYPES = {
        ('O', 'Ordered'),
        ('P', 'Paid'),
        ('W', 'Waiting'),
        ('S', 'Shipping'),
        ('A', 'Arrived'),
    }

    product = models.ForeignKey(Product, null=True, on_delete=models.SET_NULL)
    order = models.ForeignKey(Order, null=True, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    status = models.CharField(max_length=1, choices=STATUS_TYPES)