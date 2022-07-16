let newdate=null;
let inVal='';
const start=document.getElementById('start');
const setDays=document.getElementById('days');
const setHours=document.getElementById('hours');
const setMins=document.getElementById('mins');
const setSecs=document.getElementById('seconds');
const reset=document.getElementById('reset');


function init(){
  inVal=setInterval(countDown,1000)
}
start.addEventListener('click',()=>{
  newdate=prompt('Date Plz??(1 jan 2022)');
  console.log(newdate)
  countDown(newdate);
  init();
})
reset.addEventListener('click',()=>{
  setDays.innerText='00';
  setHours.innerText='00';
  setMins.innerText='00';
  setSecs.innerText='00';
  clearInterval(inVal)
})

function countDown(date=newdate){
  const newDate=new Date(date)
  const currentDate=new Date()
  const totalSeconds=(newDate-currentDate)/1000;
  const days=Math.floor(totalSeconds/3600/24);
  const hours=Math.floor(totalSeconds/3600)%24;
  const minutes=Math.floor(totalSeconds/60)%60;
  const seconds=Math.floor(totalSeconds)%60;
  setDays.innerText=format(days);
  setHours.innerText=format(hours);
  setMins.innerText=format(minutes);
  setSecs.innerText=format(seconds);
  console.log(days,minutes,hours,seconds)
}
 function format(time){
  return time<10?`0${time}`:time;
 }




