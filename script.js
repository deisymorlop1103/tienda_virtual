

    // Función para obtener datos de la API ficticia
    async function obtenerProductos() {
      try {
        const response = await fetch('https://fakestoreapi.deisymoreno1.repl.co/products');
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
        return [];
      }
    }
    
    document.addEventListener("DOMContentLoaded", async () => {
      const contenedor = document.querySelector(".contenedor");
      const prods = await obtenerProductos();

      let productos = "";
      prods.test.forEach((product) => {
	localStorage.setItem(`product_${product.id}`, JSON.stringify(product));
        productos += `
          <div class="card" style="width: 18rem;">
            <img src="${product.image}" style="width: 100px" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-text">${product.title}</h5>
              <p class="card-text">${product.price}</p>
              <a href="detalleproducto.html?id=${product.id}" class="btn btn-primary">Ver Detalle</a>
            </div>
          </div>
        `;
      });

      contenedor.innerHTML = productos; // Agrega el contenido al elemento con la clase "contenedor"
    });


  
  
