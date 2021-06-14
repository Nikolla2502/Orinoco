const listTeddies = document.querySelector(".btnProduct");
const cardProduct = document.querySelector(".cardProduct");


listTeddies.addEventListener('click',() => {
fetch("http://localhost:3000/api/teddies")
.then(teddies => teddies.json())
.then(listTeddies => {

  for(let i = 0; i < listTeddies.length; i++){
      displayTeddy(teddy)
      console.log(teddy);
      
        function displayTeddy(teddy){
          document.getElementById("teddies_container").innerHTML  `
          <h2 class="card-header my-3 text-center" id="productName">
          ${teddy.name}
                </h2>
                <div class="card-body">
                    <img class="img-fluid imgProduct" id="productImg">
                <h4 class="card-text text-center m-5">
                </h4>
                <h4 class="card-price text-end" id="productPrice">
                ${teddy.price}
                </h4>
                </div>
          
          `
        }
      }
})
});




