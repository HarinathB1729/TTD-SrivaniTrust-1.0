from django.urls import path
from .views import *


urlpatterns = [
    path('/user/<str:name>/', user_list_view, name="user_data"),
    path('/register/', register_view, name="register"),
    path('/usernameupdate/', update_username_view, name="username_update"),
    path('/changepwd/', change_password, name="change_password"),    
    path('/authentication/', login_authentication_view, name="authentication"),    
    path('/bmdata/',bmdata_view, name="bmdata"),
    path('/reports/', reports_view, name="reports"),
    path('/', users_list_view, name="users_list"),
]
