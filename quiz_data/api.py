from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions

from .models import Question, Topic
from .serializers import QuestionSerializer, TopicSerializer
from .permissions import IsOwner

class QuestionViewSet(ModelViewSet):
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwner)
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class TopicViewSet(ModelViewSet):
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwner)
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer