const billTotal=document.getElementById('bill_total');
const tipPercentage=document.getElementById('tips');
const peopleCount=document.getElementById('noOfPeople');
const totalPerPerson=document.getElementById('totalPerPerson');

function calculateBill(){ 
    const bill=Number(billTotal.value);
    const tipPer=Number(tipPercentage.value);
    const person=Number(peopleCount.innerText);
    const tips=(tipPer/100)*bill;
    const Total=(bill+tips)/person;
    totalPerPerson.innerHTML=Total.toFixed(2);
}

function increaseCount(){
    peopleCount.innerHTML=Number(peopleCount.innerText)+1;
    calculateBill()// Once the count of person is increased it should calculate the bill again

}

function decreaseCount(){
    if(peopleCount.innerText<=1){ //This will not allow the person count to go below 1
        return
    }
    peopleCount.innerHTML=Number(peopleCount.innerText)-1;
    calculateBill()
    
}
