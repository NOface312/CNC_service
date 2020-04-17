from django.db import models

class Stuff(models.Model):
    FIO = models.CharField(max_length=120)
    email = models.EmailField(max_length=30)
    phone = models.CharField(max_length=30)
    position = models.CharField(max_length=30)

    def __str__(self):
        title = str(self.FIO)
        return title
