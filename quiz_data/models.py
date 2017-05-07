from django.db import models


class Topic(models.Model):
    name = models.CharField(max_length = 50)
    user = models.CharField(max_length = 50)

    def __str__(self):
        return self.name

class Question(models.Model): 
    question = models.CharField(max_length = 255)
    questionType = models.CharField(max_length = 255)
    possibleAnswerA = models.CharField(max_length = 255, blank=True)
    possibleAnswerB = models.CharField(max_length = 255, blank=True)
    possibleAnswerC = models.CharField(max_length = 255, blank=True)
    possibleAnswerD = models.CharField(max_length = 255, blank=True)
    correctAnswer = models.CharField(max_length = 255, blank=True)
    questionTopic = models.ForeignKey(Topic, related_name="questions")

    def __str__(self):
        return self.question