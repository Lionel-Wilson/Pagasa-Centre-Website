from django.urls import path, include
from . import views

urlpatterns = [
    #Homepage
    path('', views.index),
    #Information Page
    path('Information/', views.info),
]