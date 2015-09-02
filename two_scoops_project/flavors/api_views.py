# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import FlavorSerializer
from .models import Flavor

class FlavorsAPI(APIView):
    def get(self, request, format=None):
        flavors = Flavor.objects.all()
        serializer = FlavorSerializer(flavor, many=True)
        return Response(serializer.data)
