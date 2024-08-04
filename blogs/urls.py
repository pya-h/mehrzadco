from django.urls import path
from . import views


urlpatterns = [
    path("", views.list_blogs, name='list-blogs'),
    path("<int:id>/", views.get_blog, name='get-blog')
]
