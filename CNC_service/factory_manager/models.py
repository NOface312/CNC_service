from django.db import models


#Цех
class Workshop(models.Model):
    name = models.CharField(max_length=120, unique=True)

    def __str__(self):
        title = str(self.name)
        return title


#Участок
class Area(models.Model):
    name = models.CharField(max_length=120)
    workshop = models.ForeignKey(Workshop, on_delete=models.CASCADE)

    def __str__(self):
        title_area = str(self.name)
        title_workshop = str(self.workshop.name)
        return title_workshop + " - " + title_area


#Станок
class CNC(models.Model):
    STATUS_CHOICES = (
        ('Работает', 'Работает'),
        ('Не работает', 'Не работает')
    )
    name = models.CharField(max_length=120)
    area = models.ForeignKey(Area, on_delete=models.CASCADE)

    status = models.CharField(max_length=120, choices=STATUS_CHOICES, blank=True, null=True, default='Работает')

    def __str__(self):
        title_cnc = str(self.name)
        title_area = str(self.area.name)
        return title_area + " - " + title_cnc
