from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Members

# Create your views here.
def index(request):
    #EXAMPLE of displaying Model/DB data to view.
    mymembers = Members.objects.all().values()
    template = loader.get_template('Home.html')
    context = {
        'mymembers':mymembers,
    }    
    return HttpResponse(template.render(context, request))

def info(request):
    template = loader.get_template('Information.html')
    return HttpResponse(template.render())