from rest_framework import serializers
from .models import Engine, Location, Car, Exhibition, Excursion, Bundle, Post, Comment

class EngineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Engine
        fields = ('title', 'engine_cubic_centimeters', 'engine_manufacturer')
class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ('location_address',,'map_location')
class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ('company','model', 'year', 'color', 'engine', 'extra_information')
class ExhibitionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exhibition

        fields = ('title', 'location', 'date', 'cars', 'description', 'price')
class ExcursionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Excursion
        fields = ('title', 'location', 'cars', 'description', 'price')
class BundleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bundle
        fields = ('title', 'exhibitions', 'excursions', 'date', 'price')
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('text', 'post_date')
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('post', 'comment_text', 'comment_date')
