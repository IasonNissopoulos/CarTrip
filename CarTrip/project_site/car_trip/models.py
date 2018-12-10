# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Car(models.Model) :
    company = models.CharField(max_length=200)
    model = models.CharField(max_length=200)
    year = models.IntegerField('year', default=0)
class Exhibition(models.Model) :
    place = models.CharField(max_length=200)
    date = models.DateTimeField('exhibitionDate')
    cars = models.ForeignKey(Car, on_delete=models.CASCADE)
    description = models.TextField(default='')
    price = models.IntegerField('price', default=0)

class Excursion(models.Model) :
    location = models.ForeignKey('Location' ,on_delete=models.CASCADE)
    date = models.DateTimeField('excursionDate')
    price = models.IntegerField('price', default=0)
class Location(models.Model) :
    location_address = models.CharField(max_length=200)
    map_location = models.CharField(max_length=200)
class Package(models.Model) :
    exhibitions = models.ForeignKey(Exhibition, on_delete=models.CASCADE)
    excursion = models.ForeignKey(Excursion, on_delete=models.CASCADE)
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
    comments = Models.ForeignKey()
    post_date = models.DateTimeField('post date')
class Comment(models.Model) :
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    comment_to = models.ForeignKey(Post, on_delete=models.CASCADE)
    likes = models.ForeignKey()
    comment_date = models.DateTimeField('comment date')
class Like(models.Model) :
    recipient = models.ForeignKey(User, on_delete=models.CASCADE)
    giver = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
