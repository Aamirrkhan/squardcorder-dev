const shopAllBtn = document.querySelector(".custom-shop-container");
const cartItems = document.querySelector(".cart-items");

// console.log(shopAllBtn, "working");
shopAllBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const currentElement = e.target;
  if (currentElement.classList.contains("shop-item-button")) {
    const divElement = currentElement.closest(".shop-item");
    const divName = divElement.querySelector(".shop-item-title");
    const divImg = divElement.querySelector(".shop-item-image");
    const divPrice = divElement.querySelector(".shop-item-price");

    const creatDiv = document.createElement("div");
    creatDiv.className = "cart-row";
    creatDiv.innerHTML = `<div class="cart-item cart-column">
        <img
          class="cart-item-image"
          src="${divImg?.src}"
          width="100"
          height="100"
        />
        <span class="cart-item-title">${divName.innerText}</span>
      </div>
      <span class="cart-column">
        $ <span class="cart-price-item-item">${divPrice.innerText}</span>
      </span>
      <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1" min="15" />
        <button class="btn btn-danger btn-remove" type="button">
          REMOVE
        </button>
      </div>`;

    cartItems.append(creatDiv);
    // console.log(creatDiv);
    cartTotalPrice();
  }
});

function cartTotalPrice() {
  const cartRow = document.querySelectorAll(".cart-items .cart-row");
  const cartRowItem = document.querySelector(".cart-total-price");


  if (cartRow?.length > 0) {
    let cartPrice = 0;

    cartRow.forEach(function (singleRow) {
      
      const cartPriceText = singleRow.querySelector(".cart-price-item-item")?.innerText;
      // console.log(cartPriceText);
      const cartInput = singleRow?.querySelector(".cart-quantity-input");

      cartPrice += cartPriceText * cartInput?.value;
      // console.log(cartPrice);
      cartInput.addEventListener('change', function(){
        cartTotalPrice();
      })
    });
    cartPrice.innerText = `$ ${cartPrice.toFixed(2)}`
    cartRowItem.innerHTML = cartPrice;
    
  }
}
// cartTotalPrice();

// console.log("Hello")