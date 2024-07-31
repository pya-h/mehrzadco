from django.db import models


class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now=True)
    modified_at = models.DateTimeField(auto_now_add=True)
    deleted_at = models.DateTimeField(default=None, blank=True, null=True)

    class Meta:
        abstract = True
