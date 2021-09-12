let signup = () => {
    var user1 = "user"
    if (document.getElementById('restaurant').checked) {
        user1 = "restaurant"
    }

    var name = document.getElementById('name1').value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var country = document.getElementById("country").value
    var city = document.getElementById("city").value
    var phone = document.getElementById("phone").value
  
    var userdata = {
        user1,
        name,
        email,
        password,
        country,
        city,
        phone

    }
    
    console.log(userdata)
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user.uid)
        user=user.uid
       
        firebase.database().ref('user/' + user).set(userdata)
        setInterval(() => {
            window.location.href="index.html" 
        }, 5000);
       
       
      })
        .catch((error) => {

            var errorMessage = error.message;
            alert(errorMessage)
            // ..
        })
}
let login = () => {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user.uid)
    user=user.uid
     firebase.database().ref('user/'+user).on('value', function (data) {
         let username=data.val().user1
         let name=data.val().name
         localStorage.setItem("name",name)
        console.log(username)
        if(username=='user'){
          
            window.location.href='home.html'
        }
        else{
         
            window.location.href='admin.html'
        }
    })

    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
    
  
    

}