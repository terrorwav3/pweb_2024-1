import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const EliminarProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/productos/${id}/`);
      console.log('Producto eliminado:', response.data);
      navigate('/');  // Redirige a la página de lista de productos
    } catch (error) {
      console.error('Hubo un error al eliminar el producto:', error);
    }
  };

  return (
    <div>
      <h2>Eliminar Producto</h2>
      <p>¿Estás seguro de que deseas eliminar este producto?</p>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default EliminarProducto;