from rest_framework import serializers
from .models import Workshop, Area, CNC


class WorkshopSerializer(serializers.ModelSerializer):
    name = serializers.CharField(min_length=2, required=True)

    class Meta:
        model = Workshop
        fields = ('name',)

    def create(self, validated_data):
        return Workshop.objects.create(**validated_data)


class AreaSerializer(serializers.ModelSerializer):
    name = serializers.CharField(min_length=2, required=True)
    workshop = serializers.StringRelatedField()

    class Meta:
        model = Area
        fields = ('name', 'workshop')

    def create(self, validated_data):
        return Area.objects.create(**validated_data)


class CNCSerializer(serializers.ModelSerializer):
    name = serializers.CharField(min_length=2, required=True)
    area = serializers.StringRelatedField()

    class Meta:
        model = CNC
        fields = ('name', 'area', 'status')

    def create(self, validated_data):
        return CNC.objects.create(**validated_data)
