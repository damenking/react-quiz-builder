from rest_framework.viewsets import ModelViewSet
from .models import Question, Topic
from .serializers import QuestionSerializer, TopicSerializer

class QuestionViewSet(ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class TopicViewSet(ModelViewSet):
    queryset = Topic.objects.filter()
    serializer_class = TopicSerializer