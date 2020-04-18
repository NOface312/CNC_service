from django.db import models
from django.contrib.auth.models import AbstractUser
from workshop.models import Workshop
from area.models import Area


class CustomUser(AbstractUser):
    name = models.CharField(blank=True, max_length=120)
    surname = models.CharField(blank=True, max_length=120)
    second_name = models.CharField(blank=True, max_length=120)
    position = models.CharField(blank=True, max_length=120)
    phone = models.CharField(blank=True, max_length=120)
    
    workshop = models.ForeignKey(Workshop, on_delete=models.CASCADE)
    area = models.ForeignKey(Area, on_delete=models.CASCADE)
