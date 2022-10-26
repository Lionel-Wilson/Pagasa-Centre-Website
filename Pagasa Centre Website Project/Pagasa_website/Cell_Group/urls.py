from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='cellgroupindex'),
    path('add/', views.add, name='add'),
    path('add/addrecord/', views.addrecord, name='addrecord'),
    path('delete/<int:id>', views.delete, name='delete'),
    path('update/<int:id>', views.update, name='update'),#sends page to edit/update the record of member 
    path('update/updaterecord/<int:id>', views.updaterecord, name='updaterecord'),#updates the database and redirects back to member list
]