/* CHECK LOGIN */

let currentUser =
  JSON.parse(localStorage.getItem("currentUser"));

if(!currentUser){
  window.location.href = "login.html";
}

/* GET CART */

let cart =
  JSON.parse(localStorage.getItem("cart"))
  || [];

/* RENDER */

function renderCart(){

  const container =
    document.getElementById("cartContainer");

  const totalPrice =
    document.getElementById("totalPrice");

  container.innerHTML = "";

  let total = 0;

  if(cart.length === 0){

    container.innerHTML = `

      <h2>
        Cart is empty
      </h2>

    `;

    totalPrice.innerHTML = "Total: ₹0";

    return;
  }

  cart.forEach((product,index)=>{

    total += product.price;

    container.innerHTML += `

      <div class="cart-item">

        <img src="${product.image}">

        <div class="cart-info">

          <h3>${product.name}</h3>

          <p>
            ₹${product.price}
          </p>

        </div>

        <button
          class="remove-btn"
          onclick="removeFromCart(${index})"
        >
          Remove
        </button>

      </div>

    `;

  });

  totalPrice.innerHTML =
    `Total: ₹${total}`;
}

/* REMOVE */

function removeFromCart(index){

  cart.splice(index,1);

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  renderCart();
}

/* CHECKOUT */

function checkout(){

  if(cart.length === 0){
    alert("Cart is empty");
    return;
  }

  let orders =
    JSON.parse(localStorage.getItem("orders"))
    || [];

  orders.push({
    user:currentUser.username,
    products:cart,
    date:new Date().toLocaleString()
  });

  localStorage.setItem(
    "orders",
    JSON.stringify(orders)
  );

  localStorage.removeItem("cart");

  cart = [];

  renderCart();

  alert("Order placed successfully");
}

renderCart();