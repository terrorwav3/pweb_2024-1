let gustos = [];

function agregarGusto() {
  const nuevoGustoInput = document.getElementById('nuevoGusto');
  const nuevoGusto = nuevoGustoInput.value.trim();
  
  if (nuevoGusto !== '') {
    gustos.push({ gusto: nuevoGusto, porcentaje: 0 });
    actualizarTablaGustos();
    nuevoGustoInput.value = '';
  } else {
    alert('Por favor ingrese un nombre de gusto válido.');
  }
}

function actualizarTablaGustos() {
  const cuerpoTabla = document.getElementById('cuerpoTabla');
  cuerpoTabla.innerHTML = '';
  
  gustos.forEach((gusto, index) => {
    const fila = document.createElement('tr');
    fila.id = `fila-${index}`; // Añadir un id único para cada fila
    
    const columnaGusto = document.createElement('td');
    columnaGusto.textContent = gusto.gusto;
    
    const columnaPorcentaje = document.createElement('td');
    columnaPorcentaje.textContent = gusto.porcentaje + '%';
    
    const columnaAcciones = document.createElement('td');
    
    const botonEditar = document.createElement('button');
    botonEditar.textContent = 'Editar';
    botonEditar.onclick = () => editarGusto(index);
    
    columnaAcciones.appendChild(botonEditar);
    
    fila.appendChild(columnaGusto);
    fila.appendChild(columnaPorcentaje);
    fila.appendChild(columnaAcciones);
    
    cuerpoTabla.appendChild(fila);
  });
}

function editarGusto(index) {
  const fila = document.getElementById(`fila-${index}`);
  const gustoAnterior = gustos[index].gusto;
  const porcentajeAnterior = gustos[index].porcentaje;
  
  // Crear campos editables
  const inputGusto = document.createElement('input');
  inputGusto.type = 'text';
  inputGusto.value = gustoAnterior;
  
  const inputPorcentaje = document.createElement('input');
  inputPorcentaje.type = 'number';
  inputPorcentaje.value = porcentajeAnterior;
  
  // Crear botones
  const botonGuardar = document.createElement('button');
  botonGuardar.textContent = 'Guardar';
  botonGuardar.onclick = () => guardarCambios(index, inputGusto, inputPorcentaje);
  
  const botonCancelar = document.createElement('button');
  botonCancelar.textContent = 'Cancelar';
  botonCancelar.onclick = () => cancelarEdicion(index, gustoAnterior, porcentajeAnterior);
  
  const botonEliminar = document.createElement('button');
  botonEliminar.textContent = 'Eliminar';
  botonEliminar.onclick = () => eliminarGusto(index);
  
  // Limpiar la fila y agregar los campos editables y botones
  fila.innerHTML = ''; // Limpiar la fila
  
  // Crear celdas para los campos editables
  const tdGusto = document.createElement('td');
  const tdPorcentaje = document.createElement('td');
  const tdBotones = document.createElement('td');
  
  // Agregar los campos editables a las celdas correspondientes
  tdGusto.appendChild(inputGusto);
  tdPorcentaje.appendChild(inputPorcentaje);
  tdBotones.appendChild(botonGuardar);
  tdBotones.appendChild(botonCancelar);
  tdBotones.appendChild(botonEliminar);
  
  // Agregar las celdas a la fila
  fila.appendChild(tdGusto);
  fila.appendChild(tdPorcentaje);
  fila.appendChild(tdBotones);
}

function eliminarGusto(index) {
  const confirmarEliminar = confirm(`¿Está seguro que desea eliminar "${gustos[index].gusto}"?`);
  
  if (confirmarEliminar) {
    gustos.splice(index, 1);
    actualizarTablaGustos();
  }
}


function guardarCambios(index, inputGusto, inputPorcentaje) {
  const nuevoNombre = inputGusto.value.trim();
  const nuevoPorcentaje = parseFloat(inputPorcentaje.value);
  
  if (nuevoNombre !== '' && !isNaN(nuevoPorcentaje) && nuevoPorcentaje >= 0 && nuevoPorcentaje <= 100) {
    gustos[index].gusto = nuevoNombre;
    gustos[index].porcentaje = nuevoPorcentaje;
    actualizarTablaGustos();
  } else {
    alert('Por favor ingrese un porcentaje válido (entre 0 y 100) y un nombre de gusto no vacío.');
  }
}

function cancelarEdicion(index, gustoAnterior, porcentajeAnterior) {
  gustos[index].gusto = gustoAnterior;
  gustos[index].porcentaje = porcentajeAnterior;
  actualizarTablaGustos();
}
