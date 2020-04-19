from django.db import models
from factory_manager.models import Workshop, Area, CNC

class Stuff(models.Model):
    FIO = models.CharField(max_length=120)
    email = models.EmailField(max_length=30)
    phone = models.CharField(max_length=120, unique=True)
    position = models.CharField(max_length=30)

    workshop = models.ForeignKey(Workshop, on_delete=models.CASCADE)
    area = models.ForeignKey(Area, on_delete=models.CASCADE)

    def __str__(self):
        title = str(self.FIO)
        return title
