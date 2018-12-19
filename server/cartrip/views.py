from .models import Car
from .serializers import CarSerializer
from rest_framework import generics

from django.contrib.staticfiles import views

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
