from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Members
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse

# Create your views here.
def index(request):
    #EXAMPLE of displaying Model/DB data to view.
    mymembers = Members.objects.all().values()
    template = loader.get_template('Members.html')
    context = {
        'mymembers': mymembers,
    }    
    return HttpResponse(template.render(context, request))

def info(request):
    template = loader.get_template('Information.html')
    return HttpResponse(template.render())

def add(request):
    template = loader.get_template('add.html')
    return HttpResponse(template.render({}, request))

def addrecord(request):
  x = request.POST['first']
  y = request.POST['last']
  member = Members(firstname=x, lastname=y)
  member.save()
  return HttpResponseRedirect(reverse('index'))