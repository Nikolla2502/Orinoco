let containerTeddy1 = document.getElementById("card-body_teddy")

fetch('http://localhost:3000/api/teddies')
.then(response => response.json())
.then(teddies => {
    
    // for(let i = 0; i < teddies.length; i++){

    let divContainer = document.createElement("div");
    divContainer.classList.add("bordure");
    divContainer.classList.add("col-lg-5");
    divContainer.classList.add("mx-2");
    divContainer.classList.add("my-2");
    containerTeddy1.appendChild(divContainer);

    let nameTeddy1 = document.createElement("h2");
    nameTeddy1.classList.add("card-name");
    nameTeddy1.innerHTML = teddies[0].name;
    divContainer.appendChild(nameTeddy1);

    let imgTeddy1 = document.createElement("img");
    imgTeddy1.classList.add("card-img");
    imgTeddy1.setAttribute('src', teddies[0].imageUrl);
    divContainer.appendChild(imgTeddy1);
    
    // let colorTeddy1 = document.createElement("color");
    // colorTeddy1.classList.add("option");
    // colorTeddy1.innerHTML = teddies[0].color;
    // divContainer.append(colorTeddy1)





    let priceTeddy = document.createElement("h4");
    priceTeddy.classList.add("card-price");
    priceTeddy.innerHTML = (teddies[0].price / 100) + " €";
    divContainer.appendChild(priceTeddy);
});

