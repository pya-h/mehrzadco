from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from .views import get_gallery, handler_404

urlpatterns = [
      path('admin/', include('admin_honeypot.urls', 'admin_honeypot')),
      path('panel/', admin.site.urls),
      path('gallery/', get_gallery, name='get_gallery'),
      path('portfolio/', include('portfolio.urls')),
      path('blogs/', include('blogs.urls')),
      path('contact-us', include('contactus.urls'))
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) \
+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

handler404 = 'mehrzadco.views.handler_404'
