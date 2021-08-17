


// affichage panier js

/** Recuperer le contenu du panier */
/** Debut boucle sur le contenu du panier */
/** Créer nouvelle TR */
let newTeddy =JSON.parse(localStorage.cart);

for (const teddy of newTeddy){
    
}

let calculatedPrice = 0;


for (let i=0; i < newTeddy.length; i++){

    let cartTeddy = document.getElementById("cartTeddy");



    document.getElementById('cartContent').style.display = "contents";
    document.getElementById('cartError').style.display = "none";


    let rowTeddy = document.createElement("tr");
    cartTeddy.appendChild(rowTeddy);


    let nameTeddy = document.createElement("td");
    nameTeddy.classList.add("text-center");
    nameTeddy.classList.add("border");
    nameTeddy.classList.add("border-dark");
    nameTeddy.innerHTML = newTeddy[i].name;
    rowTeddy.appendChild(nameTeddy);

    let colorTeddy = document.createElement("td");
    colorTeddy.classList.add("text-center");
    colorTeddy.classList.add("border");
    colorTeddy.classList.add("border-dark");
    colorTeddy.innerHTML = newTeddy[i].color;
    rowTeddy.appendChild(colorTeddy);

    let priceTeddy = document.createElement("td");
    priceTeddy.classList.add("text-center");
    priceTeddy.classList.add("border");
    priceTeddy.classList.add("border-dark");
    priceTeddy.innerHTML = newTeddy[i].price/100 + " €";
    rowTeddy.appendChild(priceTeddy);
    
    /** calculer prix total */
    calculatedPrice += Number(newTeddy[i].price);
}

document.getElementById('totalPrice').innerHTML = calculatedPrice/100 + " €" ;
/** construire le tableau d'id teddy */
/** Fin de la boucle */
localStorage.setItem('calculatedPrice',calculatedPrice);





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
        document.getElementById('zipcodeError').style.display = null;
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
};





