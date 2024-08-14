from django.views.decorators.http import require_http_methods
from portfolio.models import PortfolioGallery
from django.http import JsonResponse
from django.core.handlers.wsgi import WSGIRequest
from django.shortcuts import render


@require_http_methods(["GET"])
def get_gallery(request: WSGIRequest):
    gallery = PortfolioGallery.objects.filter(deleted_at=None, use_in_slideshow=True)
    images = list(map(lambda img: img.brief(request), gallery))
    return JsonResponse({'data': images, 'status': 200})


def handler_404(request, exception):
    return JsonResponse({
        'status': 404,
        'error': 'Not Found',
        'msg': 'The requested resource was not found on this server.'
    })


@require_http_methods(["GET"])
def index(request: WSGIRequest):
    return render(request, 'build/index.html')

