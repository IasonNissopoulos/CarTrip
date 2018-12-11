# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import datetime
# reporter=1 article =many report goes into article so the field that is inside the other autos pou mpainei einai 1
# Create your models here.
class Car(models.Model) :
    company = models.CharField(max_length=200)
    model = models.CharField(max_length=200)
    year = models.IntegerField('year', default=0)
    color = models.CharField(max_length=200)
    engine = models.ForeignKey(Engine, on_delete=models.CASCADE) #in case of a car with two engines this will need to change
    extra_information = models.CharField(max_length=500)
    #maybe i can manage photos with photologue django
    #car_image =

class Engine(models.Model) :
    title = models.CharField(max_length=200)
    engine_cubic_centimeters = models.CharField(max_length=20)
    engine_manufacturer = models.CharField(max_length=20)
    
class Exhibition(models.Model) :
    title = models.CharField(max_length=200, unique=True)
    location = models.ManyToManyField('Location' ,on_delete=models.CASCADE)
    date = models.DateTimeField('exhibitionDate')
    cars = models.ManyToManyField(Car, on_delete=models.CASCADE)
    description = models.TextField(max_length=800, blank=True, null=True)
    price = models.IntegerField('price', default=0)

class Excursion(models.Model) :
    title = models.CharField(max_length=200, unique=True)
    location = models.ManyToManyField('Location' ,on_delete=models.CASCADE)
    date = models.DateTimeField('excursionDate')
    price = models.IntegerField('price', default=0)
    cars = models.ManyToManyField(Car, on_delete=CASCADE)
class Location(models.Model) :
    location_address = models.CharField(max_length=200)
    map_location = models.CharField(max_length=200)
class Bundle(models.Model) :
    title = models.CharField(max_length=200, unique=True)
    exhibitions = models.ManyToManyField(Exhibition, on_delete=models.CASCADE)
    excursion = models.ManyToManyField(Excursion, on_delete=models.CASCADE)
    date = models.DateTimeField('packageDates')
    price = models.IntegerField('price', default=0)
class User(models.Model) :
    type = models.IntegerField('userType', default=0)
    username = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    surname = models.CharField(max_length=200)
    exhibitions = models.ForeignKey(Exhibition, on_delete=models.CASCADE)
    packages = models.ForeignKey(Package, on_delete=models.CASCADE)
    excursions = models.ForeignKey(Excursion, on_delete=models.CASCADE)
    password = models.CharField(max_length=200)
class Post(models.Model) :
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField(default='Post')
    likes = models.ForeignKey(Like, on_delete=models.CASCADE)
    post_date = models.DateTimeField(default=datetime.datetime.now() )
class Comment(models.Model) :
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    comment_to = models.ForeignKey(Post, on_delete=models.CASCADE)
    likes = models.ForeignKey()
    post = ForeignKey(Post, on_delete=models.CASCADE)
    comment_date = models.DateTimeField(default=datetime.datetime.now())
class Like(models.Model) :
    recipient = models.ForeignKey(User, on_delete=models.CASCADE)
    giver = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
