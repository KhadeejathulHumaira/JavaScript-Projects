// Import the reviews from the app.js folder
import { reviews } from "/app.js"

//select the items
const img=document.getElementById('person-img')  
const author=document.getElementById('author') 
const job=document.getElementById('job')  
const info=document.getElementById('info')  

const prevBtn=document.querySelector('.prev-btn')
const nextBtn=document.querySelector('.next-btn')
const randomBtn=document.querySelector('.random-btn')
let currItem=0

const showPerson=(person)=>{
    const item=reviews[person]
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text
}
const randomNumber=()=>Math.floor(Math.random()*reviews.length)

window.addEventListener('DOMContentLoaded',()=>{
    showPerson(currItem)
    
})

prevBtn.addEventListener('click',()=>{
    //To make sure that  the currItem value does not goes below 0
    currItem=currItem<=0?0:currItem-1;
    showPerson(currItem)
})
nextBtn.addEventListener('click',()=>{
    //To make sure that the currItem value does not goes above  the length of reviews
    currItem=currItem>=reviews.length-1?reviews.length-1:currItem+1
    showPerson(currItem)
})
randomBtn.addEventListener('click',()=>{
    showPerson(randomNumber())
})

