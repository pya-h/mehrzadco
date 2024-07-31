from django.contrib import admin
from .models import PortfolioGallery, ConstructionProject
from datetime import datetime


class PortfolioGalleryInlinePanel(admin.TabularInline):
    model = PortfolioGallery
    extra = 1


class ConstructionProjectAdminPanel(admin.ModelAdmin):
    list_display = ('name', 'location', 'finish_date', 'owner_username')
    list_display_links = ('name', )
    list_filter = ('owner__username', 'for_sale', 'area', 'location')
    search_fields = ('name', 'owner_username', 'location')
    inlines = (PortfolioGalleryInlinePanel, )
    readonly_fields = ('created_at', 'modified_at', 'created_by')

    def save_model(self, request, obj, form, change):
        if not change:
            obj.created_by = request.user
            obj.finish_date = datetime.now().date()
            obj.owner = request.user

        obj.save()


class PortfolioGalleryAdminPanel(admin.ModelAdmin):
    list_display = ('project_name', 'owner_username')
    list_display_links = ('project_name', )
    list_filter = ('project__owner__username', )
    search_fields = ('project_name', 'owner_username')
    readonly_fields = ('created_at', 'modified_at', 'uploaded_by',)

    def save_model(self, request, obj, form, change):
        if not change:
            obj.uploaded_by = request.user
        obj.save()


admin.site.register(ConstructionProject, ConstructionProjectAdminPanel)
admin.site.register(PortfolioGallery, PortfolioGalleryAdminPanel)
