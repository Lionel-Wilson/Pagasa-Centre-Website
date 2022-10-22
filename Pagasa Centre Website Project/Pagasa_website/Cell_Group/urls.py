from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('Home', views.index, name='home'),
    path('Information', views.info, name='info'),
    path('add/', views.add, name='add'),
    path('add/addrecord/', views.addrecord, name='addrecord')
]