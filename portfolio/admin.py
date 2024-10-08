from django.contrib import admin
from .models import PortfolioGallery, ConstructionProject, VideoGallery
from datetime import datetime


class PortfolioGalleryInlinePanel(admin.TabularInline):
    model = PortfolioGallery
    extra = 1
    fields = ('image', )


class ConstructionProjectAdminPanel(admin.ModelAdmin):
    list_display = ('name', 'location', 'finish_date', 'owner_username')
    list_display_links = ('name', )
    list_filter = ('owner__username', 'for_sale', 'area', 'location')
    search_fields = ('name', 'owner_username', 'location')
    inlines = (PortfolioGalleryInlinePanel, )
    readonly_fields = ('created_at', 'modified_at', 'created_by', 'deleted_at')

    def save_model(self, request, obj, form, change):
        if not change:
            obj.created_by = request.user
            if not obj.finish_date:
                obj.finish_date = datetime.now().date()
            if not obj.owner:
                obj.owner = request.user

        obj.save()


class PortfolioGalleryAdminPanel(admin.ModelAdmin):
    list_display = ('project_name', 'owner_username')
    list_display_links = ('project_name', )
    list_filter = ('project__owner__username', )
    search_fields = ('project_name', 'owner_username')
    readonly_fields = ('created_at', 'modified_at', 'uploaded_by', 'deleted_at')

    def save_model(self, request, obj, form, change):
        if not change or not obj.uploaded_by:
            obj.uploaded_by = request.user
        obj.save()


class VideoGalleryAdminPanel(admin.ModelAdmin):
    list_display = ('title', 'project_name')
    list_display_links = ('title', 'project_name', )
    list_filter = ('project__name', 'uploaded_by__username')
    search_fields = ('project_name', 'owner_username')
    readonly_fields = ('created_at', 'modified_at', 'uploaded_by', 'deleted_at')
    change_form_template = 'admin/video/change_form.html'

    def save_model(self, request, obj, form, change):
        if not change or not obj.uploaded_by:
            obj.uploaded_by = request.user
        obj.save()


admin.site.register(ConstructionProject, ConstructionProjectAdminPanel)
admin.site.register(PortfolioGallery, PortfolioGalleryAdminPanel)
admin.site.register(VideoGallery, VideoGalleryAdminPanel)
