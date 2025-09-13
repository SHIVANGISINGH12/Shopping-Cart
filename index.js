//----------------PRODUCT LIST LOGIC--------------------

let products = [
  {
    id: 1,
    name: "Product-1",
    price: 100,
    quantity: 0,
  },
  {
    id: 2,
    name: "Product-2",
    price: 200,
    quantity: 0,
  },
  {
    id: 3,
    name: "Product-3",
    price: 300,
    quantity: 0,
  },
  {
    id: 4,
    name: "Product-4",
    price: 400,
    quantity: 0,
  },
];
let productsList = document.querySelector(".productsList");

function renderProductsList() {
  let productsListHTML = "";

  products.forEach((product) => {
    productsListHTML += `  <div class="product">
            <span>${product.name}</span>
            <span>${product.price}</span>
            <div class="quantityButton">
              <button class="minusBtn" data-product-id="${product.id}" >-</button>
              <span class="quantity" >${product.quantity}</span>
              <button class="plusBtn" data-product-id="${product.id}">+</button>
            </div>
          </div>`;
  });

  productsList.innerHTML = productsListHTML;
}

renderProductsList();

function increaseDecrease(event) {
  let productId = parseInt(event.target.dataset.productId);
  let product = products.find((product) => productId === product.id);

  if (event.target.classList.contains("plusBtn")) {
    product.quantity++;

    if (product.quantity === 1) {
      cart.push(product);
    }

    renderCartList();
    total();
  } else if (
    event.target.classList.contains("minusBtn") &&
    product.quantity > 0
  ) {
    product.quantity--;
    if (product.quantity === 0) {
      
      let indexOfProduct = cart.indexOf(product);
      if (indexOfProduct !== -1) {
        cart.splice(indexOfProduct, 1);
      }
      renderCartList();
    }
    renderCartList();
    total();
  }

  let quantitySpan = event.target.parentElement.querySelector("span");
  quantitySpan.innerHTML = product.quantity;
}

productsList.addEventListener("click", increaseDecrease);

//----------------CART LOGIC----------------------------
let cart = [];

function renderCartList() {
  let cartListHTML = "";
  let cartList = document.querySelector(".cartList");

  cart.forEach((cartItem) => {
    cartListHTML += `<div class="item">
            <span>${cartItem.name}</span>
            <span>${cartItem.price} x ${cartItem.quantity}</span>
          </div>`;

  });
  cartList.innerHTML = cartListHTML;
}

function total(){
  let totalValue = document.querySelector('.totalValue');
  let total = 0;

  cart.forEach((cartItem) => {
    total += (cartItem.quantity * cartItem.price);
  });

  totalValue.innerHTML = total;
}
