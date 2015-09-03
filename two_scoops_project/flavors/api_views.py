# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .serializers import FlavorSerializer
from .models import Flavor

class FlavorsList(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request, format=None):
        flavors = Flavor.objects.all()
        serializer = FlavorSerializer(flavors, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = FlavorSerializer(data=request.data['flavor'])
        if serializer.is_valid():
            serializer.save(author=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
