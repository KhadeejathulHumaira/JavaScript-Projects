const buttons=document.querySelectorAll('.btn');
const count=document.querySelector('.count');
let total=0;


buttons.forEach(btn=>{
    btn.addEventListener('click',function(e){
        const styles=e.currentTarget.classList;
        if(styles.contains('increase')){
            total++;
        }
        else if(styles.contains('decrease')){
            total--;
        }
        else{
            total=0;
        }
        if(total>0){
            count.style.color="green";
        }
        else if(total<0){
            count.style.color="red";
        }
        else{
            count.style.color="rgb(239, 231, 222)";
        }
        count.textContent=total;
    });
});






//This is what happening in the above code.
// const increaseButton=document.querySelector('.increase');
// const resetButton=document.querySelector('.reset');
// const decreaseButton=document.querySelector('.decrease');
// increaseButton.addEventListener('click',function(){
//     total=total+1;
//     if(total>0){
//         count.style.color="green";
//     }
//     count.textContent=total;
// });
// decreaseButton.addEventListener('click',function(){
//     total=total-1;
//     if(total<0){
//         count.style.color="red";
//     }
//     count.textContent=total;
// });
// resetButton.addEventListener('click',function(){
//     total=0;
//     if(total==0){
//         count.style.color="rgb(239, 231, 222)";
//     }
//     count.textContent=total;  
// });