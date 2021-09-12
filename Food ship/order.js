let key = localStorage.getItem('key');
var allUsers = JSON.parse(key)
console.log(allUsers)

for (let i = 0; i < allUsers.length; i++) {
    var z = firebase.database().ref('Order/' +allUsers[i]).on('value', function (data) {
        var Name = data.val().Name
        var Price = data.val().Price
        var image = data.val().image
        document.getElementById('za').innerHTML +=`
        <div class="card mb-3" style="width: 50rem;">
  <img src="${image}" class="card-img-top" id="imgt" alt="...">
  <div class="card-body">
    <h5 class="card-title">${Name}</h5>
    <p class="card-text">${Price} Rupees .</p>
    <p style="color: blue;">Order Status: Pending</p>
  </div>
</div>`

    })
 
}



