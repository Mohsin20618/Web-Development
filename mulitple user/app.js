let alluser = []
let users = localStorage.getItem('user')
if (users !== null) {
    alluser.push(JSON.parse(users))
}
let signup = () => {
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var name = document.getElementById("name")
    let user = {
        name: name.value,
        email: email.value,
        password: password.value
    }
    alluser.push(user)
    localStorage.setItem("user", JSON.stringify(alluser))
    console.log(alluser)
}

let login = () => {
    var email = document.getElementById("email-1")
    var password = document.getElementById("password-1")

    let filterUser = alluser.filter(data=> data.email === email.value && data.password === password.value);

    if((filterUser.length)!==0){
        alert("user login succesful")
    }else{
        alert("email/password incorrect")
    }
}