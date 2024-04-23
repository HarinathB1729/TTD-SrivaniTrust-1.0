from django.db import models
from django.contrib.auth.models import AbstractUser
from datetime import date
import os
from django.core.exceptions import ValidationError

# Create your models here.


class UserModel(AbstractUser):
    password = models.CharField(max_length=255, default="null")
    username = models.CharField(max_length=255, default="null", unique=True)
    email = models.EmailField(max_length=255, default="null", unique=True)
    phoneno = models.BigIntegerField(default=0)
    role = models.CharField(max_length=10, default="user")
    permission = models.CharField(max_length=10, default="Access")

    def __str__(self):
        return self.username
    

def validate_file_extension(value):
    
    ext = os.path.splitext(value.name)[1]  # Get the file extension
    valid_extensions = ['.pdf', '.docx']
    if ext.lower() not in valid_extensions:
        raise ValidationError('Only PDF and DOCX files are allowed.')


class BhajanaMandiraluModel(models.Model):
    district= models.CharField(max_length=255, default="null")
    villagename= models.CharField(max_length=255, default="null")
    longitude= models.CharField(max_length=255, default="null")
    applicantname= models.CharField(max_length=255, default="null")
    phoneno= models.BigIntegerField(default=0)
    landtitlewith= models.CharField(max_length=255, default="null")
    donorconsent= models.CharField(max_length=255, default="null")   
    othertemples= models.CharField(max_length=255, default="null")
    amountbylocals= models.IntegerField(default=0) 
    contactpersonparticulars=models.CharField(max_length=255, default="null")
    otherrelevantissues= models.CharField(max_length=255, default="null")
    templehistory= models.CharField(max_length=255, default="null")
    footfalloftemple= models.IntegerField(default=0)
    proposalforconstruction= models.CharField(max_length=255, default="null")
    assemblyname= models.CharField(max_length=255, default="null")
    colonyname= models.CharField(max_length=255, default="null")
    villagepopulation= models.BigIntegerField(default=0)
    templename= models.CharField(max_length=255, default="null")
    documents= models.CharField(max_length=255, default="null")
    surveyno= models.CharField(max_length=255, default="null")
    finsupportttd= models.CharField(max_length=255, default="null")
    nearbytempledetails= models.CharField(max_length=255, default="null")
    localscontribution= models.CharField(max_length=255, default="null")
    contactpersonphoneno= models.BigIntegerField(default=0)
    addlcomments= models.CharField(max_length=255, default="null")
    templeage= models.CharField(max_length=255, default="null")
    deityname= models.CharField(max_length=255, default="null")
    proposedworkdetails= models.CharField(max_length=255, default="null")
    mandal= models.CharField(max_length=255, default="null")
    latitude= models.CharField(max_length=255, default="null")
    locationbelongsscstfisherman= models.CharField(max_length=255, default="null")
    email= models.EmailField(max_length=255, default="null")
    landextent= models.CharField(max_length=255, default="null")
    boundaries= models.CharField(max_length=255, default="null")
    anyearliertemple= models.CharField(max_length=255, default="null")
    villagedetails= models.CharField(max_length=255, default="null")
    contactpersonemail= models.EmailField(max_length=255, default="null")
    recommendationsinsoff= models.CharField(max_length=255, default="null")
    annualincometemple= models.BigIntegerField(default=0)
    categorytemple= models.CharField(max_length=255, default="null")   
    file = models.FileField(upload_to='uploads/', default=True, validators=[validate_file_extension])
    startdate = models.DateField(default=date.today)

   