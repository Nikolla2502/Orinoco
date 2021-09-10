// function addColumnToRow(text, row) 
// {
//     let nameTeddy = document.createElement("td");//renommer correctement les variables ;)
//     nameTeddy.classList.add("text-center");
//     nameTeddy.classList.add("border");
//     nameTeddy.classList.add("border-dark");
//     nameTeddy.innerHTML = cart[i].name;//changer avec le parametre ;)
//     rowTeddy.appendChild(nameTeddy);
// }


let cart = getCart();
let productIds = [];

let calculatedPrice = 0;
let cartTeddy = document.getElementById("cartTeddy");

for (let i=0; i < cart.length; i++){
    productIds.push(cart[i].id);
    localStorage.setItem('idTeddy',productIds);



    document.getElementById('cartContent').style.display = "contents";
    document.getElementById('cartError').style.display = "none";
    
    
    let rowTeddy = document.createElement("tr");
    cartTeddy.appendChild(rowTeddy);
    
    //addColumnToRow(cart[i].name, rowTeddy);
    
    let nameTeddy = document.createElement("td");
    nameTeddy.classList.add("text-center");
    nameTeddy.classList.add("border");
    nameTeddy.classList.add("border-dark");
    nameTeddy.innerHTML = cart[i].name;
    rowTeddy.appendChild(nameTeddy);
    
    let colorTeddy = document.createElement("td");
    colorTeddy.classList.add("text-center");
    colorTeddy.classList.add("border");
    colorTeddy.classList.add("border-dark");
    colorTeddy.innerHTML = cart[i].color;
    rowTeddy.appendChild(colorTeddy);
    
    let priceTeddy = document.createElement("td");
    priceTeddy.classList.add("text-center");
    priceTeddy.classList.add("border");
    priceTeddy.classList.add("border-dark");
    priceTeddy.innerHTML = cart[i].price/100 + " €";
    rowTeddy.appendChild(priceTeddy);
    
    /** calculer prix total */
    calculatedPrice += Number(cart[i].price);
}

document.getElementById('totalPrice').innerHTML = calculatedPrice/100 + " €" ;

localStorage.setItem('calculatedPrice',calculatedPrice);





function isTextInputValid(inputElement, regexp, startMessage)
{
    let hasError = false;
// test si vide
// message d'erreur si vide : startMessage + ' ne doit pas être vide'
//tester si  conforme
// message d'erreur si non conforme : startMessage + ' n\'est pas conforme'
// ne pas oublier de passer hasError à true si une erreur est détectée
// utiliser la propriete  nextElementSibling pour retrouver la div du message d'erreur
    return hasError;
}

// formulaire client
let formValidation = document.getElementById('cartValidation');
formValidation.onclick = function (event){
   
    let hasError = false;
    
    let name = document.getElementById('name');
    let nameString = name.value;
    let nameRegexp = /[a-zA-Zàâäéèêëïîôöùûüç' \-]/;
    if (nameString == 0) {
        hasError = true;
        document.getElementById('nameError').style = "display = contents";
    }
    else if (!nameRegexp.test(nameString)){
        hasError = true;
        document.getElementById('nameFalse').style = "display = contents";
    }
    
    let firstName = document.getElementById('firstName');
    let firstNameString = firstName.value;
    let firstNameRegexp = /[a-zA-Zàâäéèêëïîôöùûüç' \-]/;
    if (firstNameString == 0) {
        hasError = true;
        document.getElementById('firstNameError').style = "display = contents";
    } 
    else if (!firstNameRegexp.test(firstNameString)){
        hasError = true;
        document.getElementById('firstNameFalse').style = "display = contents";
    }
    
    
    let addressNumber = document.getElementById('addressnumber');
    let addressNumberString = addressNumber.value;
    let addressNumberRegexp = /^([0-9]{1,3}(([,. ]?){1}[a-zA-Zàâäéèêëïîôöùûüç' \-]+))$/;
    if (addressNumberString == 0) {
        hasError = true;
        document.getElementById('addressError').style = "display = contents";
    } 
    else if (!addressNumberRegexp.test(addressNumberString)){
        hasError = true;
        document.getElementById('addressFalse').style = "display = contents";
    }
    
    let zipCode = document.getElementById('zipcode');
    let zipCodeString = zipCode.value;
    let zipCodeRegexp = /[0-9]{5}/;
    if (zipCodeString == 0) {
        hasError = true;
        document.getElementById('zipcodeError').style.display = null;
    } 
    else if (!zipCodeRegexp.test(zipCodeString)) {
        hasError = true;
        document.getElementById('zipCodeFalse').style = "display = contents";
    }
    
    let city = document.getElementById('city');
    let cityString = city.value;
    let cityRegexp = /[a-zA-Zàâäéèêëïîôöùûüç' \-]/;
    if (cityString == 0) {
        hasError = true;
        document.getElementById('cityError').style = "display = contents";
    }
    else if (!cityRegexp.test(cityString)) {
        hasError = true;
        document.getElementById('cityFalse').style = "display = contents";
    }
    
    let email = document.getElementById('email');
    let emailString = email.value;
    let emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailString == 0) {
        hasError = true;
        document.getElementById('emailError').style = "display = contents";
    }
    else if (!emailRegexp.test(emailString)) {
        hasError = true;
        document.getElementById('emailFalse').style = "display = contents";
    }
    //##########Function Regex ###################################
    // if (
    //     isTextInputValid('name', nameRegexp, 'Le champs Nom')
    //     && isTextInputValid(firstName, firstNameRegexp, 'Le champs Prénom')
    //     && isTextInputValid('streetNumber', streetNumberRegexp, 'Le champs N° et Rue')
    //     && isTextInputValid('zipCode', zipCodeRegexp, 'Le champs Code Postal')
    //     && isTextInputValid('city', cityRegexp, 'Le champs Ville')
    //     && isTextInputValid('email', emailRegexp, 'Le champs Email')
    // ) {

    // }
    // else if (isTextInputValid('name', nameRegexp, 'Le champs Nom') == false) {
    //     document.getElementById('nameFalse').style = "display = contents";
    // }
    //##########Function Regex ###################################
    if (hasError) {
        event.preventDefault();
        
    } else {
        let order = {
            contact : {
                firstName: firstNameString,
                lastName: nameString,
                address: addressNumberString,
                zipCode:zipCodeString,
                city: cityString,
                email: emailString
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
        })
        .catch(error => console.log(error));
    }
};


// #################  Redirection    ##################//

// let emptyCart = document.getElementById('cartValidation');
// emptyCart.onclick = function (event) {
//     event.preventDefault();
//     location.href="index.html"; // Methode 1
//     // location.replace("index.html") // Methode 2 (pas de retour à la page precedente possible)(remplace le href du html)
// };