from mehrzadco.model import BaseModel, models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator


class ProjectBase(BaseModel):
    owner = models.ForeignKey(User, on_delete=models.DO_NOTHING, blank=True, null=True)
    name = models.CharField(max_length=256)
    description = models.TextField(blank=True, null=True)
    start_date = models.DateField(verbose_name='Start Date')
    finish_date = models.DateField(verbose_name='Finish Date', auto_now_add=True)
    progress = models.FloatField(verbose_name='Progress (%)', default=100.0, validators=[
            MinValueValidator(0),
            MaxValueValidator(100)
    ])

    def __str__(self):
        return self.name

    @property
    def owner_username(self):
        return self.owner.username


class ConstructionProject(ProjectBase):
    location = models.CharField(max_length=256, verbose_name='Location Address')
    area = models.FloatField(verbose_name='Area (Metraj)', validators=[MinValueValidator(20)])
    for_sale = models.BooleanField(default=True, verbose_name='Ready For Sale')
    created_by = models.ForeignKey(User, on_delete=models.DO_NOTHING)

    class Meta:
        verbose_name = 'Construction Project'
        verbose_name_plural = 'Construction Projects'


class PortfolioGallery(BaseModel):
    image = models.ImageField(upload_to='portfolio')
    project = models.ForeignKey(ProjectBase, on_delete=models.CASCADE)

    uploaded_by = models.ForeignKey(User, on_delete=models.DO_NOTHING)

    class Meta:
        verbose_name = 'Gallery'
        verbose_name_plural = 'Gallery'

    @property
    def project_name(self):
        return self.project.name

    @property
    def owner_username(self):
        return self.project.owner.username
