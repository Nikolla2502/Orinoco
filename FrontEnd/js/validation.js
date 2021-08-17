let itemOrdered = document.getElementById('item_ordered');
let totalPrice = document.getElementById('total_price');
let idOrder = document.getElementById('id_order');
let firstName = document.getElementById('firstName');
let address = document.getElementById('address');
let zipCode = document.getElementById('zipcode');
let city = document.getElementById('city');



firstName.innerHTML = localStorage.getItem('userFirstName');
address.innerHTML = localStorage.getItem('userAdress');
zipCode.innerHTML = localStorage.getItem('userZipCode');
city.innerHTML = localStorage.getItem('userCity');

itemOrdered.innerHTML = localStorage.getItem('nameTeddy');
totalPrice.innerHTML = localStorage.getItem('calculatedPrice')/100 + " €";

localStorage.removeItem('cart');

