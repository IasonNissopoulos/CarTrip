from .models import *
from .serializers import *
from rest_framework import generics

from django.contrib.staticfiles import views

from rest_framework import permissions

def index(request):
    return views.serve(request, 'index.html')

class CarList(generics.ListCreateAPIView):
    serializer_class = CarSerializer

    def get_queryset(self):
        queryset = Car.objects.all()
        title = self.request.query_params.get('title', None)
        if title is not None:
            queryset = queryset.filter(title__contains=title)
        return queryset

class CarDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

class LocationList(generics.ListCreateAPIView):
    serializer_class = LocationSerializer
    def get_queryset(self):
        queryset = Location.objects.all()
        title = self.request.query_params.get('title', None)
        if title is not None:
            queryset = queryset.filter(title__contains=title)
        return queryset

class LocationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

class ExhibitionList(generics.ListCreateAPIView):
    serializer_class = ExhibitionSerializer
    def get_queryset(self):
        queryset = Exhibition.objects.all()
        title = self.request.query_params.get('title', None)
        if title is not None:
            queryset = queryset.filter(title__contains=title)
        return queryset

class ExhibitionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Exhibition.objects.all()
    serializer_class = ExhibitionSerializer

class ExcursionList(generics.ListCreateAPIView):
    serializer_class = ExcursionSerializer
    def get_queryset(self):
        queryset = Excursion.objects.all()
        title = self.request.query_params.get('title', None)
        if title is not None:
            queryset = queryset.filter(title__contains=title)
        return queryset

class ExcursionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Excursion.objects.all()
    serializer_class = ExcursionSerializer

class PostList(generics.ListCreateAPIView):
    serializer_class = PostSerializer
    def get_queryset(self):
        queryset = Post.objects.all()
        title = self.request.query_params.get('title', None)
        if title is not None:
            queryset = queryset.filter(title__contains=title)
        return queryset

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CommentList(generics.ListCreateAPIView):
    serializer_class = CommentSerializer
    def get_queryset(self):
        queryset = Comment.objects.all()
        title = self.request.query_params.get('title', None)
        if title is not None:
            queryset = queryset.filter(title__contains=title)
        return queryset

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
