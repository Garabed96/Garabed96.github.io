from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path('api/lead/', views.LeadListCreate.as_view()),
    path('', views.index, name='index'),
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('blog/', views.blog, name='blog'),
    path('thievery/', views.blog, name='blog'),
]


