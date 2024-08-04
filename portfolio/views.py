from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.core.handlers.wsgi import WSGIRequest
from .models import ConstructionProject, PortfolioGallery
from typing import List, Dict


@require_http_methods(["GET"])
def list_construction_projects(request: WSGIRequest):
    construction_projects = ConstructionProject.objects.filter(deleted_at=None)
    project_list: List[Dict[str, str | int | float]] = [None] * construction_projects.count()

    for i, project in enumerate(construction_projects):
        data = project.brief
        try:
            print(project)
            first_image = PortfolioGallery.objects.filter(project_id=project.id, deleted_at=None).first()
            data['image'] = first_image.brief(request)['url']
        except PortfolioGallery.DoesNotExist:
            data['image'] = None
        project_list[i] = data

    return JsonResponse(project_list, safe=False)


@require_http_methods(["GET"])
def get_construction_project(request: WSGIRequest, id: int):
    project_data: Dict[str, int | float | str | List[str]] = {}
    try:
        project = ConstructionProject.objects.get(id=id, deleted_at=None)
        project_data = project.brief
        images = PortfolioGallery.objects.filter(project_id=project.id, deleted_at=None)
        project_data['gallery'] = list(map(lambda img: img.brief(request)['url'], images))
    except PortfolioGallery.DoesNotExist:
        pass
    except ConstructionProject.DoesNotExist:
        return JsonResponse({'error': "Project Not Found", 'status': 404})

    return JsonResponse(project_data)
