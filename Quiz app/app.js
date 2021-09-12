let percentage
let quiz = [
    {
        question: "Q1: What is the Full form of Pak",
        a: "Pakistan",
        b: "India",
        c: "Denmark",
        d: "Iceland",
        ans: "a1"
    },
    {
        question: "Q2: Who is Imran Khan?",
        a: "Home Minister",
        b: "Prime Minister",
        c: "City Chairman",
        d: "Watchman",
        ans: "a2"
    },
    {
        question: "Q3: what is tha answer of 2+2",
        a: "7",
        b: "5",
        c: "6",
        d: "4",
        ans: "a4"
    },
    {
        question: "Q4: Pakistan Natinal Language is",
        a: "English",
        b: "Urdu",
        c: "Punjabi",
        d: "Sindi",
        ans: "a2"
    },
    {
        question: "Q5: Answer of 3+3",
        a: "8",
        b: "9",
        c: "6",
        d: "5",
        ans: "a3"
    }]

let count=0;
let score=0;
let question = document.querySelector(".quest");
let op1 = document.querySelector("#op1");
let op2 = document.querySelector("#op2");
let op3 = document.querySelector("#op3");
let op4 = document.querySelector("#op4");
let sub = document.querySelector("#sub");
let answers=document.querySelectorAll(".answer");
let Loadquiz = () => {
    let qz=quiz[count];
    question.innerHTML = qz.question;
    op1.innerHTML=qz.a
    op2.innerHTML=qz.b
    op3.innerHTML=qz.c
    op4.innerHTML=qz.d
}
Loadquiz();
let getcheckans=()=>{
    let ans;
    answers.forEach((checkanswers) => {
        if(checkanswers.checked){
            ans=checkanswers.id;
        }
        
    });
    return ans
    
};
sub.addEventListener('click',()=>{
    let checkans=getcheckans();
    console.log(checkans)
    if(checkans===quiz[count].ans){
        score++
    }
    count++
    if(count<quiz.length){
        Loadquiz();
    }
  
});
var mins=document.getElementById('min')
var secs=document.getElementById('sec')
var min=0
var sec=10
function timer() {
   
    mins.innerHTML = min
    sec--
    secs.innerHTML = sec
    if(count==quiz.length || min==0  && sec==0){
        sub.click();
        percentage=(score/quiz.length)*100
        console.log(percentage)
        localStorage.setItem("score",percentage)
      
        window.location.href= "result.html";
       
    }
   else if (sec === 0) {
        min--
        sec = 60
    }
  
    // else if(min==0  && sec==0){
        
    //     percentage=(score/quiz.length)*100
    //     console.log(percentage)
    //     localStorage.setItem("score",percentage)
      
    //     window.location.href= "result.html";
       
    // }
}
setInterval(timer, 1000);