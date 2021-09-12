function num(a){
 document.getElementById('screen').value+=a
}
function clr(){
  var cler= document.getElementById('screen')
    cler.value=""
}
function evali(){
    var evali= document.getElementById('screen').value
    var z=eval(evali)
    document.getElementById('screen').value=z
}