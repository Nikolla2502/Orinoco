
// Teddies -------------------------------------------------------

let containerTeddy = document.getElementById("item_container");

fetch('http://localhost:3000/api/teddies')
.then(response => response.json())
.then(teddies => {
    
    for(let i = 0; i < teddies.length; i++){


    
        
        let divContainer = document.createElement("div");
        divContainer.classList.add("bordure");
        divContainer.classList.add("col-lg-5");
        divContainer.classList.add("m-2");
        containerTeddy.appendChild(divContainer);



        
        let linkTeddy = document.createElement("a");
        linkTeddy.classList.add("stretched-link");
        linkTeddy.href = "order.html?id_teddy="+teddies[i]._id;
        divContainer.appendChild(linkTeddy);

        
        let nameTeddy = document.createElement("h2");
        nameTeddy.classList.add("card-name");
        nameTeddy.innerHTML = teddies[i].name;
        divContainer.appendChild(nameTeddy);
       

        
        let imgTeddy = document.createElement("img");
        imgTeddy.classList.add("card-img");
        imgTeddy.setAttribute('src', teddies[i].imageUrl);
        divContainer.appendChild(imgTeddy);

        let colorTeddy = document.createElement("h3");
        colorTeddy.classList.add('color-teddy');
        colorTeddy.classList.add('m-3');
        colorTeddy.innerHTML = "Couleurs Disponibles : <br>" + teddies[i].colors;
        divContainer.appendChild(colorTeddy);

        let priceTeddy = document.createElement("h4");
        priceTeddy.classList.add("card-price");
        priceTeddy.innerHTML = (teddies[i].price / 100) + " €";
        divContainer.appendChild(priceTeddy);
        
    }
})


// Cameras ----------------------------------------------------------------

let containerCamera = document.getElementById("item_container");


fetch('http://localhost:3000/api/cameras')
.then(response => response.json())
.then(cameras => {
    
    for(let i = 0; i < cameras.length; i++){
        
        

        let divContainerCamera = document.createElement("div");
        divContainerCamera.classList.add("bordure");
        divContainerCamera.classList.add("col-lg-5");
        divContainerCamera.classList.add("m-2");
        
        item_container.appendChild(divContainerCamera);

        
        let linkCamera = document.createElement("a");
        linkCamera.classList.add("stretched-link");
        linkCamera.href = "order.html?id_camera="+cameras[i]._id;
        divContainerCamera.appendChild(linkCamera);

        
        let nameCamera = document.createElement("h2");
        nameCamera.classList.add("card-name");
        nameCamera.innerHTML = cameras[i].name;
        divContainerCamera.appendChild(nameCamera);
       

        
        let imgCamera = document.createElement("img");
        imgCamera.classList.add("card-img");
        imgCamera.setAttribute('src', cameras[i].imageUrl);
        divContainerCamera.appendChild(imgCamera);

        let lensesCamera = document.createElement("h3");        
        lensesCamera.classList.add('lenses-camera');
        lensesCamera.classList.add('m-3');
        lensesCamera.innerHTML = "Focales Disponibles : <br>" + cameras[i].lenses;
        divContainerCamera.appendChild(lensesCamera);

        let priceCamera = document.createElement("h4");
        priceCamera.classList.add("card-price");
        priceCamera.innerHTML = (cameras[i].price / 100) + " €";
        divContainerCamera.appendChild(priceCamera);
        
    }
})

// Furnitures -------------------------------------------------------

let containerFurniture = document.getElementById("item_container");

fetch('http://localhost:3000/api/furniture')
.then(response => response.json())
.then(furnitures => {
    
    for(let i = 0; i < furnitures.length; i++){

        
        let divContainer = document.createElement("div");
        divContainer.classList.add("bordure");
        divContainer.classList.add("col-lg-5");
        divContainer.classList.add("m-2");
        containerFurniture.appendChild(divContainer);



        
        let linkFurniture = document.createElement("a");
        linkFurniture.classList.add("stretched-link");
        linkFurniture.href = "order.html?id_furniture="+furnitures[i]._id;
        divContainer.appendChild(linkFurniture);

        
        let nameFurniture = document.createElement("h2");
        nameFurniture.classList.add("card-name");
        nameFurniture.innerHTML = furnitures[i].name;
        divContainer.appendChild(nameFurniture);
       

        
        let imgFurniture = document.createElement("img");
        imgFurniture.classList.add("card-img");
        imgFurniture.setAttribute('src', furnitures[i].imageUrl);
        divContainer.appendChild(imgFurniture);

        let colorFurniture = document.createElement("h3");
        colorFurniture.classList.add('varnish-furniture');
        colorFurniture.classList.add('m-3');
        colorFurniture.innerHTML = "Vernis Disponibles : <br>" + furnitures[i].varnish;
        divContainer.appendChild(colorFurniture);

        let priceFurniture = document.createElement("h4");
        priceFurniture.classList.add("card-price");
        priceFurniture.innerHTML = (furnitures[i].price / 100) + " €";
        divContainer.appendChild(priceFurniture);
        
    }
})
.catch(error => console.log(error));