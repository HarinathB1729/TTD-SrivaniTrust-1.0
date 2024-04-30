from rest_framework import status, exceptions
from rest_framework.decorators import api_view, permission_classes
from .serializers import UserSerializer, BhajanaMandiraluSerialiser
from .models import UserModel, BhajanaMandiraluModel
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.conf import settings
from django.contrib.auth.hashers import make_password
from datetime import datetime
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

  
# Create your views here.

@api_view(['POST'])
@permission_classes([AllowAny])
def login_authentication_view(request):
    """
    Checking User Login and generating Token to the User
    """

    username = request.data.get('username')
    password = request.data.get('password')
    response = Response()

    if username is None or password is None:
        raise exceptions.AuthenticationFailed(
            'Username and password are required')

    try:
        userdata = UserModel.objects.get(username=username)
    except UserModel.DoesNotExist:
        raise exceptions.AuthenticationFailed('User not found')

    user = authenticate(username=username, password=password)

    if user is None:
        raise exceptions.AuthenticationFailed('Incorrect password')

    refresh = RefreshToken.for_user(user)
    # Define token lifetime
    lifetime = settings.SIMPLE_JWT['ACCESS_TOKEN_LIFETIME']

    # Calculate expiration time
    expires_at = datetime.now() + lifetime
    
    response.data = {
        'access_token': str(refresh.access_token),
        'refresh_token': str(refresh),
        'email': userdata.email,
        'role': userdata.role,
        'username': userdata.username,
        'expires_at': expires_at
    }

    return response



@api_view(['POST'])  # Allow only POST requests
@permission_classes([IsAuthenticated])
def register_view(request):
    """
    Token Checking and Registering New User
    """
    if request.method == 'POST':    
        # print("request data",request.data)
       
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'message':'New User created succesfully!!'})
    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)



@api_view(['PATCH'])  # Allow only PATCH requests
@permission_classes([IsAuthenticated])
def update_username_view(request):

    """
    Token Checking and Updating User Name
    """

    if request.method == 'PATCH':
        email = request.data.get('email')
        new_username = request.data.get('username')

        try:
            user = UserModel.objects.get(email=email)
        except UserModel.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        # Check if the new username is already taken
        if UserModel.objects.exclude(email=email).filter(username=new_username).exists():
            return Response({'error': 'This username is already taken'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Username Updated'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)



@api_view(['PATCH'])  # Allow only PATCH requests
@permission_classes([IsAuthenticated])
def change_password(request):
    """
    Token Checking and Changing User Password
    """

    if request.method == 'PATCH':

        email = request.data.get('email')
        try:
            user = UserModel.objects.get(email=email)

        except UserModel.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        # Hash the password before saving
        request.data['password'] = make_password(request.data['password'])

        serializer = UserSerializer(user, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Password Updation Succesful !'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def users_list_view(request):
    """
    Token Checking and sending Users List
    """

    users = UserModel.objects.all()
    serializer = UserSerializer(users, many=True)

    return Response(serializer.data)


@api_view(['GET', 'PATCH'])
@permission_classes([IsAuthenticated])
def user_list_view(request, name):
    """
    Token Checking and 
    GET - sending User Data
    PATCH - Updating User Data
    """
    if (request.method == 'GET'):
        try:
            user = UserModel.objects.get(username=name)
        except UserModel.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = UserSerializer(user)
        return Response(serializer.data)

    if (request.method == 'PATCH'):
        try:
            user = UserModel.objects.get(username=name)
        except UserModel.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User Data Updated'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def bmdata_view(request):    
        """
        Token Checking and Uploading Bhajana Mandiralu Data to Database
        """

        # print("request data",request.data)
        file_obj = request.FILES.get('file')

        if file_obj:
            serializer = BhajanaMandiraluSerialiser(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response({'message':'Bhajana Mandiralu data,file uploaded successfully!!'})
        else:
            return Response({'error': 'No file uploaded'}, status=status.HTTP_400_BAD_REQUEST)

    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def reports_view(request):    
        """
        Token Checking and fetching Reports
        """
        # print("reports_view",request.data)
        district = request.data.get('district')  
        mandal = request.data.get('mandal')        
        colony = request.data.get('colony')   

        try:            
            # Start with a base queryset filtered by district
            query = BhajanaMandiraluModel.objects.filter(district=district)

            # Apply additional filters conditionally
            if mandal:
                query = query.filter(mandal=mandal)
            if colony:
                query = query.filter(colonyname=colony)

            # Execute the final queryset
            reports = query.all()

            # Serialize and return the results
            serializer = BhajanaMandiraluSerialiser(reports, many=True)
            return Response(serializer.data)
        except BhajanaMandiraluModel.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        

