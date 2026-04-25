from django.urls import path
from . import views

urlpatterns = [
    # Path kosong '' artinya ini halaman depan (Home)
    path('', views.home, name='home'),
]