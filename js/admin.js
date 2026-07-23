/* CHECK ADMIN */

let currentUser =
  JSON.parse(localStorage.getItem("currentUser"));

if(
  !currentUser
  ||
  currentUser.role !== "admin"
){
  window.location.href = "login.html";
}

/* PRODUCTS */

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
    }

  ];

/* SAVE */

function saveProducts(){

  localStorage.setItem(
    "products",
    JSON.stringify(products)
  );
}

/* RENDER */

function renderProducts(){

  const container =
    document.getElementById(
      "adminProductsContainer"
    );

  container.innerHTML = "";

  products.forEach(product=>{

    container.innerHTML += `

      <div class="product-card">

        <img src="${product.image}">

        <h3>${product.name}</h3>

        <h4>
          ₹${product.price}
        </h4>

        <button
          class="delete-btn"
          onclick="deleteProduct(${product.id})"
        >
          Delete
        </button>

      </div>

    `;

  });

}

/* ADD PRODUCT */

function addProduct(){

  const name =
    document.getElementById("productName").value;

  const price =
    document.getElementById("productPrice").value;

  const image =
    document.getElementById("productImage").value;

  if(
    name === ""
    ||
    price === ""
    ||
    image === ""
  ){
    alert("Fill all fields");
    return;
  }

  products.push({

    id:Date.now(),

    name,

    price,

    image

  });

  saveProducts();

  renderProducts();

  document.getElementById("productName").value = "";

  document.getElementById("productPrice").value = "";

  document.getElementById("productImage").value = "";
}

/* DELETE */

function deleteProduct(id){

  products =
    products.filter(
      product => product.id !== id
    );

  saveProducts();

  renderProducts();
}

renderProducts();