const colors=["Green","Red","Yellow","Crimson","Blue","Purple"];
const btn=document.getElementById('btn');
const color=document.querySelector('.color');

btn.addEventListener('click',function(){
    const  randomNumber=getRandNum();
    color.textContent=" "+colors[randomNumber];
    document.body.style.backgroundColor=colors[randomNumber];
})
function getRandNum(){
    return Math.floor(Math.random()*colors.length);
}