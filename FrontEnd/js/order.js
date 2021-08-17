// localStorage.clear();
console.log(typeof localStorage.cart);
// choix du teddy -------------------
displayArticleNumber();
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
    imgTeddy.classList.add("img-fluid");
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
    // optionSelect.innerHTML = "Choisissez votre couleur :";
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
    priceTeddy.classList.add("mt-3");
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

    addToCartAlert = document.querySelector('.colorSelectText').innerText = "Votre article a bien été ajouté";
     
    // alert("Votre article a bien été ajouté");
    

    let currentTeddy = JSON.parse(localStorage.currentTeddy);
    
    let teddy = {
        id : teddyId,
        name: currentTeddy.name,
        color :colorTeddy,
        price : currentTeddy.price
        
    };

    
    let cart = getCart();
    cart.push(teddy);
    localStorage.setItem('cart', JSON.stringify(cart));

    // affichage nombre items dans le cart
    displayArticleNumber();
   

});





 



