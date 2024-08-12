from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf import settings
from .views import get_gallery, handler_404, index

urlpatterns = [
      path('admin/', include('admin_honeypot.urls', 'admin_honeypot')),
      path('panel/', admin.site.urls),
      path('api/gallery/', get_gallery, name='get_gallery'),
      path('api/portfolio/', include('portfolio.urls')),
      path('api/blogs/', include('blogs.urls')),
      path('api/contact-us/', include('contactus.urls')),
      re_path(r'^(?!api|panel|admin|media).*$', index, name='home')
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) \
+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

handler404 = 'mehrzadco.views.handler_404'
