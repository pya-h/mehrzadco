from django.urls import path
from . import views


urlpatterns = [
    path('constructions/', views.list_construction_projects, name='list_constructions'),
    path('constructions/<int:id>/', views.get_construction_project, name='get_construction'),
]
