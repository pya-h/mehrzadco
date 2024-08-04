from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from .views import get_gallery, handler_404


urlpatterns = [
                  path('admin/', admin.site.urls),
                  path('api/gallery/', get_gallery, name='get_gallery'),
                  path('api/portfolio/', include('portfolio.urls')),
                  path('api/blogs/', include('blogs.urls')),
              ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) \
              + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

handler404 = 'mehrzadco.views.handler_404'
