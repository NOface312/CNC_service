from django.db import models
from authentication.models import CustomUser
from area.models import CNC


class Request_For_Repair(models.Model):
    STATUS_CHOICES = (
        ('Выполнено', 'Выполнено'),
        ('Выполняется', 'Выполняется'),
        ('Выполнить невозможно', 'Выполнить невозможно'),
        ('Отправлено', 'Отправлено'),
    )
    boss_repair = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    boss_worker = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    status = models.CharField(
        max_length=120, choices=STATUS_CHOICES, blank=True, null=True, default='Отправлено')
    comment = models.TextField()
    cnc = models.ForeignKey(CNC, on_delete=models.CASCADE)
