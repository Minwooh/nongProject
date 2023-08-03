# Generated by Django 4.2.3 on 2023-07-25 08:11

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128)),
                ('content', models.TextField(verbose_name='내용')),
                ('photo', models.ImageField(blank=True, null=True, upload_to='', verbose_name='이미지')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='작성일')),
                ('area', models.CharField(choices=[('서울특별시', '서울특별시'), ('인천광역시', '인천광역시'), ('대전광역시', '대전광역시'), ('대구광역시', '대구광역시'), ('울산광역시', '울산광역시'), ('부산광역시', '부산광역시'), ('광주광역시', '광주광역시'), ('세종특별자치시', '세종특별자치시'), ('경기도', '경기도'), ('강원특별자치도', '강원특별차지도'), ('충청북도', '충청북도'), ('충청남도', '충청남도'), ('전라북도', '전라북도'), ('전라남도', '전라남도'), ('경상북도', '경상북도'), ('경상남도', '경상남도'), ('제주특별자치도', '제주특별자치도')], max_length=10, verbose_name='지역')),
                ('prices', models.CharField(max_length=20)),
                ('links', models.URLField(max_length=1024)),
                ('writer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
