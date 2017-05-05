from rest_framework.routers import DefaultRouter
from .api import QuestionViewSet

router = DefaultRouter()

router.register(r'questions', QuestionViewSet)

urlpatterns = router.urls