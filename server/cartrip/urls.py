from django.urls import re_path

from . import views

app_name = 'djbr'

urlpatterns = [
    re_path('^cars/?$', views.CarList.as_view()),
    re_path(r'^cars/(?P<pk>\d+)/?$', views.CarDetail.as_view()),

]
