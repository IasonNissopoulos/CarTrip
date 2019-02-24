from django.contrib import admin

# Register your models here.
from .models import Location, Car, Exhibition, Excursion, Bundle, Post, Comment

#admin.site.register(Engine)
admin.site.register(Location)
admin.site.register(Car)
admin.site.register(Exhibition)
admin.site.register(Excursion)
admin.site.register(Bundle)
#admin.site.register(User)
admin.site.register(Post)
admin.site.register(Comment)
