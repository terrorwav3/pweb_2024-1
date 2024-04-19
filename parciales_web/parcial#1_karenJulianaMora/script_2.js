let editingRow = null;

// Función para habilitar la edición de una fila
function enableEditMode(row) {
  if (editingRow && editingRow !== row) {
    alert("Solo se puede editar una línea. Recargue la página para poder editar otra");
    return;
  }

  editingRow = row;
  row.classList.add("editable");

  const cells = row.querySelectorAll("td");
  cells.forEach((cell, index) => {
    if (index !== cells.length - 1) {
      const input = document.createElement("input");
      input.value = cell.innerText;
      cell.innerHTML = "";
      cell.appendChild(input);
    }
  });

  const actionCell = cells[cells.length - 1];
  const saveButton = document.createElement("button");
  saveButton.innerText = "Guardar";
  saveButton.onclick = () => saveRow(row);
  actionCell.innerHTML = "";
  actionCell.appendChild(saveButton);
}

// Función para guardar los cambios en una fila
function saveRow(row) {
  const cells = row.querySelectorAll("td");
  const data = [];
  cells.forEach((cell, index) => {
    if (index !== cells.length - 1) {
      const input = cell.querySelector("input");
      data.push(input.value);
    }
  });

  // Aquí puedes enviar los datos editados a la URL de destino
  console.log("Datos editados:", data);

  row.classList.remove("editable");
  editingRow = null;
  reloadTable();
}

// Función para recargar la tabla
function reloadTable() {
  // Aquí debes obtener los datos originales y actualizar la tabla
  console.log("Recargando tabla...");
}

// Agregar evento de clic a las filas de la tabla
const tableBody = document.querySelector("#dataTable tbody");
tableBody.addEventListener("click", (event) => {
  if (event.target.tagName.toLowerCase() === "td") {
    const row = event.target.parentNode;
    enableEditMode(row);
  }
});

// Agregar evento de clic al botón "Cancelar"
const cancelButton = document.getElementById("cancelar");
cancelButton.addEventListener("click", reloadTable);