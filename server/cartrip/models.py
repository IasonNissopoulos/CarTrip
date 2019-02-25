# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib.auth.models import User
from django.conf import settings
from django.db import models
import datetime
from drf_extra_fields.fields import Base64ImageField


# reporter=1 article =many report goes into article so the field that is inside the other autos pou mpainei einai 1
# Create your models here.

#Location in progress
class Location(models.Model) :
    location_address = models.CharField(max_length=200)
    map_location = models.CharField(max_length=200)


class Car(models.Model) :

    company = models.CharField(max_length=200)
    model = models.CharField(max_length=200)
    year = models.IntegerField('year', default=0)
    color = models.CharField(max_length=200)
    extra_information = models.CharField(max_length=500, null=True, blank=True)
    engine = models.CharField(max_length=200, blank=True, null=True)
    cubic_centimeters = models.CharField(max_length=20, blank=True, null=True)
    engineManufacturer = models.CharField(max_length=20, blank=True, null=True)
    image = Base64ImageField(required=False)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    def __str__(self):
        return "%s %s %s" % (self.company, self.model, self.year)
    #maybe i can manage photos with photologue django
    #car_image =
class Exhibition(models.Model) :
    title = models.CharField(max_length=200, unique=True)
    location = models.ManyToManyField(Location)
    date = models.DateTimeField('exhibitionDate')
    cars = models.ManyToManyField(Car)
    description = models.TextField(max_length=800, blank=True, null=True)
    price = models.IntegerField('price', default=0)

    def __str__(self):
        return self.title
class Excursion(models.Model) :
    title = models.CharField(max_length=200, unique=True)
    location = models.ManyToManyField(Location)
    date = models.DateTimeField('excursionDate')
    cars = models.ManyToManyField(Car)
    description = models.TextField(max_length=800, blank=True, null=True)
    price = models.IntegerField('price', default=0)

    def __str__(self):
        return self.title
class Bundle(models.Model) :
    title = models.CharField(max_length=200, unique=True)
    exhibitions = models.ManyToManyField(Exhibition)
    excursions = models.ManyToManyField(Excursion)
    date = models.DateTimeField('BundleDates')
    price = models.IntegerField('price', default=0)
    def __str__(self):
        return self.title
#class Like(models.Model) :
    #recipient = models.ForeignKey(User, on_delete=models.CASCADE)
    #giver = models.ForeignKey(User, on_delete=models.CASCADE)

class Post(models.Model) :
    author = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
    title = models.TextField(default='Title')
    text = models.TextField(default='Post')
    #likes = models.ManyToManyField(Like)
    post_date = models.DateTimeField(auto_now=True )
    def __str__(self):
        return "%s %s %s" % (self.title, self.text, self.post_date)
class Comment(models.Model) :
    author = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    comment_text = models.TextField(default='Comment')
    comment_date = models.DateTimeField(auto_now=True)
    def __str__(self):
        return "%s %s %s" % (self.comment_text, self.post_date)
