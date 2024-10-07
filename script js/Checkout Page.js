import { cart, removeCart } from "../data/cart.js";
import { AddtoCart } from "../data/AddtoCart.js";

// console.log(cart)

let checkoutHTML = "";

cart.forEach((cartItem) => {
  let productId = cartItem.id;

  let productFind = "";

  AddtoCart.forEach((product) => {
    // console.log(product);
    if (productId === product.id) {
      productFind = product;
    }
  });

  // console.log(productFind);

  checkoutHTML += `
      <div class="cart cart-js-${productFind.id}">
        <div>
          <img class="product-image" src="${productFind.image}" alt="" />
        </div>
        <div class="informations">
          <p>${productFind.text}</p>
          <img src="${productFind.star}" alt="" />
          <span>Quantity: ${cartItem.quantity}</span>
          <h1><strike>${productFind.oldPrice}</strike><span>${productFind.currentPrice}</span></h1>
          <button class="delete-btn" data-product-id="${productFind.id}">Delete Cart</button>
        </div>
      </div>
    `;
  return checkoutHTML;
});
// console.log(checkoutHTML);
document.querySelector(".carts").innerHTML += checkoutHTML;

document.querySelectorAll('.delete-btn').forEach(button => {
  button.addEventListener('click', () => {
    let productId = button.dataset.productId;
    removeCart(productId);

    const container = document.querySelector(`.cart-js-${productId}`);

    container.remove();
    })
});

