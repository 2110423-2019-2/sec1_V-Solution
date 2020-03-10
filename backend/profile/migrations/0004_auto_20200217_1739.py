# Generated by Django 2.1.3 on 2020-02-17 10:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profile', '0003_auto_20200217_1738'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='user_type',
            field=models.CharField(blank=True, choices=[('M', 'Moderator'), ('C', 'Customer'), ('S', 'Seller')], max_length=1),
        ),
    ]
