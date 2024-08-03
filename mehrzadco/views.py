from django.views.decorators.http import require_http_methods
from portfolio.models import PortfolioGallery
from django.http import JsonResponse
from django.core.handlers.wsgi import WSGIRequest


@require_http_methods(["GET"])
def get_gallery(request: WSGIRequest):
    gallery = PortfolioGallery.objects.filter(deleted_at=None)
    images = list(map(lambda img: img.brief_data(request), gallery))
    return JsonResponse(images, safe=False)
