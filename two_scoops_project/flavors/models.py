from django.db import models

class Flavor(models.Model):
    flavor_name = models.CharField(max_length=140)
    flavor_description = models.CharField(max_length=250)
