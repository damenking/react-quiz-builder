from django.db import models

class Question(models.Model): 
    question = models.CharField(max_length = 255)
    correctAnswer = models.CharField(max_length = 255, blank=True)
    def __str__(self):
        return self.question