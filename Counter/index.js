const increaseButton=document.querySelector('.increase');
const resetButton=document.querySelector('.reset');
const decreaseButton=document.querySelector('.decrease');
const count=document.querySelector('.count');
let total=0;


increaseButton.addEventListener('click',function(){
    total=total+1;
    count.textContent=total;
});
decreaseButton.addEventListener('click',function(){
    total=total-1;
    count.textContent=total;
});
resetButton.addEventListener('click',function(){
    total=0;
    count.textContent=total;  
});