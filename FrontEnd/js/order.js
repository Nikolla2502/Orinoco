let containerTeddy = document.getElementById("card-body_teddy")

fetch('http://localhost:3000/api/teddies')
.then(response => response.json())
.then(teddies => {
    
    // for(let i = 0; i < teddies.length; i++){

    let divContainer = document.createElement("div");
    
    divContainer.classList.add("col-lg-8");
    divContainer.classList.add("mx-auto");
    
    containerTeddy.appendChild(divContainer);

    let nameTeddy = document.createElement("h2");
    nameTeddy.classList.add("card-name");
    nameTeddy.innerHTML = teddies[0].name;
    divContainer.appendChild(nameTeddy);

    let imgTeddy = document.createElement("img");
    imgTeddy.classList.add("card-img");
    imgTeddy.setAttribute('src', teddies[0].imageUrl);
    divContainer.appendChild(imgTeddy);
    
    let colorSelectText = document.createElement("h5");
    colorSelectText.innerHTML = "Choisissez votre couleur :";
    divContainer.appendChild(colorSelectText);

    let colorSelect = document.createElement("select");
    colorSelect.setAttribute("name","Choisissez votre couleur");
    divContainer.appendChild(colorSelect);

    let colorTeddy0 = document.createElement("option");
    colorTeddy0.innerHTML = teddies[0].colors[0];
    colorTeddy0.classList.add("option");
    colorSelect.appendChild(colorTeddy0);
    
    let colorTeddy1 = document.createElement("option");
    colorTeddy1.innerHTML = teddies[0].colors[1];
    colorTeddy1.classList.add("option");
    colorSelect.appendChild(colorTeddy1);

    let colorTeddy2 = document.createElement("option");
    colorTeddy2.innerHTML = teddies[0].colors[2];
    colorTeddy2.classList.add("option");
    colorSelect.appendChild(colorTeddy2);

    let colorTeddy3 = document.createElement("option");
    colorTeddy3.innerHTML = teddies[0].colors[3];
    colorTeddy3.classList.add("option");
    colorSelect.appendChild(colorTeddy3);

    let numberTeddyText = document.createElement("h5");
    numberTeddyText.innerHTML = "Quantité :";
    divContainer.appendChild(numberTeddyText);

    let numberTeddy = document.createElement("input");
    numberTeddy.setAttribute("type","number");
    numberTeddy.setAttribute("value","0");
    numberTeddy.classList.add("quantity");
    numberTeddy.classList.add("mx-5")
    divContainer.appendChild(numberTeddy);


    let priceTeddy = document.createElement("h4");
    priceTeddy.classList.add("card-price");
    priceTeddy.innerHTML = (teddies[0].price / 100) + " €";
    divContainer.appendChild(priceTeddy);
});

// fetch('http://localhost:3000/api/teddies')
// .then(color => color.json());
//    console.log(color);