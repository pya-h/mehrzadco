# Generated by Django 5.0.7 on 2024-07-31 10:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogparagraph',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='blogs'),
        ),
    ]
