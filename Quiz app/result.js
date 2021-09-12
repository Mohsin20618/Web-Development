let score = localStorage.getItem('score')
let userID = localStorage.getItem("email");
let student={
    score,
    userID,
}
let resultz = () => {
    var h = document.getElementById('rh')

    h.innerHTML = "Youre score is " +score+"%";
    firebase.database().ref("student").set(student);



}

