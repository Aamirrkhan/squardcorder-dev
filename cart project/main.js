// const shopAllBtn = document.querySelector(".custom-shop-container");
// const cartItems = document.querySelector(".cart-items");

// // console.log(shopAllBtn, "working");
// shopAllBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   const currentElement = e.target;
//   if (currentElement.classList.contains("shop-item-button")) {
//     const divElement = currentElement.closest(".shop-item");
//     const divName = divElement.querySelector(".shop-item-title");
//     const divImg = divElement.querySelector(".shop-item-image");
//     const divPrice = divElement.querySelector(".shop-item-price");

//     const creatDiv = document.createElement("div");
//     creatDiv.className = "cart-row";
//     creatDiv.innerHTML = `<div class="cart-item cart-column">
//         <img
//           class="cart-item-image"
//           src="${divImg?.src}"
//           width="100"
//           height="100"
//         />
//         <span class="cart-item-title">${divName.innerText}</span>
//       </div>
//       <span class="cart-column">
//         $ <span class="cart-price-item-item">${divPrice.innerText}</span>
//       </span>
//       <div class="cart-quantity cart-column">
//         <input class="cart-quantity-input" type="number" value="1" min="1" />
//         <button class="btn btn-danger btn-remove" type="button">
//           REMOVE
//         </button>
//       </div>`;

//     cartItems.append(creatDiv);
//     // console.log(creatDiv);
//     cartTotalPrice()
//   }
// });
//   function cartTotalPrice(){
//     const cartRow = document.querySelector('.cart-item .cart-row');
//     const cartRowItem = document.querySelector('.cart-total-price');

//     let cartPrice = 0;
//     if(cartRow?.length>0){
//       cartRow.forEach(function(rowfun){
//         const cartPriceText = rowfun.querySelector('cart-price-item-item')?.innerText;
//         const cartInput = rowfun?.querySelector('.cart-quantity-input');

//         cartPrice += cartPriceText*cartInput?.value;
//         console.log(cartRowItem)
        
//       })
//       cartRowItem.innerHTML = cartPrice;
//     }
//   }
const cartItems = document.querySelector(".cart-items");
const cartTotalPriceElement = document.querySelector(".cart-total-price");

const shopAllBtn = document.querySelector(".custom-shop-container");
shopAllBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const currentElement = e.target;
  if (currentElement.classList.contains("shop-item-button")) {
    const divElement = currentElement.closest(".shop-item");
    const divName = divElement.querySelector(".shop-item-title");
    const divImg = divElement.querySelector(".shop-item-image");
    const divPrice = divElement.querySelector(".shop-item-price");

    const cartRow = document.createElement("div");
    cartRow.className = "cart-row";
    cartRow.innerHTML = `<div class="cart-item cart-column">
        <img class="cart-item-image" src="${divImg?.src}" width="100" height="100"/>
        <span class="cart-item-title">${divName.innerText}</span>
      </div>
      <span class="cart-column">
        $ <span class="cart-price-item">${divPrice.innerText}</span>
      </span>
      <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1" min="1" />
        <button class="btn btn-danger btn-remove" type="button">REMOVE</button>
      </div>`;

    cartItems.appendChild(cartRow);
    cartTotalPrice();
  }
});

function cartTotalPrice() {
  const cartRows = document.querySelectorAll('.cart-row');
  let cartPrice = 0;

  if (cartRows.length > 0) {
    cartRows.forEach(function(row) {
      const cartPriceText = row.querySelector('.cart-price-item')?.innerText;
      const cartInput = row.querySelector('.cart-quantity-input');

      if (cartPriceText && cartInput) {
        cartPrice += parseFloat(cartPriceText) * parseInt(cartInput.value);
      }
    });

    cartTotalPriceElement.innerHTML = cartPrice.toFixed(3); // Assuming you want two decimal places
  }
}
