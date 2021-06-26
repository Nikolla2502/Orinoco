// Recupurer parametre GET id_teddy
let idTeddy = '5be9c8541c9d440000665243';

let containerTeddy = document.getElementById("card-body");

fetch('http://localhost:3000/api/teddies/' + idTeddy)
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
    colorSelectText.innerHTML = "Choisissez votre couleur :";
    divContainer.appendChild(colorSelectText);

    let colorSelect = document.createElement("select");
    colorSelect.classList.add("w-100")
    divContainer.appendChild(colorSelect);

    let optionSelect = document.createElement("option");
    optionSelect.innerHTML = "Choisissez votre couleur :";
    colorSelect.appendChild(optionSelect);


    
    for(let i=0; i < teddies.colors.length; i++){
        let colorTeddy = document.createElement("option");
        colorTeddy.innerHTML = teddies.colors[i];
        colorTeddy.classList.add("option");
        colorSelect.appendChild(colorTeddy);
        }


;


    let priceTeddy = document.createElement("h4");
    priceTeddy.classList.add("card-price");
    priceTeddy.innerHTML = (teddies.price / 100) + " €";
    divContainer.appendChild(priceTeddy);
});

