from django.contrib import admin
from .models import ContactUsMessages


class ContactUsMessageAdminPanel(admin.ModelAdmin):
    list_display = ('sender_email', 'sender_name', 'subject',)
    list_display_links = ('sender_email', 'sender_name')
    list_filter = ('sender_email', 'sender_name', 'subject',)
    search_fields = ('sender_email', 'sender_name', 'subject', 'text')
    readonly_fields = ('created_at', 'modified_at', 'deleted_at')


admin.site.register(ContactUsMessages, ContactUsMessageAdminPanel)