from django.db import models
from django.contrib.auth.models import AbstractUser
from factory_manager.models import Workshop, Area, CNC


class CustomUser(AbstractUser):
    name = models.CharField(blank=True, max_length=120)
    surname = models.CharField(blank=True, max_length=120)
    second_name = models.CharField(blank=True, max_length=120)
    position = models.CharField(blank=True, max_length=120)
    phone = models.CharField(blank=True, max_length=120)
    email = models.EmailField(max_length=120, unique=True)

    workshop = models.ForeignKey(Workshop, on_delete=models.CASCADE, null=True)
    area = models.ForeignKey(Area, on_delete=models.CASCADE, null=True)
