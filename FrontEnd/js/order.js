// var request = new XMLHttpRequest();
// request.onreadystatechange = function() {
// if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
// var response = JSON.parse(this.responseText);
// console.log(this.description);
// }
// };
// request.open("GET", "http://localhost:3000/api/teddies");
// request.send();

fetch("http://localhost:3000/api/teddies")
.then(data => data.json())
.then(jsonListTeddies => {
 console.log(jsonListTeddies);
});
class Teddies{
    constructor(name,image,color,price){
        this.name = name;
        this.image = image;
        this.color = color;
        this.price = price;
        
    }
}
