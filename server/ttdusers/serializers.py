from typing import Any, Dict
from rest_framework import serializers
from .models import UserModel, BhajanaMandiraluModel


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ['username', 'email', 'password',
            'phoneno', 'role', 'permission']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)

        if password is not None:
            instance.set_password(password)

        instance.save()
        return instance


class BhajanaMandiraluSerialiser(serializers.ModelSerializer):
    class Meta:
        model = BhajanaMandiraluModel
        fields = [
            "district",
            "villagename",
            "longitude",
            "applicantname",
            "phoneno",
            "landtitlewith",
            "donorconsent",
            "othertemples",
            "amountbylocals",
            "contactpersonparticulars",
            "otherrelevantissues",
            "templehistory",
            "footfalloftemple",
            "proposalforconstruction",
            "assemblyname",
            "colonyname",
            "villagepopulation",
            "templename",
            "file",
            "surveyno",
            "finsupportttd",
            "nearbytempledetails",
            "localscontribution",
            "contactpersonphoneno",
            "addlcomments",
            "templeage",
            "deityname",
            "proposedworkdetails",
            "mandal",
            "latitude",
            "locationbelongsscstfisherman",
            "email",
            "landextent",
            "boundaries",
            "anyearliertemple",
            "villagedetails",
            "contactpersonemail",
            "recommendationsinsoff",
            "annualincometemple",
            "categorytemple",
            "startdate"
        ]