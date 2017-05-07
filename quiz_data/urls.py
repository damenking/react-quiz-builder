from rest_framework.routers import DefaultRouter
from .api import QuestionViewSet, TopicViewSet

router = DefaultRouter()

router.register(r'questions', QuestionViewSet)
router.register(r'topics', TopicViewSet)

urlpatterns = router.urls