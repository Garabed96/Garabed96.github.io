from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings

# Create your views here.
print("this is the base_dir: "+settings.BASE_DIR)

def index(request):
    return render(request, 'index.html')

def blog(request):
    return render(request, 'blog.html')