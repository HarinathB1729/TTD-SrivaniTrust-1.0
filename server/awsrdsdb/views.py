from django.shortcuts import render, HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.

def homepage(request):
    return HttpResponse('Hello Ganeshaa!')


@api_view(['POST'])
def authentication(request):
    username = request.data['username']
    password = request.data['password']

    return Response({'received_response': username+password})