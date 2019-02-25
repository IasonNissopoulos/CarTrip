from rest_framework import serializers
from .models import Location, Car, Exhibition, Excursion, Bundle, Post, Comment, User
from drf_extra_fields.fields import Base64ImageField
from rest_framework.validators import UniqueValidator

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ('id', 'location_address','map_location')
class UserSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
        )
    username = serializers.CharField(
            min_length=6,
            validators=[UniqueValidator(queryset=User.objects.all())]
        )
    password = serializers.CharField(min_length=8)

    first_name = serializers.CharField(
        required=True,
        min_length=2
        )
    last_name = serializers.CharField(
        required=True,
        min_length=2
        )
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'first_name', 'last_name')


class CarSerializer(serializers.ModelSerializer):
    image = Base64ImageField(required=False)

    class Meta:
        model = Car
        fields = ('id', 'company','model', 'year', 'color', 'extra_information',
        'engine', 'cubic_centimeters', 'engineManufacturer', 'image', 'owner')
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
