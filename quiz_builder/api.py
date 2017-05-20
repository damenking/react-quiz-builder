from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions

from .models import Question, Topic
from .serializers import QuestionSerializer, TopicSerializer


class QuestionViewSet(ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    def get_queryset(self):
        user = self.request.user
        return self.queryset.filter(owner=user)
    
 

class TopicViewSet(ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    def get_queryset(self):
        user = self.request.user
        return self.queryset.filter(owner=user)
