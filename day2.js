// counter

const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");
const head = document.getElementById("head");
let count =0;

increase.onclick = function(){
    count++;
    head.textContent = count;
}
decrease.onclick = function(){
    count--;
    head.textContent = count;
}
reset.onclick = function(){
    count=0;
    head.textContent = count;
}


//random number genrator

const number = document.getElementById("number");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNumber1;
let randomNumber2;
let randomNumber3;
number.onclick = function(){
    randomNumber1 = Math.floor(Math.random() * max)+min;
    randomNumber2 = Math.floor(Math.random() * max)+min;
    randomNumber3 = Math.floor(Math.random() * max)+min;
    label1.textContent =  randomNumber1;
    label2.textContent =  randomNumber2;
    label3.textContent =  randomNumber3;

}




//if statements
 const texts = document.getElementById("texts");
 const submits = document.getElementById("submits");
 const result = document.getElementById("result");
 let age; 

 submits.onclick = function()
   {
       age = texts.Value; 
       if(age >= 18){
        result.textContent= "you are eligible for vote"
       }
       else{
        result.textContent= "you are not eligible for vote"
       } 
       
    }



