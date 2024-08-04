from django.urls import path
from .views import send_contact_message


urlpatterns = [
    path('', send_contact_message, name='post-contact-us')
]