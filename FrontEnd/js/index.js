
let container = document.getElementById("teddies_container");


fetch('http://localhost:3000/api/teddies')
.then(response => response.json())
.then(teddies => {
    
    for(let i = 0; i < teddies.length; i++){
        
        let divContainer = document.createElement("div");
        divContainer.classList.add("bordure");
        divContainer.classList.add("col-lg-5");
        divContainer.classList.add("mx-2");
        divContainer.classList.add("my-2");
        container.appendChild(divContainer);

        
        let linkTeddy = document.createElement("a");
        linkTeddy.classList.add("stretched-link");
        linkTeddy.href = "cart.html?id_teddy="+teddies[i]._id;
        divContainer.appendChild(linkTeddy);

        
        let nameTeddy = document.createElement("h2");
        nameTeddy.classList.add("card-name");
        nameTeddy.innerHTML = teddies[i].name;
        divContainer.appendChild(nameTeddy);
       

        
        let imgTeddy = document.createElement("img");
        imgTeddy.classList.add("card-img");
        imgTeddy.setAttribute('src', teddies[i].imageUrl);
        divContainer.appendChild(imgTeddy);

        
        let priceTeddy = document.createElement("h4");
        priceTeddy.classList.add("card-price");
        
        priceTeddy.innerHTML = (teddies[i].price / 100) + " €";
        
        divContainer.appendChild(priceTeddy);
        
    }
})
.catch(error => console.log(error));
