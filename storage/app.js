let signup = () => {
    var email = document.getElementById("email").value
    var password = document.getElementById("pass").value
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((data) => {
            // Signed in 
            console.log(data)
                // ...
        })
        .catch((error) => {

            var errorMessage = error.message;
            console.log(errorMessage)
                // ..
        })
}


let signin = () => {
    var a = document.getElementById("email-l").value
    var b = document.getElementById("pass-l").value
    if (a == localStorage.getItem('email') && b == localStorage.getItem('password')) {
        window.location.href = "./home.html"
    }

    firebase.auth().signInWithEmailAndPassword(a, b)
        .then((data) => {
            // Signed in
            console.log(data)
                // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            var uid = user.uid;
            console.log(uid)
                // ...
        } else {
            // User is signed out
            // ...
        }
    });
}