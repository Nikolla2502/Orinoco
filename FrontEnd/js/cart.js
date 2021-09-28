
let cart = getCart();
let productIds = [];

let calculatedPrice = 0;
let cartTeddy = document.getElementById("cartTeddy");

function addColumnToRow(text, row) 
{
    let displayChoosenTeddy = document.createElement("td");
    displayChoosenTeddy.classList.add("text-center");
    displayChoosenTeddy.classList.add("border");
    displayChoosenTeddy.classList.add("border-dark");
    displayChoosenTeddy.innerHTML = text;
    row.appendChild(displayChoosenTeddy);
}

for (let i=0; i < cart.length; i++){
    productIds.push(cart[i].id);
    localStorage.setItem('idTeddy',productIds);

    document.getElementById('cartContent').style.display = "contents";
    document.getElementById('cartError').style.display = "none";
     
    let rowTeddy = document.createElement("tr");
    cartTeddy.appendChild(rowTeddy);
    
    addColumnToRow(cart[i].name,rowTeddy);
    addColumnToRow(cart[i].color,rowTeddy);
    addColumnToRow(cart[i].price/100 + " €",rowTeddy);
    calculatedPrice += Number(cart[i].price);
}

document.getElementById('totalPrice').innerHTML = calculatedPrice/100 + " €" ;

localStorage.setItem('calculatedPrice',calculatedPrice);

//####### Validation Formulaire #######//
function isTextInputValid(inputElement, regexp, startMessage)
{
    let hasError = false;
    if(inputElement.value == ""){
        inputElement.nextElementSibling.innerHTML = (startMessage + "ne doit pas etre vide");
        hasError = true;
    } 
    else if (!regexp.test(inputElement.value)){
        inputElement.nextElementSibling.innerHTML = (startMessage + "n'est pas conforme au format attendu");
        hasError = true;
    }
    else {
        inputElement.nextElementSibling.innerHTML = "";
    }
    return !hasError;
    
}

// formulaire client
let formValidation = document.getElementById('cartValidation');
formValidation.onclick = function (event){
    event.preventDefault();

    let name = document.getElementById('name');
    let firstName = document.getElementById('firstName');
    let addressNumber = document.getElementById('addressnumber');
    let zipCode = document.getElementById('zipcode');
    let city = document.getElementById('city');
    let email = document.getElementById('email');

    let nameRegexp = /^([a-zA-Zàâäéèêëïîôöùûüç' -])+$/;
    let firstNameRegexp = /^([a-zA-Zàâäéèêëïîôöùûüç' -])+$/;
    let addressNumberRegexp = /^([0-9]{0,}(([,. ]?){1}[a-zA-Zàâäéèêëïîôöùûüç' -]+))$/;
    let zipCodeRegexp = /^\d{5}$/;
    let cityRegexp = /[a-zA-Zàâäéèêëïîôöùûüç' -]/;
    let emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

    let isValid = isTextInputValid(name, nameRegexp, 'Le champs Nom ');
    isValid = isTextInputValid(firstName, firstNameRegexp, 'Le champs Prénom ') && isValid;
    isValid = isTextInputValid(addressNumber, addressNumberRegexp, 'Le champs N° et Rue ') && isValid;
    isValid = isTextInputValid(zipCode, zipCodeRegexp, 'Le champs Code Postal ') && isValid;
    isValid = isTextInputValid(city, cityRegexp, 'Le champs Ville ') && isValid;
    isValid = isTextInputValid(email, emailRegexp, 'Le champs Email ') && isValid;

    if (isValid) {
            let order = {
            contact : {
                firstName: firstName.value,
                lastName: name.value,
                address: addressNumber.value,
                zipCode:zipCode.value,
                city: city.value,
                email: email.value
            },
            products: productIds,
        
        };
        localStorage.setItem('contact', JSON.stringify(order.contact));

        fetch('http://localhost:3000/api/teddies/order', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        }) 
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw Error;
        })
        .then(response => {
            localStorage.setItem('contact', JSON.stringify(response.contact));
            localStorage.setItem('orderId', response.orderId);
            console.log(response);
            location.href = this.href;
            //redirection vers page de confirmation
        })
        .catch(error => {
            location.href="erreur.html"; 
        });
    }
};

