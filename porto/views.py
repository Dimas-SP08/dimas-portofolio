from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

def home(request):
    # Fungsi ini bakal nyari file index.html di dalam folder porto/templates/
    return render(request, 'index.html')