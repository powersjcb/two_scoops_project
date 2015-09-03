from .models import Flavor
from rest_framework import serializers


# effectively acts as the 'strong params of rails'
class FlavorSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Flavor
        fields = ('flavor_name', 'flavor_description')
        read_only_fields = ('id')
