function bulb(){
    var on=document.getElementById('b')

    if(on.src.match("2.jpg")){
        on.src="1.jpg"
        
    }
    else{
        on.src="2.jpg"
        
    }
  
}
