teddies()

async function  teddies(){
    const articlesTeddies = await getArticlesTeddies()
    displayArticlesTeddies(articlesTeddies)
}


function getArticlesTeddies(){
    return fetch("http://localhost:3000/api/teddies")
     .then(function(httpBodyResponse){
       return httpBodyResponse.json()
     })
     .then(function(articlesTeddies){
         console.log(articlesTeddies)
        return articlesTeddies
     })
     .catch(function(error){
         alert(error)
     })
}

function displayArticlesTeddies(articleTeddies){
    document.getElementById("product").innerHTML=`
    <a href="" class="stretched-link" ></a>
    <h2 class="card-header my-3 text-center" id="productName">
    ours
    </h2>
    <div class="card-body">
        <img class="img-fluid imgProduct" id="productImg">
        <h4 class="card-text text-center m-5">
    
        </h4>
        <h4 class="card-price text-end" id="productPrice"></h4>
    
    `
}