from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Producto
from .forms import ProductoForm
from rest_framework import viewsets
from .serializers import ProductoSerializer
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from rest_framework.decorators import action
from rest_framework.response import Response

# Create your views here.

index = never_cache(TemplateView.as_view(template_name='index.html'))

def inicio(request):
 return render(request, 'paginas\inicio.html')

def login(request):
 return render(request, 'paginas\login.html')

def catalogo(request):
 productos = Producto.objects.all()
 return render(request, 'catalogo\index.html', {'productos': productos})

def crear(request):
 formulario = ProductoForm(request.POST or None, request.FILES or None)
 if formulario.is_valid():
  formulario.save()
  return redirect('catalogo')
 return render(request, 'catalogo\crear.html', {'formulario':formulario})
 
def editar(request, id):
 producto = Producto.objects.get(id=id)
 formulario = ProductoForm(request.POST or None, request.FILES or None, instance=producto)
 if formulario.is_valid() and request.POST:
  formulario.save()
  return redirect('catalogo')

 return render(request, 'catalogo\editar.html', {'formulario':formulario})

def eliminar(request, id):
 producto = Producto.objects.get(id=id)
 producto.delete()
 return redirect('catalogo')

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

    @action(detail=False, methods=['get'])
    def lista_productos(self, request):
        productos = self.get_queryset()
        serializer = self.get_serializer(productos, many=True)
        return Response(serializer.data)

# Puedes mantener tus otras vistas si las necesitas para compatibilidad con el antiguo MVC
    

    
    