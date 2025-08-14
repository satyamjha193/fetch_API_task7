document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("user-grid");

  // Fake Store API - has some shoes in category 'men's clothing' or 'women's clothing'
  const apiUrl = 'https://fakestoreapi.com/products';

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      // Filter products that are shoes (optional logic - simple keyword match)
      const shoeProducts = data.filter(item =>
        item.title.toLowerCase().includes("shoe") ||
        item.category.toLowerCase().includes("shoe")
      );

      // If no shoes matched, use fallback (show all products)
      const finalProducts = shoeProducts.length > 0 ? shoeProducts : data;

      finalProducts.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
          <img src="${product.image}" alt="${product.title}" class="product-image" />
          <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">₹${(product.price * 85).toFixed(0)}</p>
            <p class="product-desc">${product.description.slice(0, 80)}...</p>
          </div>
        `;

        productGrid.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Failed to fetch product data:", err);
      productGrid.innerHTML = "<p>Failed to load products. Please try again.</p>";
    });
});


 const hamburger = document.querySelector(".hamburger");
  const topNavbar = document.getElementById("topNavbar");
  const closeBtn = document.getElementById("closeNavbar");

  hamburger.addEventListener("click", () => {
    topNavbar.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    topNavbar.classList.remove("show");
  });