
let totalPrice = document.getElementById('total_price');
let idOrder = document.getElementById('id_order');

let address = document.getElementById('address');
let zipCode = document.getElementById('zipcode');
let city = document.getElementById('city');
let email = document.getElementById('user_email')



address.innerHTML = localStorage.getItem('userAdress');
zipCode.innerHTML = localStorage.getItem('userZipCode');
city.innerHTML = localStorage.getItem('userCity');
totalPrice.innerHTML = localStorage.getItem('calculatedPrice')/100 + " €";
email.innerHTML = localStorage.getItem('userEmail');

// localStorage.removeItem('cart');

