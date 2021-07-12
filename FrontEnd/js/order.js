

// choix du teddy -------------------

let containerTeddy = document.getElementById("card-body");

let choosenTeddy = new URLSearchParams (document.location.href.split('?')[1]);
let url = choosenTeddy.get("id_teddy");

fetch('http://localhost:3000/api/teddies/' + url)
.then(response => response.json())
.then(teddies => {
    let divContainer = document.createElement("div");
    divContainer.classList.add("col-lg-8");
    divContainer.classList.add("mx-auto");
    containerTeddy.appendChild(divContainer);

    let nameTeddy = document.createElement("h2");
    nameTeddy.classList.add("card-name");
    nameTeddy.innerHTML = teddies.name;
    divContainer.appendChild(nameTeddy);
  

    let imgTeddy = document.createElement("img");
    imgTeddy.classList.add("card-img");
    imgTeddy.setAttribute('src', teddies.imageUrl);
    divContainer.appendChild(imgTeddy);
    
    let colorSelectText = document.createElement("h5");
    colorSelectText.classList.add("colorSelectText")
    colorSelectText.innerHTML = "Choisissez votre couleur :";
    divContainer.appendChild(colorSelectText);

    let colorSelect = document.createElement("select");
    colorSelect.classList.add("w-100");
    colorSelect.classList.add("selectColor");
    divContainer.appendChild(colorSelect);

    let optionSelect = document.createElement("option");
    optionSelect.innerHTML = "Choisissez votre couleur :";
    optionSelect.setAttribute('value', 0 );
    colorSelect.appendChild(optionSelect);

    for (let i=0; i < teddies.colors.length; i++) {
        let colorTeddy = document.createElement("option");
        colorTeddy.innerHTML = teddies.colors[i];
        colorTeddy.classList.add("option");
        colorTeddy.classList.add("optionColor");
        colorSelect.appendChild(colorTeddy);
    }

    let priceTeddy = document.createElement("h4");
    priceTeddy.classList.add("card-price");
    priceTeddy.innerHTML = (teddies.price / 100) + " €";
    divContainer.appendChild(priceTeddy);
});



let addToCart = document.getElementById('addToCart');

addToCart.addEventListener('click', function () {
    let teddy = {};
    teddy.name = document.querySelector('.card-name').innerText;
    
    teddy.color = document.querySelector('select').value;
    
    let colorTeddyAlert;

    if (teddy.color == 0) {
        colorTeddyAlert = document.querySelector('.colorSelectText');
        colorTeddyAlert.style="color:red;font-weight:bold;";
        colorTeddyAlert.innerText = 'Vous devez choisir une couleur !!';
        return;
    }
    
    else {
        let selectColor = document.querySelector('.selectColor');
        selectColor.addEventListener('change', function() {
        console.log('ok');
        });
    }

    teddy.price = document.querySelector('.card-price').innerHTML;
    
    
    let cart =[];
    cart.push(teddy.name, teddy.color, teddy.price);
    localStorage.setItem('cart',cart);
    
    // if (localStorageContientTableau) {
    //     recuperer tableau
    //     ajouter teddy au tableau
    //     reenregistrer tableau dans localStorage
    // } else {
    //     créer nouveau tableau
    //     ajouter teddy au tableau
    //     enregistrer tableau dans localStorage
    // }
});


