from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
from .models import Lead
from .serializers import LeadSerializer
from rest_framework import generics

class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

def index(request):
    return render(request, 'index.html')

def blog(request):
    return render(request, 'blog.html')