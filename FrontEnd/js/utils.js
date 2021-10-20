// Fichier commun pour le panier

// Recuperation du panier
function getCart() {
    return typeof localStorage.cart != 'undefined' ? JSON.parse(localStorage.cart) : [];
}

// Affichage du panier
function displayArticleNumber() {
    let cart = getCart();
    if (cart.length) {
        let itemNumber = document.getElementById('cartLength');
        itemNumber.style =null;
        itemNumber.innerHTML = cart.length;
    } else {
        let itemNumber = document.getElementById('cartLength');
        itemNumber.style = "display : none;";
    }
}



