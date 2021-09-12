var allUsers =[]
let key = localStorage.getItem('key');


if (key !== null) {
    allUsers = JSON.parse(key)
}

let products = [{
    name: "zinger Burger",
    price: 1000,
    image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__340.jpg",
    category: "Fast Food"
},
{
    name: "Combo 1",
    price: 2000,
    image: "https://cdn.pixabay.com/photo/2015/12/08/00/26/food-1081707_960_720.jpg",
    category: "Fast Food"
},
{
    name: "Biryani",
    price: 500,
    image: "https://cdn.pixabay.com/photo/2019/11/04/12/16/rice-4601049_960_720.jpg",
    category: "Pakistani"
},

{
    name: "Pulao",
    price: 500,
    image: "https://cdn.pixabay.com/photo/2020/09/06/14/07/biryani-5549075_960_720.jpg",
    category: "Pakistani"
},
{
    name: "Broast",
    price: 500,
    image: "https://cdn.pixabay.com/photo/2021/04/10/03/12/broast-6165884_960_720.jpg",
    category: "Pakistani"
},

]
let main = document.getElementById('products');

for (var i = 0; i < products.length; i++) {
    main.innerHTML += `
    <div class="col">
    <div class="card" ">
    <img src="${products[i].image}" class="card-img-top" alt="...">
    <div class="card-body" >
        <h5 class="card-title" >${products[i].name}</h5>
        <p class="card-text">Category ${products[i].category} <br/> ${products[i].price} Rupees  </p>
        <p class="card-text"> </p>
        <a href="#" onclick='pend("${products[i].name}","${products[i].price}","${products[i].image}")' class="btn btn-primary" >Order</a>
    </div>
</div>
</div>
    `

}

let pend = (Name, Price, image) => {
   var key=Math.random()*2324234
   key=key.toFixed()
   var order={
       key,
       Name,
       Price,
       image
   }
    console.log(order)
    firebase.database().ref('Order/' + key).set(order)
    allUsers.push(key)
    localStorage.setItem('key', JSON.stringify(allUsers))

setInterval(() => {
    window.location.href="pending.html"   
}, 10000);

}


