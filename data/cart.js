export let cart = JSON.parse(localStorage.getItem('cartItems'));



function SaveToLocalStorage () {
  localStorage.setItem('cartItems' , JSON.stringify(cart))
}

// steps for deleting the prodcuts from cart
//create a new array.
//lool through the cart.
//add cart to the new array excep the clicked item.

export function addtoProducts(productId) {
  let matching = '';

    cart.forEach((cartItem) => {
      if (productId == cartItem.id) {
        matching = cartItem;
      }
    });

    if (matching) {
      matching.quantity += 1
    } else {
      cart.push({
        id: productId,
        quantity: 1
      })  
  };
  
  SaveToLocalStorage();
}

export function removeCart(productId) {
  // make new array
  const newArray = [];

  // iterate through the cart
  cart.forEach((cartItem) => {
    if (cartItem.id !== productId) {
      newArray.push(cartItem);
    }
  });

  cart = newArray;
  
  SaveToLocalStorage();
}
