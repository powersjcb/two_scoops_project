# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import FlavorSerializer
from .models import Flavor

class FlavorsList(APIView):
    def get(self, request, format=None):
        flavors = Flavor.objects.all()
        serializer = FlavorSerializer(flavor, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = FlavorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_403_FORBIDDEN)
