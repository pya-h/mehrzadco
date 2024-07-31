from mehrzadco.model import BaseModel, models
from django.contrib.auth.models import User
import blogs.pen as pen
from django.core.validators import MinValueValidator, MaxValueValidator


class Blog(BaseModel):
    title = models.CharField(max_length=256, blank=False)
    image = models.ImageField(upload_to='blogs', blank=True, null=True)
    author = models.ForeignKey(User, blank=True, null=True, on_delete=models.DO_NOTHING)
    # categories = ManyToOne(Category, ...)
    custom_author_name = models.CharField(max_length=128, blank=True, null=True, verbose_name='Custom Author Name')

    # used if the actual author is not
    # a website user

    @property
    def author_username(self):
        return self.author.username

    @property
    def author_fullname(self):
        fullname = f"{self.author.first_name} {self.author.last_name or ''}"
        return fullname.strip()


class BlogParagraph(BaseModel):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    header = models.CharField(max_length=256, blank=True, null=True)
    body = models.TextField(blank=True)
    image = models.ImageField(upload_to='blogs', blank=True, null=True)
    color = models.CharField(max_length=16, choices=pen.get_color_choices(), blank=True, null=True, default=None)
    is_bold = models.BooleanField(default=False, verbose_name='Is Bold')
    is_underlined = models.BooleanField(default=False, verbose_name='Is Underlined')
    font = models.CharField(max_length=16, choices=pen.get_fonts(), blank=True, null=True, default=None)
    fontsize = models.IntegerField(default=None, null=True, blank=True, verbose_name='Font Size', validators=[
        MinValueValidator(8),
        MaxValueValidator(60)
    ])
    extra_styles = models.TextField(blank=True, null=True, verbose_name='Extra CSS Style')

    created_by = models.ForeignKey(User, on_delete=models.DO_NOTHING, blank=True, null=True)

    class Meta:
        verbose_name = 'Paragraph'
        verbose_name_plural = 'Paragraphs'

    @property
    def blog_title(self):
        return self.blog.title

    @property
    def author_username(self):
        return self.blog.author.username

    @property
    def author_fullname(self):
        fullname = f"{self.blog.author.first_name} {self.blog.author.last_name or ''}"
        return fullname.strip()

    @property
    def custom_author_name(self):
        return self.blog.custom_author_name
