// main()

// async function  main(){
//     const articles = await getArticles()
//     for (let i = 0; i < articles.length; i++){
//         const article = articles[i];
//         displayArticle(articles)
//     }
// }

// boucle of
// async function  main(){
//     const articles = await getArticles()
//     for (article of articles){
//         displayArticle(articles)
//     }
// }

(async function() {
    const articles = await getArticles()
        for (article of articles){
            displayArticle(articles)
        }
})()

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

// function displayArticle(article){
//     document.getElementById("teddies").innerHTML=`
//     <h2 class="card-header my-3 text-center">
//                    ${article.title}
//                 </h2>
//                 <div class="card-body">
//                     <img class="img-fluid imgProduct" src="http://localhost:3000/images/teddy_1.jpg">
//                     <h4 class="card-text text-center m-5">
//                     ${article.body}
//                     </h4>
//                     <h4 class="card-price text-end">50€</h4>
//                 </div>
//     `
// }

function displayArticle(article){
    const templateElt = document.getElementById("templateArticle")
    const cloneElt = document.importNode(templateElt.content,true)
    
    cloneElt.getElementById("teddiesName").textContent = article.name
    cloneElt.getElementById("teddiesPrice").textContent = article.price
    cloneElt.getElementById("teddiesImg").textContent = article.imageUrl
    document.getElementById("teddies").appendChild(cloneElt)
}