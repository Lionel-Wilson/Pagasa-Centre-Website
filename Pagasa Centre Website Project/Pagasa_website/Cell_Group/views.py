from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Members
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse

# Create your views here.
def index(request):
    #EXAMPLE of displaying Model/DB data to view.
    mymembers = Members.objects.all().values()#get all values of objects in the Members table
    template = loader.get_template('Members.html')
    context = {
        'mymembers': mymembers,
    }    
    return HttpResponse(template.render(context, request))

def add(request):
    template = loader.get_template('add.html')
    return HttpResponse(template.render({}, request))

def addrecord(request):
  x = request.POST['first']
  y = request.POST['last']
  member = Members(firstname=x, lastname=y)
  member.save()
  return HttpResponseRedirect(reverse('cellgroupindex'))

def delete(request, id):
    #the 'id' is passed as a argument. We then find the specific member and store as a variable
    member = Members.objects.get(id=id)
    #Simply delete the member
    member.delete()
    #return back to the cell group page.
    return HttpResponseRedirect(reverse('index'))

def update(request, id):
    mymember = Members.objects.get(id=id)
    template = loader.get_template('update.html')
    context = {
        'mymember': mymember
    }
    return HttpResponse(template.render(context, request))

def updaterecord(request, id):
  first = request.POST['first']
  last = request.POST['last']
  member = Members.objects.get(id=id)
  member.firstname = first
  member.lastname = last
  member.save()
  return HttpResponseRedirect(reverse('index'))