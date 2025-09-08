const products = [{
    id: 1,
    name: 'Product-1',
    price: 100,
    quantity: 0,
},
{
    id: 2,
    name: 'Product-2',
    price: 200,
    quantity: 0,
},
{
    id: 3,
    name: 'Product-3',
    price: 300,
    quantity: 0,
},
{
    id: 4,
    name: 'Product-4',
    price: 400,
    quantity: 0,
},
];

let productsList = document.querySelector('.productsList');
let productListHTML = '';


products.forEach((product)=> {
    productListHTML += `  <div class="product">
            <span>${product.name}</span>
            <span>${product.price}</span>
            <div class="quantityButton">
              <button class="plusBtn">+</button>
              <span>${product.quantity}</span>
              <button class="minusBtn">-</button>
            </div>
          </div>`;
});

productsList.innerHTML = productListHTML;
