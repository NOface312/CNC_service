# Generated by Django 2.2.5 on 2020-04-20 17:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('factory_manager', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='cnc',
            name='status',
            field=models.CharField(blank=True, choices=[('Работает', 'Работает'), ('Не работает', 'Не работает')], default='Работает', max_length=120, null=True),
        ),
    ]
