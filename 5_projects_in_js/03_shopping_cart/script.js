document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "product 1", price: 29.99 },
    { id: 2, name: "product 2", price: 19.99 },
    { id: 3, name: "product 3", price: 59.999 },
  ];

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalPrice = parseFloat(localStorage.getItem("totalPrice")) || 0;

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name} - $${product.price.toFixed(2)}</span>
    <button class="add" data-id="${product.id}">Add to Cart</button>
    <button class="remove" data-id="${product.id}">Remove</button>`;
    productList.appendChild(productDiv);
  });

  // Restore cart and total price on load(refresh)
  renderCart();

  productList.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
    if (e.target.classList.contains("remove")) {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = cart.find((p) => p.id === productId);
      removeFromCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    updateLocalStorage();
    renderCart();
  }

  function removeFromCart(product) {
    if (product) {
      cart.splice(cart.indexOf(product), 1);
      updateLocalStorage();
      renderCart();
    }
  }

  function renderCart() {
    cartItems.innerText = "";
    let totalPrice = 0;

    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
      cart.forEach((item) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
        ${item.name} - $${item.price.toFixed(2)}
        `;
        cartItems.appendChild(cartItem);
      });
      totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
    } else {
      emptyCartMessage.classList.remove("hidden");
      totalPriceDisplay.textContent = "$0.00";
    }

    // Update the total price in localStorage
    localStorage.setItem("totalPrice", totalPrice.toFixed(2));
  }

  function updateLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart)); // Save cart to localStorage
  }

  checkOutBtn.addEventListener("click", () => {
    localStorage.removeItem("cart"); // Clear localStorage on checkout
    localStorage.removeItem("totalPrice"); // Clear total price from localStorage

    //When you use localStorage.clear() or localStorage.removeItem('key'), it only removes the data stored in the browser. The cart variable will still retain any items added during the current session. That's Why we have to manually do cart length = 0

    cart.length = 0; // Clear the cart
    alert("Checkout Successfully");
    renderCart();
  });
});
