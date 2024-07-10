// src/components/ProductoList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const ProductoList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/productos/')
      .then(response => setProductos(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <Link to="/crear">Crear Nuevo Producto</Link>
      {productos.map(producto => (
        <div key={producto.id} className="producto">
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          {producto.imagen && <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />}
          <Link to={`/editar/${producto.id}`}>Editar</Link>
          <Link to={`/eliminar/${producto.id}`}>Eliminar</Link>
        </div>
      ))}
    </div>
  );
}

export default ProductoList;
