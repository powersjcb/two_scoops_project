from django.db import models
from two_scoops_project.users.models import User

class Timestampable(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Authorable(models.Model):
    author = models.ForeignKey(User)
    
    class Meta:
        abstract = True
