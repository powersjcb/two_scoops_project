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
        serializer = FlavorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.perform_create()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def perform_create(self, serializer):
        if serializer.data.get('author') == None:
            serializer.save(owner=self.request.user)

class FlavorsSearch(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        # chain '.filter().filter()' methods to create 'OR' query
        search_term = request.GET.get('term')
        if search_term is not None and len(search_term) > 2:
            flavors = Flavor.objects.filter(
                flavor_name__icontains=search_term
            ).filter(
                flavor_description__icontains=search_term
            )
            serializer = FlavorSerializer(flavors, many=True)
            return Response(serializer.data)
        return Response({})
