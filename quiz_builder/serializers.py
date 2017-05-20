from rest_framework import serializers
from .models import Question, Topic

class QuestionSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Question
        fields = '__all__'

class TopicSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    questions = QuestionSerializer(read_only=True, many=True)
    
    class Meta:
        model = Topic
        fields = '__all__'