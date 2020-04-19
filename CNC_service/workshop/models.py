from django.db import models
from django.conf import settings
from factory_manager.models import Workshop, Area, CNC


class Request_For_Trouble(models.Model):
    STATUS_CHOICES = (
        ('Выполнено', 'Выполнено'),
        ('Выполняется', 'Выполняется'),
        ('Выполнить невозможно', 'Выполнить невозможно'),
        ('Отправлено', 'Отправлено'),
    )

    area = models.ForeignKey(Area, on_delete=models.CASCADE)
    boss_workshop = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='boss_workshop_trouble')
    boss_area = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='boss_area_trouble')
    comment = models.TextField()
    
    status = models.CharField(
        max_length=120, choices=STATUS_CHOICES, blank=True, null=True, default='Отправлено')

