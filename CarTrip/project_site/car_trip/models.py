# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Car(models.Model) :
    company = models.CharField(max_length=200)
    model = models.CharField(max_length=200)
class Exhibition(models.Model) :
    place = models.CharField(max_length=200)
    date = models.DateTimeField('exhibitionDate')
    cars = models.ForeignKey(Car, on_delete=models.CASCADE)
    description = models.TextField(default='')
