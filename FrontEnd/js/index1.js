// const productTeddy = document.querySelector('.btnProduct');
// console.log(productTeddy)
// productTeddy.addEventListener('click', getArticlesTeddies )

teddies()

async function  teddies(){
const articlesTeddies = await getArticlesTeddies()
    for(let i = 0; i < articlesTeddies.length; i++){
        displayTeddies(teddy);
    }

}



function getArticlesTeddies(){
    return fetch("http://localhost:3000/api/teddies")
     .then(function(httpBodyResponse){
       return httpBodyResponse.json()
     })
     .then(function(articlesTeddies){
         console.log(articlesTeddies)
        return articlesTeddies;
     })
     .catch(function(error){
         alert(error)
     })
}



function displayTeddies(){
    document.getElementById("cardProduct").innerHTML=`
    
    <h2 class="card-header my-3 text-center" id="productName">
    ${teddy[i].name}
    </h2>
    <div class="card-body">
        <img src="${articlesTeddies.imageUrl}" class="img-fluid imgProduct" id="productImg">
        
        <h4 class="card-price text-end" id="productPrice">${articleTeddies.price}</h4>
    <p><label for="couleur">Votre couleur :</label>
                            <select type="texte" placeholder="couleur" size="1">
                                <option class="item">${articlesTeddies.colors[0]}</option>
                                <option class="item">${articlesTeddies.colors[1]}</option>
                                <option class="item">${articlesTeddies.colors[2]}</option>
                                <option class="item">${articlesTeddies.colors[3]}</option>
                            </select></p>
    `
}