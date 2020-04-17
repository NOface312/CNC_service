from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    name = models.CharField(blank=True, max_length=120)
    surname = models.CharField(blank=True, max_length=120)
    second_name = models.CharField(blank=True, max_length=120)
    position = models.CharField(blank=True, max_length=120)
    phone = models.CharField(blank=True, max_length=120)
