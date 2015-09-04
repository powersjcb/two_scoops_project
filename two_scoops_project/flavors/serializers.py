from .models import Flavor
from rest_framework import serializers


# effectively acts as the 'strong params of rails'
class FlavorSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Flavor
        fields = (
            'id', 'flavor_name',
            'flavor_description', 'created_at',
            'author',
            )
        read_only_fields = ('id', 'created_at', 'author')
        extra_kwards = {'author': {'allow_null': True}}
