from django.core.files.storage import FileSystemStorage
from django.conf import settings
from django.db import models
from django.utils import timezone


class Post(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    text = models.TextField()


# # Posting images to the website
#
# image_storage = FileSystemStorage(
#     # Physical file location ROOT
#     location=u'{0}/my_sell/'.format(settings.MEDIA_ROOT),
#     # Url for file
#     base_url=u'{0}my_sell/'.format(settings.MEDIA_URL),
# )
#
#
# def image_directory_path(instance, filename):
#     # file will be uploaded to MEDIA_ROOT/my_sell/picture/<filename>
#     return u'picture/{0}'.format(filename)
#
#
# class Goods(models.Model):
#     pic = models.ImageField(upload_to=image_directory_path, storage=image_storage)