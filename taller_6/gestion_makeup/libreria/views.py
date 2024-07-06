from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Producto
from .forms import ProductoForm
# Create your views here.
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