main()

async function  main(){
    const articles = await getArticles()
    displayArticles(articles)
}


function getArticles(){
    return fetch("http://localhost:3000/api/teddies")
     .then(function(httpBodyResponse){
       return httpBodyResponse.json()
     })
     .then(function(articles){
        return articles
     })
     .catch(function(error){
         alert(error)
     })
}

function displayArticles(article){
    document.getElementById("teddies").innerHTML=`
    <h2 class="card-header my-3 text-center">
                ${article.name}
                </h2>
                <div class="card-body">
                    <img class="img-fluid imgProduct" src="https://source.unsplash.com/random/300x300">
                    <h4 class="card-text text-center m-5">
                    Des ours
                    </h4>
                    <h4 class="card-price text-end">50€</h4>
                </div>
    `
}