from django.db import models


#Цех
class Workshop(models.Model):
    name = models.CharField(max_length=120)

    def __str__(self):
        title = str(self.name)
        return title


#Участок
class Area(models.Model):
    name = models.CharField(max_length=120)
    workshop = models.ForeignKey(Workshop, on_delete=models.CASCADE)

    def __str__(self):
        title = str(self.name)
        return title


#Станок
class CNC(models.Model):
    name = models.CharField(max_length=120)
    area = models.ForeignKey(Area, on_delete=models.CASCADE)

    def __str__(self):
        title = str(self.name)
        return title
