import { pronoun } from "./pronouns.js"
import { mudaf } from "./special-mudaf.js"
const buttons=document.querySelectorAll('.btn')
const frontPage=document.querySelectorAll('.front')
const backPage=document.querySelectorAll('.back')

const setPronoun=(choice)=>{
    let val;
    for(let i=0;i<frontPage.length;i++){
        val=getRandomProperty(choice)
        frontPage[i].innerHTML=`<h1>${val}</h1>`
        backPage[i].innerHTML=`<h1>${choice[val]}</h1>`
    }
  
}

buttons.forEach(btn=>{
    btn.addEventListener('click',e=>{
        //If the pronoun button is clicked pronoun values are shown.
        //Else Mudaf values are shown.
        btn.innerText=='Pronouns'?setPronoun(pronoun): setPronoun(mudaf);
    })
})

// The keys value from the object is collected and stored in array.
const getRandomProperty=(obj)=>{
    const keys=Object.keys(obj)
    //random key value is selected
    return keys[Math.floor(Math.random()*keys.length)]

}
 
