var a=+prompt("Enter your 1st subject ");
var b=+prompt("Enter your 2nd subject ");
var c=+prompt("Enter your 3rd subject ");
var d=+prompt("Enter your 4th subject ");
var e=+prompt("Enter your 5th subject ");
document.write("1st Subject number "+a)
document.write("</br>2nd Subject number "+b)
document.write("</br>3rd Subject number "+c)
document.write("</br>4th Subject number "+d)
document.write("</br>5th Subject number "+e)
var f=a+b+c+d+e;
document.write("</br> Total Number is "+f)
if(f>=350){
    document.write("</br>Your grade is A </br>")
}
if(f>=250 && f<=350){
    document.write("</br>Your grade is B")
}
if(f>=150 && f<=250){
    document.write("</br>Your grade is C")
}
if(f<=100){
    document.write("</br>Your grade is F")
}