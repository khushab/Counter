
let count=0;
const increase = document.getElementById("inc")
const decrease = document.getElementById("dec")
const reset = document.getElementById("res")
const value = document.querySelector("#value");


increase.addEventListener("click", function(){
    count+=1
    value.textContent = count;
})

decrease.addEventListener("click", function(){
    count-=1
    value.textContent = count;
})
reset.addEventListener("click", function(){
    count=0
    value.textContent = count;
})