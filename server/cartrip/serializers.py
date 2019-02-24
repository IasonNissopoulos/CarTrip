from rest_framework import serializers
from .models import Location, Car, Exhibition, Excursion, Bundle, Post, Comment

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ('id', 'location_address','map_location')
class CarSerializer(serializers.ModelSerializer):
    #owner = serializers.SlugRelatedField(

    #    read_only=True,
    #    slug_field='username'
    #)
    class Meta:
        model = Car
        fields = ('id', 'company','model', 'year', 'color', 'extra_information',
        'engine', 'cubic_centimeters', 'engineManufacturer'#, 'image'
        )
class ExhibitionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exhibition

        fields = ('id', 'title', 'location', 'date', 'cars', 'description', 'price')
class ExcursionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Excursion
        fields = ('id', 'title', 'location','date', 'cars', 'description', 'price')
class BundleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bundle
        fields = ('id', 'title', 'exhibitions', 'excursions', 'date', 'price')
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'author', 'title', 'text', 'post_date')
class CommentSerializer(serializers.ModelSerializer):
    post = serializers.SlugRelatedField(
        read_only=True,
        slug_field='id'
    )
    class Meta:
        model = Comment
        fields = ('id', 'author', 'post', 'comment_text', 'comment_date')
