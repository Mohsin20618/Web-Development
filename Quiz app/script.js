
let signup = () => {
    var name= document.getElementById('name').value
    var email = document.getElementById("email").value
    var password = document.getElementById("pass").value
    localStorage.setItem('name',name)
    localStorage.setItem('email',email)
    localStorage.setItem('password',password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((data) => {
            // Signed in 
            console.log(data)
            window.location.href = "login.html";
                // ...
        })
        .catch((error) => {

            var errorMessage = error.message;
            console.log(errorMessage)
                // ..
        })
}

let signin = () => {
    var a = document.getElementById("email").value
    var b = document.getElementById("pass").value
    

    firebase.auth().signInWithEmailAndPassword(a, b)
        .then((data) => {
            // Signed in
            console.log(data)
            window.location.href = "index.html";
                // ...
        })
        .catch((error) => {
            
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
        });

}
