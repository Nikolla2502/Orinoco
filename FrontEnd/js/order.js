// localStorage.clear();
console.log(typeof localStorage.cart);
// choix du teddy -------------------

let containerTeddy = document.getElementById("card-body");

let choosenTeddy = new URLSearchParams (document.location.href.split('?')[1]);
let teddyId = choosenTeddy.get("id_teddy");

fetch('http://localhost:3000/api/teddies/' + teddyId)
.then(response => response.json())
.then(teddy => {
    
    localStorage.setItem('currentTeddy', JSON.stringify(teddy));

    let divContainer = document.createElement("div");
    divContainer.classList.add("col-lg-8");
    divContainer.classList.add("mx-auto");
    containerTeddy.appendChild(divContainer);

    let nameTeddy = document.createElement("h2");
    nameTeddy.id = ("card-name");
    nameTeddy.innerHTML = teddy.name;
    divContainer.appendChild(nameTeddy);
  

    let imgTeddy = document.createElement("img");
    imgTeddy.classList.add("card-img");
    imgTeddy.setAttribute('src', teddy.imageUrl);
    divContainer.appendChild(imgTeddy);
    
    let colorSelectText = document.createElement("h5");
    colorSelectText.classList.add("colorSelectText")
    colorSelectText.innerHTML = "Choisissez votre couleur :";
    divContainer.appendChild(colorSelectText);

    let colorSelect = document.createElement("select");
    colorSelect.classList.add("w-100");
    colorSelect.id = ("selectColor");
    divContainer.appendChild(colorSelect);

    let optionSelect = document.createElement("option");
    optionSelect.innerHTML = "Choisissez votre couleur :";
    optionSelect.setAttribute('value', 0 );
    colorSelect.appendChild(optionSelect);

    for (let i=0; i < teddy.colors.length; i++) {
        let colorTeddy = document.createElement("option");
        colorTeddy.innerHTML = teddy.colors[i];
        colorTeddy.classList.add("option");
        colorTeddy.classList.add("optionColor");
        colorSelect.appendChild(colorTeddy);
    }

    let priceTeddy = document.createElement("h4");
    priceTeddy.id = ("card-price");
    priceTeddy.classList.add("text-end");
    priceTeddy.innerHTML = (teddy.price / 100) + " €";
    divContainer.appendChild(priceTeddy);


});



// let addToCart = document.getElementById('addToCart');

document.getElementById('addToCart').addEventListener('click', function () {
    colorTeddy = document.querySelector('select').value;
    
    let colorTeddyAlert;

    if (colorTeddy == 0) {
        colorTeddyAlert = document.querySelector('.colorSelectText');
        colorTeddyAlert.style="color:red;font-weight:bold;";
        colorTeddyAlert.innerText = 'Vous devez choisir une couleur !!';
        return;
    }
    else {
      
        
    }

    nameTeddy = document.getElementById('card-name').innerHTML;
    priceTeddy = document.getElementById('card-price').innerHTML;
    
    

    let currentTeddy = JSON.parse(localStorage.currentTeddy);
    
    let teddy = {
        id : teddyId,
        name: currentTeddy.name,
        color :colorTeddy,
        price : priceTeddy
        
    };

    let cart = typeof localStorage.cart != 'undefined' ? JSON.parse(localStorage.cart) : [];
    cart.push(teddy);

    localStorage.setItem('cart', JSON.stringify(cart));
    
    console.log(cart);

    // alerte panier vide
    // document.getElementById("cart");
    if (cart != 'undefined'){

        alert("Votre panier est vide")
    }

    // let cart = localStorage.cart;

    // if (cart !== null){
    //     // parser la variable cart pour convertir la chaine de caractere en tableau d'objet
    //     cart.push(product);
    //     localStorage.cart = JSON.stringify(cart);
       
    // } else {
    //     localStorage.cart = [product];
    //     localStorage.setItem('cart', JSON.stringify([product]));
     
    // }
// if (cart contient qqchose) {
    //     ajouter teddy au tableau cart : localStorage.cart.push(teddy);
    // } else {
    //     localStorage.cart = [teddy];
    //     localStorage.setItem('cart', [teddy]);
    // }
});

    // let selectColor = document.getElementById('selectColor');
    // selectColor.addEventListener('change', function() {
    // console.log(selectColor);
    // });


