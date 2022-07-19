const reset=document.getElementById('reset');
const btns=document.querySelectorAll('.btn');
const player=document.getElementById('player');
const computer=document.getElementById('computer');
const scores=document.getElementById('scores');
const scoreCard=document.getElementById('scoreCard');
const scoreDisplay=document.getElementById('scoreDisplay')
const compOptions=['rock','paper','scissors'];
let score=0;
let res=0;

//On clicking the buttons 
//1) get the value of the button
//2)get choice of computer 
//3)give score accordingly
//4)calculate the total score
//5)display the results
btns.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        let value=e.currentTarget.value;
        let computerSelection=getComputersChoice(compOptions);
        getResult(value,computerSelection);
        score+=res;
        showResults(res,value,computerSelection,score)        
    })
})

//resets the score to 0
reset.addEventListener('click',()=>{
    score=0;
    player.innerText='';
    computer.innerText='';
    scores.innerText='';
    scoreCard.style.display='none';
})


//Random choice is picked up from the compOptions array
function getComputersChoice(options){
    indexNum=Math.floor(Math.random()*compOptions.length);
    return options[indexNum]
}


// This function will get the players choice and computers choice 
//and set the results according to the conditions it match
function getResult(playerChoice,computerChoice){
    if(playerChoice=='rock' && computerChoice=='paper' ){
        res=-1
    }else if(playerChoice=='rock' && computerChoice=='scissors'){
        res=1
    }else if(playerChoice=='paper' && computerChoice=='scissors'){
        res=-1
    }else if(playerChoice=='paper' && computerChoice=='rock'){
        res=1
    }else if(playerChoice=='scissors' && computerChoice=='paper'){
        res=1
    }else if(playerChoice=='scissors' && computerChoice=='rock'){
        res=-1
    }else{
        res=0
    }
}


//It takes the score players choice and computers choice 
//as well as the result to display it on the screen
function showResults(score,playerChoice,computerChoice,count){
    scoreCard.style.display='flex'
    player.innerText=playerChoice.toUpperCase();
    computer.innerText=computerChoice.toUpperCase();
    if(score==-1){
        scores.innerHTML=`${count}<p> You Lose<p>`;
    }else if(score==1){
        scores.innerHTML=`${count}<p> You win<p>`;
    }else{
        scores.innerHTML=`${count}<p> Draw <p>`;
    }

}

