const params = new URLSearchParams(window.location.search);
const categoriaActual = params.get("categoria");

fetch('/src/assets/data/productos.json')
  .then(res => res.json())
  .then(productos => {

    const grid = document.getElementById('productos-grid');

    const filtrados = productos.filter(p => p.categoria === categoriaActual);

    filtrados.forEach(producto => {

      const card = document.createElement('a');
      card.classList.add('producto-card');

      card.href = `/producto.html?id=${producto.id}`;

      card.innerHTML = `
        <div class="producto-img-container">
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <div class="producto-overlay"></div>
        </div>
        <p class="producto-nombre">${producto.nombre}</p>
      `;

      grid.appendChild(card);
    });

  });

const titulo = document.getElementById('titulo-categoria');

const nombres = {
  tortillas: "Tortillas",
  totopos: "Totopos",
  frituras: "Frituras"
};

titulo.textContent = nombres[categoriaActual];

const banner = document.querySelector('.section-banner');
banner.classList.remove('banner-productos'); 
banner.classList.add(`banner-${categoriaActual}`);