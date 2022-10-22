from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('Home', views.index, name='home'),
    path('Information', views.info, name='info'),
]