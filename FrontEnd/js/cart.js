
// panier
let itemName = document.getElementById('itemName');
itemName.innerHTML = localStorage.getItem('teddy.name');

let itemColor = document.getElementById('itemColor');
itemColor.innerHTML = localStorage.getItem('colorTeddy');


let unitPrice = document.getElementById('unitPrice');
unitPrice.innerHTML = localStorage.getItem('priceTeddy');


if (cart == null) {
    alert('Votre panier est vide')
}



// formulaire client
let formValidation = document.getElementById('cartValidation');

formValidation.onclick = function (event){
    let hasError = false;

    let name = document.getElementById('name');
    let nameString = name.value;
    if (nameString == 0) {
        hasError = true;
        alert('Veuillez renseigner votre Nom !!');
        event.preventDefault();
        } else {
        localStorage.setItem('userName',nameString);
        }

    let firstName = document.getElementById('firstname');
    let firstNameString = firstName.value;
    if (firstNameString == 0) {
        hasError = true;
        alert('Veuillez renseigner votre Prenom !!');
        event.preventDefault();
        } else {
        localStorage.setItem('userFirstName',firstNameString);
        }
    
    let streetNumber = document.getElementById('streetnumber');
    let streetNumberString = streetNumber.value;
    if (streetNumberString == 0) {
        hasError = true;
        alert('Veuillez renseigner votre Adresse !!');
        event.preventDefault();
        } else {
        localStorage.setItem('userAdress',streetNumberString);
        }
    
    let zipCode = document.getElementById('zipcode');
    let zipCodeString = zipCode.value;
    if (zipCodeString == 0) {
        hasError = true;
        alert('Veuillez renseigner votre Code Postal !!');
        event.preventDefault();
        } else {
        localStorage.setItem('userZipCode',zipCodeString);
        }
    
    let city = document.getElementById('city');
    let cityString = city.value;
    if (cityString == 0) {
        hasError = true;
        alert('Veuillez renseigner votre Ville !!');
        event.preventDefault();
        } else {
        localStorage.setItem('userCity',cityString);
        }

    let email = document.getElementById('email');
    let emailString = email.value;
    if (emailString == 0) {
        hasError = true;
        alert('Veuillez renseigner votre Adresse Email !!');
        event.preventDefault();
        } else {
        localStorage.setItem('userEmail',emailString);
        }
    
    if (hasError) {
        event.preventDefault();
    } else {
        //ajouter client info au localStorage
    }
};






