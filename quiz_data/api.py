from rest_framework.viewsets import ModelViewSet
from .models import Question
from .serializers import QuestionSerializer

class QuestionViewSet(ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer