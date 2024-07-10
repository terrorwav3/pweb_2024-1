import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';



const EditarProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/productos/${id}/`);
        const { nombre, descripcion } = response.data;
        setNombre(nombre);
        setDescripcion(descripcion);
      } catch (error) {
        console.error('Hubo un error al obtener el producto:', error);
      }
    };
    fetchProducto();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('descripcion', descripcion);
    if (imagen) {
      formData.append('imagen', imagen);
    }

    try {
      const response = await axios.put(`http://localhost:8000/api/productos/${id}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Producto actualizado:', response.data);
      navigate('/');  // Redirige a la página de lista de productos
    } catch (error) {
      console.error('Hubo un error al actualizar el producto:', error);
    }
  };

  const handleFileChange = (event) => {
    setImagen(event.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Producto</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>
      <div>
        <label>Imagen:</label>
        <input
          type="file"
          onChange={handleFileChange}
        />
      </div>
      <button type="submit">Actualizar</button>
    </form>
  );
};

export default EditarProducto;