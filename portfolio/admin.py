from django.contrib import admin
from .models import PortfolioGallery, ConstructionProject


class PortfolioGalleryInlinePanel(admin.TabularInline):
    model = PortfolioGallery
    extra = 1


class ConstructionProjectAdminPanel(admin.ModelAdmin):
    list_display = ('name', 'location', 'finish_date', 'owner_username')
    list_display_links = ('name', )
    list_filter = ('owner__username', 'for_sale', 'area', 'location')
    search_fields = ('name', 'owner_username', 'location')
    inlines = (PortfolioGalleryInlinePanel, )


class PortfolioGalleryAdminPanel(admin.ModelAdmin):
    list_display = ('project_name', 'owner_username')
    list_display_links = ('project_name', )
    list_filter = ('project__owner__username', )
    search_fields = ('project_name', 'owner_username')


admin.site.register(ConstructionProject, ConstructionProjectAdminPanel)
admin.site.register(PortfolioGallery, PortfolioGalleryAdminPanel)
