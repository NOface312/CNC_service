from django.db import models
from workshop.models import Workshop
from authentication.models import CustomUser

class Area(models.Model):
    name = models.CharField(max_length=120)
    workshop = models.ForeignKey(Workshop, on_delete=models.CASCADE)


#станок
class CNC(models.Model):
    name = models.CharField(max_length=120)
    area = models.ForeignKey(Area, on_delete=models.CASCADE)


class Request_For_Boss_Repair(models.Model):
    STATUS_CHOICES = (
        ('Выполнено', 'Выполнено'),
        ('Выполняется', 'Выполняется'),
        ('Выполнить невозможно', 'Выполнить невозможно'),
        ('Отправлено', 'Отправлено'),
    )
    TYPE_CHOICES = (
        ('Профилактика', 'Профилактика'),
        ('Ремонт', 'Ремонт'),
    )

    area = models.ForeignKey(Area, on_delete=models.CASCADE)
    cnc = models.ForeignKey(CNC, on_delete=models.CASCADE)
    boss_area = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    boss_repair = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now=True)
    comment = models.TextField()

    status = models.CharField(
        max_length=120, choices=STATUS_CHOICES, blank=True, null=True, default='Отправлено')

    type_request = models.CharField(
        max_length=120, choices=STATUS_CHOICES, blank=True, null=True, default='Отправлено')
