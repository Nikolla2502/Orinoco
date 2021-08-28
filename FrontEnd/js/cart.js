// function addColumnToRow(text, row) 
// {
//     let nameTeddy = document.createElement("td");//renommer correctement les variables ;)
//     nameTeddy.classList.add("text-center");
//     nameTeddy.classList.add("border");
//     nameTeddy.classList.add("border-dark");
//     nameTeddy.innerHTML = cart[i].name;//changer avec le parametre ;)
//     rowTeddy.appendChild(nameTeddy);
// }

function isTextInputValid(inputElement, regexp, message)
{

    //retourner un booleen
}

let cart = getCart();
let productIds = [];

let calculatedPrice = 0;
let cartTeddy = document.getElementById("cartTeddy");

for (let i=0; i < cart.length; i++){
    //a chaque teddy, ajouter son ID dans une nouvelle ligne de l'array productIds

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
/** construire le tableau d'id teddy */
/** Fin de la boucle */
localStorage.setItem('calculatedPrice',calculatedPrice);





// formulaire client
let formValidation = document.getElementById('cartValidation');

formValidation.onclick = function (event){
    // if (
    //     isTextInputValid('name', regexpName, 'Le champs prenom')
    //     && isTextInputValid('lastname', regexpName, 'Le champs nom')
    //     && isTextInputValid('email', regexpName, 'Le champs email')
    // ) {

    // }
    // else {

    // }
    // event.preventDefault();
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


    let streetNumber = document.getElementById('streetnumber');
    let streetNumberString = streetNumber.value;
    let streetNumberRegexp = /^([0-9]{1,3}(([,. ]?){1}[a-zA-Zàâäéèêëïîôöùûüç' \-]+))$/;
    if (streetNumberString == 0) {
        hasError = true;
        document.getElementById('streetnumberError').style = "display = contents";
    } 
    else if (!streetNumberRegexp.test(streetNumberString)){
        hasError = true;
        document.getElementById('streetnumberFalse').style = "display = contents";
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
    let cityRegexp = /[a-zA-Zàâäéèêëïîôöùûüç' ]/;
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

// Post ######################################################

let order = {
    contact : {
      firstName: firstNameString,
      lastName: nameString,
      address: streetNumberString + ' ' + zipCodeString,
      city: cityString,
      email: emailString
    },
    products: productIds,
    
  };
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
        
        console.log(response);
    })
    .catch(error => console.log(error));

};
