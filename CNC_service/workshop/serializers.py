from rest_framework import serializers
from .models import Request_For_Trouble


class Request_For_TroubleSerializer(serializers.ModelSerializer):
    name = serializers.CharField(min_length=2, required=True)
    area = serializers.StringRelatedField()
    boss_workshop = serializers.StringRelatedField()
    boss_area = serializers.StringRelatedField()
    status = serializers.CharField(min_length=5, required=True)


    class Meta:
        model = Request_For_Trouble
        fields = ('name', 'area', 'boss_workshop',
                  'boss_area', 'date_request', 'date_deadline', 'comment', 'status', 'pk')

    def create(self, validated_data):
        return Request_For_Trouble.objects.create(**validated_data)
