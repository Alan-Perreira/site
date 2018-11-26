
var openCheckout = document.querySelector(".basket");
console.log(openCheckout);

var myCheckout = document.querySelector(".checkout");
console.log(myCheckout);

var close = document.querySelector(".close-checkout");




function showBasket(toto) {
  toto.preventDefault();
  myCheckout.classList.toggle("checkout-is-showy");
}



close.addEventListener("click", showBasket);
openCheckout.addEventListener("click",showBasket);
