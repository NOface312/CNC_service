from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *


class Request_For_Repair_API_LIST(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def get(self, request):
        for_repair = Request_For_Repair.objects.all()
        serializer = Request_For_RepairSerializer(
            for_repair, many=True)
        return Response(serializer.data)

    def post(self, request, format='json'):
        data = request.data
        serializer = Request_For_RepairSerializer(data=data)
        if serializer.is_valid():
            for_repair = serializer.save()
            json = serializer.data
            return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Request_For_Repair_API_DETAIL(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def get_object(self, pk):
        try:
            return Request_For_Repair.objects.get(pk=pk)
        except Request_For_Repair.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        for_repair = self.get_object(pk)
        serializer = Request_For_RepairSerializer(for_repair)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        for_repair = self.get_object(pk)
        serializer = Request_For_RepairSerializer(
            for_repair, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        for_repair = self.get_object(pk)
        for_repair.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
