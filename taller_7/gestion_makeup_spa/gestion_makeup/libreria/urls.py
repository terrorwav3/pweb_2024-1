from django.urls import path, include
from.import views
from django.conf import settings
from django.contrib.staticfiles.urls import static




urlpatterns=[

    path('',views.inicio, name='inicio'),
    path('login', views.login, name='login'),
    path('catalogo', views.catalogo, name='catalogo'),
    path('catalogo/crear', views.crear, name='crear'),
    path('catalogo/editar', views.editar, name='editar'),
    path('eliminar/<int:id>', views.eliminar, name='eliminar'),
    path('catalogo/editar/<int:id>', views.editar, name='editar'),


]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)