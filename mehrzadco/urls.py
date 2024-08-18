from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf import settings
from .views import get_gallery, handler_404, index, log_exception
from django.views.static import serve

urlpatterns = [
      path('api/admin/', include('admin_honeypot.urls', 'admin_honeypot')),
      path('api/panel/', admin.site.urls),
      path('api/gallery/', get_gallery, name='get_gallery'),
      path('api/portfolio/', include('portfolio.urls')),
      path('api/blogs/', include('blogs.urls')),
      path('api/contact-us/', include('contactus.urls')),
      path('api/log/', log_exception, name='log_exception'),
      re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
      re_path(r'^static/(?P<path>.*)$', serve, {'document_root': settings.STATIC_ROOT}),
      re_path(r'^(?!api/|media/|static/).*$', index, name='home_page'),
]

handler404 = 'mehrzadco.views.handler_404'
