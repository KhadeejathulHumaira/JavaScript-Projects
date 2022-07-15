const billAmount=document.getElementById('billInput');
const buttons=document.querySelectorAll('.btns');
const peopleCount=document.getElementById('peopleCount');
const tipPerHead=document.getElementById('tipPerPerson');
const totalPerHead=document.getElementById('totPerPerson');
const reset=document.querySelector('.reset_button');
const customTip=document.getElementById('tips_percentage');

// Variables Used
let bill=0;
let tipPercentage=0;
let noOfPerson=0;
let tipAmount=0;
let tipPerPerson=0;
let totalPerPerson=0;

// To calculate the bill amount 
function calculateBill(bill, tip, people) {
  tipAmount = bill * tip;
  tipPerPerson = tipAmount / people;
  totalPerPerson = (bill + tipAmount) / people;
  tipPerHead.innerText = tipPerPerson.toFixed(2);
  totalPerHead.innerText = totalPerPerson.toFixed(2);
}

// This will get the value which is entered in the bill field
billAmount.addEventListener("keyup", function (e) {
  bill = Number(e.currentTarget.value);
});

// Query selector all is used to get all btns at one shot. 
buttons.forEach((btn) => {
  ["click", "keyup"].forEach((evt) => {
    btn.addEventListener(
      evt,
      function (e) {
        const tip = Number(e.currentTarget.value);
        tipPercentage = tip / 100;
      },
      false
    );
  });
});

peopleCount.addEventListener("keyup", function (e) {
  noOfPerson = Number(e.currentTarget.value);
  const error = document.querySelector(".ppl_error");
  if (noOfPerson == 0) {
    error.style.display = "block";
    error.style.color = "red";
    return;
  }
  if (noOfPerson !== 0) {
    error.style.display = "none";
  }
  calculateBill(bill, tipPercentage, noOfPerson);
});


reset.addEventListener("click", function () {
  if (Number(customTip.value) != 0) {
    customTip.value = 0;
  }
  bill = 0;
  tipPercentage = 0;
  noOfPerson = 0;
  tipAmount = 0;
  tipPerPerson = 0;
  totalPerPerson = 0;
  billAmount.value = '';
  peopleCount.value = '';
  tipPerHead.innerText = "0.00";
  totalPerHead.innerText = "0.00";
});