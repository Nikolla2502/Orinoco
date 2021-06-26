
// panier
let itemName = document.getElementById('itemName');
itemName.innerHTML = "ourson";

let itemNumber = document.getElementById('itemNumber');
itemNumber.innerHTML = "0";

let unitPrice = document.getElementById('unitPrice');
unitPrice.innerHTML = "€";

let totalPrice = document.getElementById('totalPrice');
totalPrice.innerHTML = "€";



// Formulaire client

let form = document.getElementById('form-group');

let formNom = document.createElement("input");
formNom.setAttribute("type","text");
formNom.setAttribute("placeholder","Nom");
formNom.classList.add("required");
formNom.classList.add("mb-2");
formNom.classList.add("ps-3");
form.appendChild(formNom)

let formPrenom = document.createElement("input");
formPrenom.setAttribute("type","text");
formPrenom.setAttribute("placeholder","Prénom");
formPrenom.classList.add("required");
formPrenom.classList.add("mb-2");
formPrenom.classList.add("ps-3");
form.appendChild(formPrenom);

let formAdress = document.createElement("input");
formAdress.setAttribute("type","text");
formAdress.setAttribute("placeholder","N° et Rue");
formAdress.classList.add("required");
formAdress.classList.add("mb-2");
formAdress.classList.add("ps-3");
form.appendChild(formAdress);

let formZipCode = document.createElement("input");
formZipCode.setAttribute("type","text");
formZipCode.setAttribute("placeholder","Code Postal");
formZipCode.classList.add("required");
formZipCode.classList.add("mb-2");
formZipCode.classList.add("ps-3");
form.appendChild(formZipCode);

let formCity = document.createElement("input");
formCity.setAttribute("type","text");
formCity.setAttribute("placeholder","Ville");
formCity.classList.add("required");
formCity.classList.add("mb-2");
formCity.classList.add("ps-3");
form.appendChild(formCity);

let formEmail = document.createElement("input");
formEmail.setAttribute("type","email");
formEmail.setAttribute("placeholder","Email");
formEmail.classList.add("required");
formEmail.classList.add("mb-5");
formEmail.classList.add("ps-3");
form.appendChild(formEmail);

// LocalStorage ---------------------------------

let emailString = JSON.stringify(formEmail);
localStorage.setItem('userEmail',emailString);
console.log(emailString);
