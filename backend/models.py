from django.core.files.storage import FileSystemStorage
from django.conf import settings
from django.db import models
from django.utils import timezone


class Post(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    text = models.TextField()

from django.db import models

class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)

# # Posting images to the backend
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