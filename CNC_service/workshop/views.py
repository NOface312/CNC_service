from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *


class Request_For_Trouble_API_LIST(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def get(self, request):
        for_trouble = Request_For_Trouble.objects.all()
        serializer = Request_For_TroubleSerializer(
            for_trouble, many=True)
        return Response(serializer.data)

    def post(self, request, format='json'):
        data = request.data
        serializer = Request_For_TroubleSerializer(data=data)
        if serializer.is_valid():
            for_trouble = serializer.save()
            json = serializer.data
            return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Request_For_Trouble_API_DETAIL(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def get_object(self, pk):
        try:
            return Request_For_Trouble.objects.get(pk=pk)
        except Request_For_Trouble.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        for_trouble = self.get_object(pk)
        serializer = Request_For_TroubleSerializer(for_trouble)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        for_trouble = self.get_object(pk)
        serializer = Request_For_TroubleSerializer(
            for_trouble, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        for_trouble = self.get_object(pk)
        for_trouble.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
