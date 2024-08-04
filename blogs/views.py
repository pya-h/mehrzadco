from django.http import JsonResponse
from django.core.handlers.wsgi import WSGIRequest
from .models import Blog, BlogParagraph
from django.views.decorators.http import require_http_methods
from typing import Dict, List


@require_http_methods(["GET"])
def list_blogs(request: WSGIRequest):
    blogs = Blog.objects.filter(deleted_at=None)
    blogs_list: List[Dict[str, str | int | float]] = [None] * blogs.count()

    for i, blog in enumerate(blogs):
        data = blog.brief(request)
        try:
            first_paragraph = BlogParagraph.objects.filter(blog_id=blog.id, deleted_at=None).first()
            data['firstParagraph'] = first_paragraph.brief(request)
        except BlogParagraph.DoesNotExist:
            data['firstParagraph'] = None
        blogs_list[i] = data
    return JsonResponse(blogs_list, safe=False)


@require_http_methods(["GET"])
def get_blog(request: WSGIRequest, id: int):
    blog_data: Dict[str, str | int | float | List[Dict[str, str | int | float | bool]]] = {}
    try:
        blog = Blog.objects.get(id=id, deleted_at=None)
        blog_data = blog.brief(request)
        paragraphs = BlogParagraph.objects.filter(blog_id=blog.id, deleted_at=None)
        blog_data['paragraphs'] = list(map(lambda paragraph: paragraph.dict(request), paragraphs))
    except BlogParagraph.DoesNotExist:
        pass
    except Blog.DoesNotExist:
        return JsonResponse({'error': "Blog Not Found", 'status': 404})
    return JsonResponse(blog_data)
