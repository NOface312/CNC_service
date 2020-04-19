# Generated by Django 2.2.5 on 2020-04-19 21:58

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('factory_manager', '__first__'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Request_For_Boss_Repair',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(auto_now=True)),
                ('comment', models.TextField()),
                ('status', models.CharField(blank=True, choices=[('Выполнено', 'Выполнено'), ('Выполняется', 'Выполняется'), ('Выполнить невозможно', 'Выполнить невозможно'), ('Отправлено', 'Отправлено')], default='Отправлено', max_length=120, null=True)),
                ('type_request', models.CharField(blank=True, choices=[('Выполнено', 'Выполнено'), ('Выполняется', 'Выполняется'), ('Выполнить невозможно', 'Выполнить невозможно'), ('Отправлено', 'Отправлено')], default='Отправлено', max_length=120, null=True)),
                ('area', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='factory_manager.Area')),
                ('boss_area', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='boss_area_boss_repair', to=settings.AUTH_USER_MODEL)),
                ('boss_repair', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='boss_repair_boss_repair', to=settings.AUTH_USER_MODEL)),
                ('cnc', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='factory_manager.CNC')),
            ],
        ),
    ]
