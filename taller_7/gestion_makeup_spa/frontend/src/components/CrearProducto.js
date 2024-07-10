import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const CrearProducto = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('descripcion', descripcion);
    formData.append('imagen', imagen);

    try {
      const response = await axios.post('http://localhost:8000/api/productos/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Producto creado:', response.data);
      navigate('/');  // Redirige a la página de lista de productos
    } catch (error) {
      console.error('Hubo un error al crear el producto:', error);
    }
  };

  const handleFileChange = (event) => {
    setImagen(event.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Producto</h2>
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
      <button type="submit">Crear</button>
    </form>
  );
};

export default CrearProducto;