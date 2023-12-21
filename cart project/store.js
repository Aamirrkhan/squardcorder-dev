const allAddToCartBtn = document.querySelector(".custom-shop-container");
const selectCartRow = document.querySelector(".cart-items");
const cartrow = document.querySelectorAll('.cart-items .cart-row');
const selectingcartrow = document.querySelector('.cart-items');

console.log(allAddToCartBtn,"working")

allAddToCartBtn.addEventListener("click",function(e){
  e.preventDefault();
  const currentElement = e.target;
  if(currentElement.classList.contains("shop-item-button")){
    const cartdiv = currentElement.closest('.shop-item');
    const carttitle = cartdiv.querySelector('.shop-item-title');
    const cartimg = cartdiv.querySelector('.shop-item-image');
    const cartprice = cartdiv.querySelector('.shop-item-price')
 
    //cart item already exist
    // let cartitemexist = false;
    // const cartrow = document.querySelectorAll('.cart-items .cart-row');
    // if(cartrow?.length>0){
    //   cartrow.forEach(function(foreachone){
    //     const cartname = foreachone.querySelector('.cart-item-title');
    //     if(carttitle?.innerText == cartname?.innerText){
    //       cartitemexist = true;
    //     };
    //   });
    //   if(cartitemexist){
    //     alert("This item already exist in our cart");
    //     return;
    //   }

    // }

    const cartrow1 = document.createElement("div");
    cartrow1.className = "cart-row";
    cartrow1.innerHTML = `<div class="cart-item cart-column">
    <img
      class="cart-item-image"
      src="${cartimg?.src}"
      width="100"
      height="100"
    />
    <span class="cart-item-title">${carttitle.innerText}</span>
  </div>
  <span class="cart-column">
    $ <span class="cart-price-item-item">${cartprice.innerText}</span>
  </span>
  <div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1" />
    <button class="btn btn-danger btn-remove" type="button">
      REMOVE
    </button>
  </div>`;
  selectCartRow.append(cartrow1);
  cartTotalPrice();
  }
})

//total price of cart

function cartTotalPrice() {
  const cartrow = document.querySelectorAll('.cart-items .cart-row');
  const carttotalprice = document.querySelector('.cart-total-price');

  let totalprice =0;
  if(cartrow?.length>0){
    cartrow.forEach(function(onecartrow){
      const cartprice = onecartrow.querySelector('.cart-price-item-item')?.innerText;
      const cartquantity = onecartrow.querySelector('.cart-quantity-input');

      totalprice += cartprice*cartquantity?.value;
      console.log(totalprice,"price");

      //cart quantity
      // cartquantity.addEventListener("change", function (e) {
      //   const currentElement = e.target;
      //   if (currentElement.value <= 0) {
      //     currentElement.value= 1;
      //   };
      //   cartTotalPrice();
      // });

    });
    carttotalprice.innerText = `$ ${totalprice.toFixed(2)}`
  }
  else {
    cartTotalPrice.innerText = `$ 0`
  }
};

//removing cart

selectingcartrow.addEventListener('click',function(e){
  const currentElement = e.target;
  if(currentElement.classList.contains('btn-remove') && confirm("Are You Sure?")){
    currentElement.parentElement.parentElement.remove();
    cartTotalPrice();
  }
})
