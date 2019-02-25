from .models import *
from .serializers import *
from rest_framework import generics

from django.contrib.staticfiles import views

from rest_framework import permissions

def index(request):
    return views.serve(request, 'index.html')

class UserList(generics.ListCreateAPIView):
    serializer_class = UserSerializer
    def get_queryset(self):
        queryset = User.objects.all()
        username = self.request.query_params.get('username', None)
        if username is not None:
            queryset = queryset.filter(username__contains=username)
        return queryset

class UserDetail(generics.ListCreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class CarList(generics.ListCreateAPIView):
    serializer_class = CarSerializer
    def get_queryset(self):
        queryset = Car.objects.all()
        model = self.request.query_params.get('model', None)
        if model is not None:
            queryset = queryset.filter(model__contains=model)
        return queryset
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
class CarDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
class LocationList(generics.ListCreateAPIView):
    serializer_class = LocationSerializer
    def get_queryset(self):
        queryset = Location.objects.all()
        title = self.request.query_params.get('title', None)
        if title is not None:
            queryset = queryset.filter(title__contains=title)
        return queryset
    http_method_names = ['get']
class LocationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    http_method_names = ['get']
class ExhibitionList(generics.ListCreateAPIView):
    serializer_class = ExhibitionSerializer
    def get_queryset(self):
        queryset = Exhibition.objects.all()
        title = self.request.query_params.get('title', None)
        if title is not None:
            queryset = queryset.filter(title__contains=title)
        return queryset
    http_method_names = ['get']
class ExhibitionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Exhibition.objects.all()
    serializer_class = ExhibitionSerializer
    http_method_names = ['get']
class ExcursionList(generics.ListCreateAPIView):
    serializer_class = ExcursionSerializer
    def get_queryset(self):
        queryset = Excursion.objects.all()
        title = self.request.query_params.get('title', None)
        if title is not None:
            queryset = queryset.filter(title__contains=title)
        return queryset
    http_method_names = ['get']
class ExcursionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Excursion.objects.all()
    serializer_class = ExcursionSerializer
    http_method_names = ['get']
class BundleDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Bundle.objects.all()
    serializer_class = BundleSerializer
    http_method_names = ['get']
class BundleList(generics.ListCreateAPIView):
    serializer_class = BundleSerializer
    def get_queryset(self):
        queryset = Bundle.objects.all()
        title = self.request.query_params.get('title', None)
        if title is not None:
            queryset = queryset.filter(title__contains=title)
        return queryset
    http_method_names = ['get']

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
