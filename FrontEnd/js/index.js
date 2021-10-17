'strict';
let containerTeddy = document.getElementById("item_container");

fetch('http://localhost:3000/api/teddies')
.then((response) => {
    if (response.ok) {
        return response.json();
    } 

    throw Error;
})
.then(teddies => {
    for(let i = 0; i < teddies.length; i++){

        let divContainer = document.createElement("div");
        divContainer.classList.add("cardProductItem","d-flex","flex-column","justify-content-between","col-lg-3","m-2","mb-5");
        containerTeddy.appendChild(divContainer);
        
        let linkTeddy = document.createElement("a");
        linkTeddy.classList.add("stretched-link");
        linkTeddy.href = "order.html?id_teddy="+teddies[i]._id;
        divContainer.appendChild(linkTeddy);
        
        let nameTeddy = document.createElement("h2");
        nameTeddy.classList.add("card-name","bg-light","mt-3","text-center");
        nameTeddy.innerHTML = teddies[i].name;
        divContainer.appendChild(nameTeddy);
         
        let imgTeddy = document.createElement("img");
        imgTeddy.classList.add("card-img","img-fluid");
        imgTeddy.setAttribute('src', teddies[i].imageUrl);
        divContainer.appendChild(imgTeddy);

        let priceTeddy = document.createElement("h4");
        priceTeddy.classList.add("card-price","text-center");
        priceTeddy.innerHTML = (teddies[i].price / 100) + " €";
        divContainer.appendChild(priceTeddy);
    }
})

.catch(error => {
    location.href="erreur.html"; 
});

displayArticleNumber();