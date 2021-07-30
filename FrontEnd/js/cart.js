
// panier
let itemName = document.getElementById('itemName');
itemName.innerHTML = localStorage.getItem('cart','nameTeddy');

let itemColor = document.getElementById('itemColor');
itemColor.innerHTML = localStorage.getItem('cart',[2]);

let unitPrice = document.getElementById('unitPrice');
unitPrice.innerHTML = localStorage.getItem('cart',[3]);

localStorage.getItem('cart');
if ('cart' == null) {
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
        document.getElementById('nameError').style = "display = contents";
    }

    let firstName = document.getElementById('firstname');
    let firstNameString = firstName.value;
    if (firstNameString == 0) {
        hasError = true;
        document.getElementById('firstnameError').style = "display = contents";
    } 

    let streetNumber = document.getElementById('streetnumber');
    let streetNumberString = streetNumber.value;
    if (streetNumberString == 0) {
        hasError = true;
        document.getElementById('streetnumberError').style = "display = contents";
    } 

    let zipCode = document.getElementById('zipcode');
    let zipCodeString = zipCode.value;
    if (zipCodeString == 0) {
        hasError = true;
        document.getElementById('zipcodeError').style = "display = contents";
    } 
    else if (isNaN(zipCodeString)) {
        hasError = true;
        document.getElementById('zipCodeFalse').style = "display = contents";
    }
 
    let city = document.getElementById('city');
    let cityString = city.value;

    if (cityString == 0) {
        hasError = true;
        document.getElementById('cityError').style = "display = contents";
    }

    let email = document.getElementById('email');
    let emailString = email.value;

    if (emailString == 0) {
        hasError = true;
        document.getElementById('emailError').style = "display = contents";
    }
    
    if (hasError) {
        event.preventDefault();
    } else {
        
        localStorage.setItem('userName',nameString);
        localStorage.setItem('userFirstName',firstNameString);
        localStorage.setItem('userAdress',streetNumberString);
        localStorage.setItem('userZipCode',zipCodeString);
        localStorage.setItem('userCity',cityString);
        localStorage.setItem('userEmail',emailString);
    }
};


// afficher panier vide


