# Generated by Django 5.0.7 on 2024-07-31 10:20

import django.core.validators
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('modified_at', models.DateTimeField(auto_now_add=True)),
                ('deleted_at', models.DateTimeField(blank=True, default=None, null=True)),
                ('title', models.CharField(max_length=256)),
                ('image', models.ImageField(blank=True, null=True, upload_to='blogs')),
                ('custom_author_name', models.CharField(blank=True, max_length=128, null=True, verbose_name='Custom Author Name')),
                ('author', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='BlogParagraph',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('modified_at', models.DateTimeField(auto_now_add=True)),
                ('deleted_at', models.DateTimeField(blank=True, default=None, null=True)),
                ('header', models.CharField(blank=True, max_length=256, null=True)),
                ('body', models.TextField(blank=True)),
                ('image', models.ImageField(upload_to='blogs')),
                ('color', models.CharField(blank=True, choices=[('red', 'Red'), ('blue', 'Blue'), ('green', 'Green'), ('yellow', 'Yellow'), ('orange', 'Orange'), ('brown', 'Brown'), ('purple', 'Purple'), ('cyan', 'Cyan'), ('coral', 'Coral'), ('lightcoral', 'Lightcoral'), ('black', 'Black'), ('white', 'White')], default=None, max_length=16, null=True)),
                ('is_bold', models.BooleanField(default=False, verbose_name='Is Bold')),
                ('is_underlined', models.BooleanField(default=False, verbose_name='Is Underlined')),
                ('font', models.CharField(blank=True, choices=[('Arial', 'Arial'), ('Vazir', 'Vazir'), ('VazirBold', 'VazirBold'), ('BYekan', 'BYekan'), ('Roboto', 'Roboto'), ('B Lotus', 'B Lotus'), ('B Nazanin', 'B Nazanin')], default=None, max_length=16, null=True)),
                ('fontsize', models.IntegerField(blank=True, default=None, null=True, validators=[django.core.validators.MinValueValidator(8), django.core.validators.MaxValueValidator(60)], verbose_name='Font Size')),
                ('extra_styles', models.TextField(blank=True, null=True, verbose_name='Extra CSS Style')),
                ('blog', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='blogs.blog')),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Paragraph',
                'verbose_name_plural': 'Paragraphs',
            },
        ),
    ]