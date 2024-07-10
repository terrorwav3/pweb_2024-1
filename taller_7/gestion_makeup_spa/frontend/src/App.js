import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductoList from './components/ProductoList';
import CrearProducto from './components/CrearProducto';
import EditarProducto from './components/EditarProducto';
import EliminarProducto from './components/EliminarProducto';
import './styles/styles.css';
import imagen1 from './imagenes_spa/imagen1.jpg';
import imagen2 from './imagenes_spa/imagen2.jpg';
import imagen3 from './imagenes_spa/imagen3.jpg';
import imagen4 from './imagenes_spa/imagen4.jpg';
import imagen5 from './imagenes_spa/imagen5.jpg';
import imagen6 from './imagenes_spa/imagen6.webp';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Gestión de Productos</h1>
        <Routes>
          <Route path="/" element={<ProductoList />} />
          <Route path="/crear" element={<CrearProducto />} />
          <Route path="/editar/:id" element={<EditarProducto />} />
          <Route path="/eliminar/:id" element={<EliminarProducto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
