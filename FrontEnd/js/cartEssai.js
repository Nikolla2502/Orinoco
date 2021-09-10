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
/** construire le tableau d'id teddy */
/** Fin de la boucle */
localStorage.setItem('calculatedPrice',calculatedPrice);



//####### Validation Formulaire #######//

function isTextInputValid(inputId, regexp, startMessage)
{
    let inputElement = document.getElementById(inputId);
    console.log(inputElement);
    let hasError = false;
    // test si vide
    if(inputElement.value == ""){
    // message d'erreur si vide : startMessage + ' ne doit pas être vide'
    inputElement.nextElementSibling.innerHTML = (startMessage + "ne doit pas etre vide");
        // ne pas oublier de passer hasError à true si une erreur est détectée
        hasError = true;
    }
    //tester si  conforme
    else if (!regexp.test(inputElement.value)){
        // message d'erreur si non conforme : startMessage + ' n\'est pas conforme'
    inputElement.nextElementSibling.innerHTML = (startMessage + "n'est pas conforme au format attendu");
        // ne pas oublier de passer hasError à true si une erreur est détectée
    hasError = true;
    }

// utiliser la propriete  nextElementSibling pour retrouver la div du message d'erreur
    return hasError;
}


// formulaire client
let formValidation = document.getElementById('cartValidation');
formValidation.onclick = function (event){
    
    let name = document.getElementById('name');
    let firstName = document.getElementById('firstName');
    let addressNumber = document.getElementById('addressnumber');
    let zipCode = document.getElementById('zipcode');
    let city = document.getElementById('city');
    let email = document.getElementById('email');

    let nameRegexp = /[a-zA-Zàâäéèêëïîôöùûüç' \-]/;
    let firstNameRegexp = /[a-zA-Zàâäéèêëïîôöùûüç' \-]/;
    let addressNumberRegexp = /^([0-9]{1,3}(([,. ]?){1}[a-zA-Zàâäéèêëïîôöùûüç' \-]+))$/;
    let zipCodeRegexp = /[0-9]{5}/;
    let cityRegexp = /[a-zA-Zàâäéèêëïîôöùûüç' \-]/;
    let emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (
        isTextInputValid(name, nameRegexp, 'Le champs Nom')
        && isTextInputValid(firstName, firstNameRegexp, 'Le champs Prénom')
        && isTextInputValid(addressNumber, addressNumberRegexp, 'Le champs N° et Rue')
        && isTextInputValid(zipCode, zipCodeRegexp, 'Le champs Code Postal')
        && isTextInputValid(city, cityRegexp, 'Le champs Ville')
        && isTextInputValid(email, emailRegexp, 'Le champs Email')
    ) {
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

    if (hasError) {
        event.preventDefault();
        
    }
};

