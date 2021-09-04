
let totalPrice = document.getElementById('total_price');
let idOrder = document.getElementById('id_order');

let address = document.getElementById('address');
let zipCode = document.getElementById('zipcode');
let city = document.getElementById('city');
let email = document.getElementById('user_email')

let contact = JSON.parse(localStorage.getItem('contact'));
console.log(contact);

address.innerHTML    = contact.address;//localStorage.getItem('userAdress');
zipCode.innerHTML    = contact.zipCode;//localStorage.getItem('userZipCode');
city.innerHTML       = contact.city;//localStorage.getItem('userCity');
totalPrice.innerHTML = localStorage.getItem('calculatedPrice')/100 + " €";
idOrder.innerHTML    = localStorage.getItem('orderId');
email.innerHTML      = contact.email;//localStorage.getItem('userEmail');

// localStorage.removeItem('cart');

