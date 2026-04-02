const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("../src/assets/data/productos.json")
  .then(res => res.json())
  .then(productos => {

    const producto = productos.find(p => p.id === id);

    if(!producto){
      document.getElementById("producto-nombre").textContent = "Producto no encontrado";
      return;
    }

    document.getElementById("producto-titulo").textContent = producto.nombre;
    document.getElementById("producto-nombre").textContent = producto.nombre;
    document.getElementById("producto-descripcion").textContent = producto.descripcion;
    document.getElementById("producto-presentacion").textContent = producto.presentacion;
    document.getElementById("producto-categoria").textContent = producto.categoria;

    const img = document.getElementById("producto-img");
    img.src = producto.imagen;
    img.alt = producto.nombre;

  });
  document.getElementById("producto-codigo").textContent = producto.codigo || "";