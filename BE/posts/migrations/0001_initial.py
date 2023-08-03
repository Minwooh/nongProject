# Generated by Django 4.2.3 on 2023-08-03 19:35

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
                ('area', models.CharField(choices=[('서울특별시', '서울특별시'), ('인천광역시', '인천광역시'), ('대전광역시', '대전광역시'), ('대구광역시', '대구광역시'), ('울산광역시', '울산광역시'), ('부산광역시', '부산광역시'), ('광주광역시', '광주광역시'), ('세종특별자치시', '세종특별자치시'), ('경기도', '경기도'), ('강원특별자치도', '강원특별차지도'), ('충청북도', '충청북도'), ('충청남도', '충청남도'), ('전라북도', '전라북도'), ('전라남도', '전라남도'), ('경상북도', '경상북도'), ('경상남도', '경상남도'), ('제주특별자치도', '제주특별자치도')], max_length=10, verbose_name='지역')),
                ('city', models.CharField(choices=[('선택없음', '선택없음'), ('강남구', '강남구'), ('강동구', '강동구'), ('구미시', '구미시'), ('구로구', '구로구'), ('구리시', '구리시'), ('강릉시', '강릉시'), ('구례군', '구례군'), ('고령군', '고령군'), ('계룡시', '계룡시'), ('광명시', '광명시'), ('강북구', '강북구'), ('강서구', '강서구'), ('광산구', '광산구'), ('고성군', '고성군'), ('괴산군', '괴산군'), ('금산군', '금산군'), ('군산시', '군산시'), ('곡성군', '곡성군'), ('경산시', '경산시'), ('관악구', '관악구'), ('군위군', '군위군'), ('계양구', '계양구'), ('고양시', '고양시'), ('광양시', '광양시'), ('광진구', '광진구'), ('금정구', '금정구'), ('기장군', '기장군'), ('김제시', '김제시'), ('거제시', '거제시'), ('경주시', '경주시'), ('광주시', '광주시'), ('공주시', '공주시'), ('강진군', '강진군'), ('금천구', '금천구'), ('과천시', '과천시'), ('고창군', '고창군'), ('거창군', '거창군'), ('김천시', '김천시'), ('군포시', '군포시'), ('김포시', '김포시'), ('가평군', '가평군'), ('강화군', '강화군'), ('김해시', '김해시'), ('고흥군', '고흥군'), ('남구', '남구'), ('남동구', '남동구'), ('논산시', '논산시'), ('노원구', '노원구'), ('남양주시', '남양주시'), ('남원시', '남원시'), ('나주시', '나주시'), ('남해군', '남해군'), ('동구', '동구'), ('동대문구', '동대문구'), ('대덕구', '대덕구'), ('동두천시', '동두천시'), ('동래구', '동래구'), ('도봉구', '도봉구'), ('달서구', '달서구'), ('달성군', '달성군'), ('단양군', '단양군'), ('담양군', '담양군'), ('동작구', '동작구'), ('당진시', '당진시'), ('동해시', '동해시'), ('문경시', '문경시'), ('무안군', '무안군'), ('밀양시', '밀양시'), ('무주군', '무주군'), ('미추홀구', '미추홀구'), ('마포구', '마포구'), ('목포시', '목포시'), ('북구', '북구'), ('보령시', '보령시'), ('부산진구', '부산진구'), ('보성군', '보성군'), ('보은군', '보은군'), ('부여군', '부여군'), ('부안군', '부안군'), ('부천시', '부천시'), ('부평구', '부평구'), ('봉화군', '봉화군'), ('서구', '서구'), ('서귀포시', '서귀포시'), ('성남시', '성남시'), ('성동구', '성동구'), ('서대문구', '서대문구'), ('성북구', '성북구'), ('사상구', '사상구'), ('수성구', '수성구'), ('서산시', '서산시'), ('수영구', '수영구'), ('수원시', '수원시'), ('신안군', '신안군'), ('상주시', '상주시'), ('성주군', '성주군'), ('서초구', '서초구'), ('속초시', '속초시'), ('삼척시', '삼척시'), ('서천군', '서천군'), ('산청군', '산청군'), ('순창군', '순창군'), ('순천시', '순천시'), ('사천시', '사천시'), ('송파구', '송파구'), ('사하구', '사하구'), ('시흥시', '시흥시'), ('양구군', '양구군'), ('영광군', '영광군'), ('영등포구', '영등포구'), ('영도구', '영도구'), ('안동시', '안동시'), ('영덕군', '영덕군'), ('완도군', '완도군'), ('영동군', '영동군'), ('울릉군', '울릉군'), ('의령군', '의령군'), ('용산구', '용산구'), ('연수구', '연수구'), ('유성구', '유성구'), ('안산시', '안산시'), ('오산시', '오산시'), ('안성시', '안성시'), ('예산군', '예산군'), ('음성군', '음성군'), ('아산시', '아산시'), ('익산시', '익산시'), ('의성군', '의성군'), ('임실군', '임실군'), ('여수시', '여수시'), ('양산시', '양산시'), ('안양시', '안양시'), ('의왕시', '의왕시'), ('영월군', '영월군'), ('용인시', '용인시'), ('영양군', '영양군'), ('양양군', '양양군'), ('영암군', '영암군'), ('연제구', '연제구'), ('옹진군', '옹진군'), ('울주군', '울주군'), ('울진군', '울진군'), ('양주시', '양주시'), ('영주시', '영주시'), ('여주시', '여주시'), ('원주시', '원주시'), ('완주군', '완주군'), ('의정부시', '의정부시'), ('인제군', '인제군'), ('양천구', '양천구'), ('이천시', '이천시'), ('연천군', '연천군'), ('영천시', '영천시'), ('옥천군', '옥천군'), ('예천군', '예천군'), ('은평구', '은평구'), ('양평군', '양평군'), ('중구', '중구'), ('진도군', '진도군'), ('종로구', '종로구'), ('중랑구', '중랑구'), ('정선군', '정선군'), ('장수군', '장수군'), ('장성군', '장성군'), ('정읍시', '정읍시'), ('진안군', '진안군'), ('전주시', '전주시'), ('진주시', '진주시'), ('제주시', '제주시'), ('제천시', '제천시'), ('진천군', '진천군'), ('증평군', '증편군'), ('장흥군', '장흥군'), ('칠곡군', '칠곡군'), ('창녕군', '창녕군'), ('청도군', '청도군'), ('청송군', '청송군'), ('철원군', '철원군'), ('천안시', '천안시'), ('청양군', '청양군'), ('창원시', '창원시'), ('청주시', '청주시'), ('충주시', '충주시'), ('춘천시', '춘천시'), ('태백시', '태백시'), ('태안군', '태안군'), ('통영시', '통영시'), ('포항시', '포항시'), ('파주시', '파주시'), ('포천시', '포천시'), ('평창군', '평창군'), ('평택시', '평택시'), ('하남시', '하남시'), ('해남군', '해남군'), ('하동군', '하동군'), ('화성시', '화성시'), ('홍성군', '홍성군'), ('횡성군', '횡성군'), ('화순군', '화순군'), ('해운대구', '해운대구'), ('함안군', '함안군'), ('함양군', '함양군'), ('홍천군', '홍천군'), ('화천군', '화천군'), ('합천군', '합천군'), ('함평군', '함평군')], max_length=10, null=True)),
                ('prices', models.CharField(max_length=20)),
                ('links', models.URLField(max_length=1024)),
                ('writer', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['area', 'city'],
            },
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.CharField(max_length=128)),
                ('is_secret', models.BooleanField(default=False, verbose_name='비밀 댓글')),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='posts.post')),
            ],
        ),
        migrations.CreateModel(
            name='BookMark',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='posts.post', verbose_name='게시글')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='작성자')),
            ],
        ),
    ]
