/* CHECK LOGIN */

let currentUser =
  JSON.parse(localStorage.getItem("currentUser"));

if(!currentUser){
  window.location.href = "login.html";
}

/* SAMPLE PRODUCTS */

let products =
  JSON.parse(localStorage.getItem("products"))
  || [
  {
    id:1,
    name:"Wireless Headphones",
    price:2999,
    image:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },

  {
    id:2,
    name:"Smart Watch",
    price:4999,
    image:
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },

  {
    id:3,
    name:"Gaming Mouse",
    price:1499,
    image:
    "https://images.unsplash.com/photo-1527814050087-3793815479db"
  },

  {
  id:4,
  name:"Laptop Backpack",
  price:1999,
  image:
  "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7"
}

];

localStorage.setItem(
  "products",
  JSON.stringify(products)
);

/* RENDER PRODUCTS */

const container =
  document.getElementById("productsContainer");

products.forEach(product=>{

  container.innerHTML += `

    <div class="product-card">

      <img src="${product.image}">

      <h3>${product.name}</h3>

      <p>
        Premium quality product.
      </p>

      <h4>
        ₹${product.price}
      </h4>

      <button onclick="addToCart(${product.id})">
        Add To Cart
      </button>

    </div>

  `;
});

/* ADD TO CART */

function addToCart(id){

  let cart =
    JSON.parse(localStorage.getItem("cart"))
    || [];

  const product =
    products.find(p=>p.id === id);

  cart.push(product);

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  alert("Product added to cart");
}