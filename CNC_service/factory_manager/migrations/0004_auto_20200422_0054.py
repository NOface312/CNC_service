# Generated by Django 2.2.5 on 2020-04-21 21:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('factory_manager', '0003_auto_20200422_0010'),
    ]

    operations = [
        migrations.AlterField(
            model_name='area',
            name='name',
            field=models.CharField(max_length=120),
        ),
        migrations.AlterField(
            model_name='cnc',
            name='name',
            field=models.CharField(max_length=120),
        ),
    ]