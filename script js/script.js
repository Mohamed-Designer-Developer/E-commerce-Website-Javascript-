import { galariesProduct} from '../data/galariesProducts.js';
import { AddtoCart } from '../data/AddtoCart.js';
import { addtoProducts, cart } from '../data/cart.js';

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("navbar").classList.add("active");
  } else {
    document.getElementById("navbar").classList.remove("active");
  }
}

galariesProduct.forEach((product) => {
  // console.log(product);
  product = `
      <div class="galery">
          <img src="${product.image}" alt="" />
          <p>${product.text}</p>
          <h1><strike>$${product.oldPrice}</strike> <span>$${product.currentPrice}</span></h1>
        </div>
    `;
  // console.log(product)
  document.querySelector(".galeries").innerHTML += product;
});


AddtoCart.forEach((product) => {
  // console.log(product);
  product = `
    <div class="product">
          <img src="${product.image}" alt="" />
          <p>${product.text}</p>
          <img class="start" src="${product.star}" alt="" />
          <h1><strike>$${product.oldPrice}</strike> <span>$${product.currentPrice}</span></h1>
          <button class="add-to-cart-btn" data-product-id="${product.id}">Add to cart</button>
        </div>
    `;
  document.querySelector(".products").innerHTML += product;
});

// dataset Attribute
// 1-element data-name= id
//2- data- waa inaad ka hormarisaa
//3- button.dataset.name

const buttons = document.querySelectorAll(".add-to-cart-btn")

// console.log(buttons);

buttons.forEach(button => {
  button.addEventListener("click", () => {
    // console.log(button)
    let productId = button.dataset.productId;
    // console.log(productId);

    addtoProducts(productId)
  
    // console.log(cart)

    let CartQuantity = 0;

    cart.forEach((cartItem) => {
      CartQuantity += cartItem.quantity;
    });

    // console.log(CartQuantity);

    document.querySelector('.cart-text').innerHTML = CartQuantity;
  })
});