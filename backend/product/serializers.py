from rest_framework import serializers

from .models import Product , LANGUAGE_CHOICES, STYLE_CHOICES

class ProductSerializer(serializers.Serializer) :
    sellerID = serializers.IntegerField()
    productID = serializers.IntegerField()
    productName = serializers.CharField(max_length=50)
    proDuctDesc = serializers.CharField(max_length=500)
    category = serializers.CharField(max_length=20)
    subcategory = serializers.CharField(max_length=20)
    province = serializers.CharField(max_length=30)
    district = serializers.CharField(max_length=30)
    productType = serializers.CharField(max_length=1)
    harvest_date = serializers.DateField()
    price = serializers.FloatField()
    amount = serializers.FloatField()
    unitOfAmount = serializers.CharField(max_length=20)
    deliverCompany = serializers.CharField(max_length=20)
    deliverPrice  = serializers.FloatField()


    def create(self , validate_data) :
        return Product.objects.create(**validate_data)

    def update(self , instance , validate_data ) :
        instance.productName = validate_data.get('productName' , instance.productName)
        instance.proDuctDesc = validate_data.get('proDuctDesc' , instance.proDuctDesc)
        instance.category = validate_data.get('category' , instance.category)
        instance.subcategory = validate_data.get('subcategory' , instance.subcategory)
        instance.province = validate_data.get('province' , instance.province)
        instance.district = validate_data.get('district' , instance.district)
        instance.productType = validate_data.get('productType' , instance.productType)
        instance.harvest_date = validate_data.get('harvest_date' , instance.harvest_date)
        instance.price = validate_data.get('price' , instance.price)
        instance.amount = validate_data.get('amount' , instance.amount)
        instance.unitOfAmount = validate_data.get('unitOfAmount' , instance.unitOfAmount)
        instance.deliverCompany = validate_data.get('deliverCompany' , instance.deliverCompany)
        instance.deliverPrice  = validate_data.get('deliverPrice' , instance.deliverPrice)
        instance.save()
        return instance

def product_to_dict(product):
    try:
        image = product.image.url
    except ValueError:
        image = ''
    data = {
        "id" : product.id,
        "product_name" : product.productName,
        "product_desc" : product.proDuctDesc,
        "category" : product.category,
        "subcategory" : product.subcategory,
        "province" : product.province,
        "district" : product.district,
        "product_type" : product.productType,
        "harvest_date" : product.harvest_date,
        "price" : product.price,
        "amount" : product.amount,
        "unit_of_amount" : product.unitOfAmount,
        "deliver_company" : product.deliverCompany,
        "deliver_price" : product.deliverPrice,
        "image" : image,
        "product_type" : product.productType
    }
    return data


