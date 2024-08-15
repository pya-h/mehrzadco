from mehrzadco.model import BaseModel, models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator
from django.core.handlers.wsgi import WSGIRequest
from typing import Dict


class ProjectBase(BaseModel):
    owner = models.ForeignKey(User, on_delete=models.DO_NOTHING, blank=True, null=True)
    name = models.CharField(max_length=256, verbose_name='Name (*)')
    name_en = models.CharField(max_length=256, blank=True, null=True, default=None)
    description = models.TextField(blank=True, null=True)
    start_date = models.DateField(verbose_name='Start Date (*)')
    finish_date = models.DateField(verbose_name='Finish Date (*)')
    progress = models.FloatField(verbose_name='Progress (%)', default=100.0, validators=[
        MinValueValidator(0),
        MaxValueValidator(100)
    ])

    def __str__(self):
        return f'Project: {self.name}'

    @property
    def owner_username(self):
        return self.owner.username


class ConstructionProject(ProjectBase):
    location = models.CharField(max_length=256, verbose_name='Location Address (*)')
    area = models.FloatField(verbose_name='Area (Metraj) (*)', validators=[MinValueValidator(20)])
    for_sale = models.BooleanField(default=True, verbose_name='Ready For Sale')
    created_by = models.ForeignKey(User, on_delete=models.DO_NOTHING)

    class Meta:
        verbose_name = 'Construction Project'
        verbose_name_plural = 'Construction Projects'

    #  TODO: Maybe add videos if there's any?
    @property
    def brief(self) -> Dict[str, str | int | float]:
        return {
            "id": self.id,
            "name": self.name,
            "nameEn": self.name_en,
            "description": self.description,
            "startedAt": self.start_date,
            "finishedAt": self.finish_date,
            "progress": self.progress,
            "location": self.location,
            "area": self.area,
            "forSale": self.for_sale,
        }


class PortfolioGallery(BaseModel):
    image = models.ImageField(upload_to='portfolio', verbose_name='Image (*)')
    project = models.ForeignKey(ProjectBase, on_delete=models.CASCADE, verbose_name='Project (*)')
    use_in_slideshow = models.BooleanField(default=False)

    uploaded_by = models.ForeignKey(User, on_delete=models.DO_NOTHING, blank=True, null=True)

    def brief(self, request: WSGIRequest):
        return {'url': request.build_absolute_uri(self.image.url), 'project': self.project_name}

    class Meta:
        verbose_name = 'Gallery'
        verbose_name_plural = 'Gallery'

    def __str__(self):
        return f'{self.project_name} Gallery Image#{self.id}'

    @property
    def project_name(self):
        return self.project.name

    @property
    def owner_username(self):
        return self.project.owner.username


class VideoGallery(BaseModel):
    project = models.ForeignKey(ProjectBase, on_delete=models.DO_NOTHING, null=True, blank=True)
    original_video = models.FileField(upload_to='videos/original/', verbose_name='Original Video (*)')
    low_quality_video = models.FileField(upload_to='videos/low_quality/', blank=True, null=True,
                                         verbose_name='Low Quality Video')
    medium_quality_video = models.FileField(upload_to='videos/medium_quality/', blank=True, null=True,
                                            verbose_name='Medium Quality Video')

    title = models.CharField(max_length=255, verbose_name='Title (*)', default='Untitled')
    description = models.TextField(blank=True, null=True)

    uploaded_by = models.ForeignKey(User, on_delete=models.DO_NOTHING, blank=True, null=True)

    def __str__(self):
        return self.title if not self.project else f"{self.title} @ {self.project}"

    def brief(self, request: WSGIRequest):
        return {'id': self.id, 'project': self.project_name, 'title': self.title, 'description': self.description, 'urls': {
            'original': request.build_absolute_uri(self.original_video.url),
            'low': request.build_absolute_uri(self.low_quality_video.url) if self.low_quality_video else None,
            'medium': request.build_absolute_uri(self.medium_quality_video.url) if self.medium_quality_video else None,
        }}

    class Meta:
        verbose_name = 'Video'
        verbose_name_plural = 'Videos'

    @property
    def project_name(self):
        return self.project.name if self.project else None

    @property
    def uploader_username(self):
        return self.uploaded_by.username
