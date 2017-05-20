# this is based on being an app within thedayman.com so initial routing happens at the root of that project

from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView
from rest_framework.routers import DefaultRouter
from .api import QuestionViewSet, TopicViewSet

router = DefaultRouter()

router.register(r'questions', QuestionViewSet)
router.register(r'topics', TopicViewSet)

urlpatterns = router.urls
urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='quiz_builder.html')),
    url(r'^api/', include(router.urls)),
]