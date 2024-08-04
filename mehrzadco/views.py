from django.views.decorators.http import require_http_methods
from portfolio.models import PortfolioGallery
from django.http import JsonResponse
from django.core.handlers.wsgi import WSGIRequest


@require_http_methods(["GET"])
def get_gallery(request: WSGIRequest):
    gallery = PortfolioGallery.objects.filter(deleted_at=None)
    images = list(map(lambda img: img.brief(request), gallery))
    return JsonResponse(images, safe=False)


def handler_404(request, exception):
    response_data = {
        'error': 'Not Found',
        'message': 'The requested resource was not found on this server.'
    }
    print(response_data)
    return JsonResponse(response_data, status=404)
