from django.contrib import admin
from .models import Blog, BlogParagraph
from datetime import datetime


class BlogParagraphInlinePanel(admin.TabularInline):
    model = BlogParagraph
    fields = ('header', 'body', 'image', 'fontsize', 'font', )
    extra = 1


class BlogAdminPanel(admin.ModelAdmin):
    list_display = ('title', 'author_username', 'custom_author_name')
    list_display_links = ('title', )
    list_filter = ('author', 'custom_author_name',)
    search_fields = ('author_username', 'author_fullname', 'custom_author_name',)
    inlines = (BlogParagraphInlinePanel, )
    readonly_fields = ('created_at', 'modified_at', 'deleted_at')

    def save_model(self, request, obj, form, change):
        if not change:
            obj.author = request.user
        obj.save()


class ParagraphAdminPanel(admin.ModelAdmin):
    list_display = ('blog_title', 'header', 'author_username', 'custom_author_name')
    list_display_links = ('blog_title', 'header',)
    list_filter = ('blog__title', 'blog__author', 'blog__custom_author_name',)
    search_fields = ('header', 'blog_title', 'body')
    readonly_fields = ('created_at', 'modified_at', 'created_by', 'deleted_at')

    def save_model(self, request, obj, form, change):
        obj.created_by = request.user
        obj.save()


admin.site.register(Blog, BlogAdminPanel)
admin.site.register(BlogParagraph, ParagraphAdminPanel)
