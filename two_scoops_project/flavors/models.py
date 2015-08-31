from django.db import models
from two_scoops_project.utils.behaviors import Authorable, Timestampable

class Flavor(Authorable, Timestampable, models.Model):
    flavor_name = models.CharField(max_length=140)
    flavor_description = models.CharField(max_length=250)

