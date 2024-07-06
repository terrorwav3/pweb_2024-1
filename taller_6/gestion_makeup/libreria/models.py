from django.db import models

class Producto(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100, verbose_name='Nombre')
    descripcion = models.TextField(verbose_name='Descripción', null=True)
    imagen = models.ImageField(upload_to='imagenes/',verbose_name='Imagen', null=True)
    
    def __str__(self):
        fila = 'Nombre: ' + self.nombre + ' - ' + 'Descripción: ' + self.descripcion
        return fila
    
    def delete(self, using=None, keep_parents=False):
        self.imagen.storage.delete(self.imagen.name)
        super().delete()
