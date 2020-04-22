from rest_framework import serializers
from .models import Request_For_Repair


class Request_For_RepairSerializer(serializers.ModelSerializer):
    name = serializers.CharField(min_length=2, required=True)
    cnc = serializers.StringRelatedField()
    boss_repair = serializers.StringRelatedField()
    worker = serializers.StringRelatedField()
    status = serializers.CharField(min_length=5, required=True)


    class Meta:
        model = Request_For_Repair
        fields = ('name', 'cnc', 'boss_repair',
                  'worker', 'date_request', 'date_deadline', 'comment', 'status')

    def create(self, validated_data):
        return Request_For_Repair.objects.create(**validated_data)
