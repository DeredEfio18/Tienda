// Archivo: productos.js

let productos = JSON.parse(localStorage.getItem("productos")) || [];
let editandoId = null;

function guardarProductos() {
  localStorage.setItem("productos", JSON.stringify(productos));
  mostrarProductos();
}

function agregarProducto() {
  const nombre = document.getElementById("nombre").value;
  const descripcion = document.getElementById("descripcion").value;
  const precio = parseFloat(document.getElementById("precio").value);

  if (editandoId !== null) {
    // Editar producto existente
    productos[editandoId] = { nombre, descripcion, precio };
    editandoId = null;
  } else {
    // Agregar nuevo producto
    productos.push({ nombre, descripcion, precio });
  }

  document.getElementById("nombre").value = "";
  document.getElementById("descripcion").value = "";
  document.getElementById("precio").value = "";

  guardarProductos();
}

function mostrarProductos() {
  const tbody = document.getElementById("lista-productos");
  tbody.innerHTML = "";

  productos.forEach((producto, index) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${producto.nombre}</td>
      <td>${producto.descripcion}</td>
      <td>$${producto.precio.toFixed(2)}</td>
      <td>
        <button onclick="editarProducto(${index})">Editar</button>
        <button onclick="eliminarProducto(${index})">Eliminar</button>
      </td>
    `;

    tbody.appendChild(fila);
  });
}

function editarProducto(index) {
  const producto = productos[index];
  document.getElementById("nombre").value = producto.nombre;
  document.getElementById("descripcion").value = producto.descripcion;
  document.getElementById("precio").value = producto.precio;
  editandoId = index;
}

function eliminarProducto(index) {
  if (confirm("¿Estás seguro de eliminar este producto?")) {
    productos.splice(index, 1);
    guardarProductos();
  }
}

// Mostrar productos al cargar la página
document.addEventListener("DOMContentLoaded", mostrarProductos);
