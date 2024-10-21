
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const productsContainer = document.getElementById("products");
    const products = data.products;

    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("col-md-4", "mb-4");

      productElement.innerHTML = `
        <div class="card h-100">
          <img src="${product.thumbnail}" class="card-img-top" alt="${
        product.title
      }">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text"><strong>Price:</strong> $${product.price}</p>
          </div>
        </div>
      `;

      productsContainer.appendChild(productElement);
    });
  })
  .catch((err) => console.error(err));
