let cart = getCart();




let totalPrice = document.getElementById('total_price');
let idOrder = document.getElementById('id_order');

let address = document.getElementById('address');
let zipCode = document.getElementById('zipcode');
let city = document.getElementById('city');
let email = document.getElementById('user_email')

let contact = JSON.parse(localStorage.getItem('contact'));
let orderId = localStorage.getItem('orderId');
if (orderId === null) {
    location.href="index.html"; 
} else {
address.innerHTML    = contact.address;
zipCode.innerHTML    = contact.zipCode;
city.innerHTML       = contact.city;
totalPrice.innerHTML = localStorage.getItem('calculatedPrice')/100 + " €";
idOrder.innerHTML    = orderId;
email.innerHTML      = contact.email;


}
// localStorage.clear();