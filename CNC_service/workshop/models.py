from django.db import models
from authentication.models import CustomUser
from area.models import Area

class Workshop(models.Model):
    name = models.CharField(max_length=120)


class Request_For_Trouble(models.Model):
    STATUS_CHOICES = (
        ('Выполнено', 'Выполнено'),
        ('Выполняется', 'Выполняется'),
        ('Выполнить невозможно', 'Выполнить невозможно'),
        ('Отправлено', 'Отправлено'),
    )

    area = models.ForeignKey(Area, on_delete=models.CASCADE)
    boss_workshop = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    boss_area = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    comment = models.TextField()
    
    status = models.CharField(
        max_length=120, choices=STATUS_CHOICES, blank=True, null=True, default='Отправлено')

