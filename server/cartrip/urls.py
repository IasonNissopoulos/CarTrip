from django.urls import re_path
from django.conf.urls.static import static
from django.conf import settings
from . import views

app_name = 'cartrip'

urlpatterns = [
    re_path('^cars/?$', views.CarList.as_view()),
    re_path(r'^cars/(?P<pk>\d+)/?$', views.CarDetail.as_view()),
    re_path('^excursions/?$', views.ExcursionList.as_view()),
    re_path(r'^excursions/(?P<pk>\d+)/?$', views.ExcursionDetail.as_view()),
    re_path('^locations/?$', views.LocationList.as_view()),
    re_path(r'^locations/(?P<pk>\d+)/?$', views.LocationDetail.as_view()),
    re_path('^exhibitions/?$', views.ExhibitionList.as_view()),
    re_path(r'^exhibitions/(?P<pk>\d+)/?$', views.ExhibitionDetail.as_view()),
    re_path('^bundles/?$', views.BundleList.as_view()),
    re_path(r'^bundles/(?P<pk>\d+)/?$', views.BundleDetail.as_view()),
    re_path('^posts/?$', views.PostList.as_view()),
    re_path(r'^posts/(?P<pk>\d+)/?$', views.PostDetail.as_view()),
    re_path('^comments/?$', views.CommentList.as_view()),
    re_path(r'^comments/(?P<pk>\d+)/?$', views.CommentDetail.as_view()),
    re_path('^users/?$', views.UserList.as_view()),
    re_path(r'^users/(?P<pk>\d+)/?$', views.UserDetail.as_view()),

] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
