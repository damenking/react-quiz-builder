from django.contrib import admin
from .models import Question, Topic

admin.site.register(Question)
admin.site.register(Topic)