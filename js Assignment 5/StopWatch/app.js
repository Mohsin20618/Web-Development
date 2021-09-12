
var min = 0
var sec = 0
var mili = 0
var m = document.getElementById('min')
var s = document.getElementById('sec')
var ms = document.getElementById('mili')
var inter;
var z = document.getElementById('star')


function start() {

  z.disabled = true;



  inter = setInterval(function () {
    mili++


    ms.innerHTML = mili
    if (mili == 100) {
      sec++
      s.innerHTML = sec
      mili = 0
    }
    if (sec == 60) {
      min++
      m.innerHTML = min
      sec = 0
    }
  
  }, 100)

}
function pause() {
  clearInterval(inter)
  z.disabled = false;
}
function reset() {
  clearInterval(inter)
  min = 0
  sec = 0
  mili = 0
  m.innerHTML=min
  s.innerHTML=sec
  ms.innerHTML=mili
  z.disabled = false;
}

