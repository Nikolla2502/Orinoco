let itemOrdered = document.querySelector('.item_ordered');
let totalPrice = document.querySelector('.totalprice');
let firstName = document.getElementById('firstName');

firstName.innerHTML = localStorage.getItem('userFirstName')
itemOrdered.innerHTML = localStorage.getItem('nameTeddy');
totalPrice.innerHTML = localStorage.getItem('priceTeddy');

localStorage.removeItem('cart');

