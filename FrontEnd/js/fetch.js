fetch("http://localhost:3000/api/teddies")
.then(data => data.json())
.then(jsonListTeddies => {
 console.log(jsonListTeddies);
});

fetch("http://localhost:3000/api/cameras")
.then(data => data.json())
.then(jsonListCameras => {
 console.log(jsonListCameras);
});

fetch("http://localhost:3000/api/furniture")
.then(data => data.json())
.then(jsonListFurniture => {
 console.log(jsonListFurniture);
});


