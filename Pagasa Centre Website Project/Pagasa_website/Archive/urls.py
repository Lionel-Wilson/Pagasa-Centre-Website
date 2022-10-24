from django.urls import path
from . import views

urlpatterns = [
    #Evangelistic Night URls
    path('', views.Evang_night, name='EN'),
]
