from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

# Create your views here.
def Evang_night(request):
    template = loader.get_template('Evangelistic Night.html')
    return HttpResponse(template.render())
