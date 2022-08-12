 
 const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
 const curr_loc=document.getElementById('curr_loc');
 const place=document.getElementById('place');
 const todayWeather=document.getElementById('todayWeather');
 const time=document.getElementById('time');
 const curr_deg=document.getElementById('curr_deg');
 const tonightWeather=document.getElementById('tonightWeather');
 const highTemp=document.getElementById('highTemp');
 const lowTemp=document.getElementById('lowTemp');
 const sunrise=document.getElementById('sunrise');
 const sunset=document.getElementById('sunset');
 const scroll=document.querySelectorAll('.cols');
 const body=document.getElementById('main');
 const search=document.getElementById('search');
 const btn=document.getElementById('btn');




const getWeather=(loc)=>{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5fc7c06904mshf389e912a726d86p12b92bjsn70b20ee46d28',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${loc}&days=2`, options)
    .then(response => response.json())
    .then(response => 
      {
        console.log(response)
        setBackground(response)
        setWeather(response)
      })
    .catch(err => console.error(err));
}





const setWeather=(res)=>{
    curr_loc.innerText = res.location.name;
    place.innerText = res.location.region + " ," + res.location.country;
    todayWeather.innerHTML =
      `<img src=${res.current.condition.icon} alt="icon">` +
      "  " +
      res.current.condition.text;
    setTime(res.location.localtime);
    curr_deg.innerHTML = res.current.temp_c + `<sup>o</sup>`;
    tonightWeather.innerText =
      res.forecast.forecastday[0].hour[19].condition.text;
    highTemp.innerText = res.forecast.forecastday[0].day.maxtemp_c;
    lowTemp.innerText = res.forecast.forecastday[0].day.mintemp_c;
    sunrise.innerText = res.forecast.forecastday[0].astro.sunrise;
    sunset.innerText = res.forecast.forecastday[0].astro.sunset;
    setHourlyWeather(res.location.localtime, res.forecast);
    // console.log(res.forecast.forecastday[0].day.maxtemp_c);
   
}

const setHourlyWeather=(value,h)=>{
    let duration=new Date(value).getHours()
    let curr_time=new Date(value).getHours()
    for(let i=0;i<5;i++){
        duration=duration+1==24?0:duration+1;
        let hr=curr_time>19&&duration<10?h.forecastday[1].hour:h.forecastday[0].hour
        // console.log(curr_time)
        scroll[i].innerHTML=
        `<img src=${hr[duration].condition.icon} alt="icon">
        <p class="hour" >${formatTime(hr[duration].time)}</p>
        <p><span>${hr[duration].temp_c}&deg;</span></p>
        `
        // console.log(duration)
        // console.log(formatTime(new Date(h[duration].time.toString())))
        // console.log(value,'value')
    }
}

   // <p>${hr[duration].condition.text}</p>


const setTime=(value)=>{
  let newValue=value.split(' ')[0]
    let newTime = new Date(newValue);
     let month = months[newTime.getMonth()];
     let dte=newValue.split('-')[2]
    // let dte = newTime.getDate()<10?'0'+newTime.getDate():newTime.getDate()
    let day = days[newTime.getDay()]
    time.innerHTML =
      formatTime(value) +
      " " +
      day +
      `<p class="date" class="date">${month + " " + dte} </p>`;
}

const formatTime=(value)=>{
  let newValue=value.split(' ')
  let timer=newValue[1].split(':')
  let sts=Number(timer[0])>=12?'PM':'AM'
  // console.log(newValue[1]+sts,'called')
  return newValue[1]+sts
}


const setBackground=(res)=>{
  let weather_condition=res.current.condition.text.toLowerCase();
  switch(weather_condition){
    case 'partly cloudy':
      body.style.backgroundImage='url(/images/partly.jpg)';
      break;
      case 'clear':
      body.style.backgroundImage='url(/images/clear.jpg)';
      break;
      case 'torrential rain shower':
      case'light rain':
      case 'rainy':
      body.style.backgroundImage='url(/images/rainy.jpg)';
      break;
      case 'sunny':
      body.style.backgroundImage='url(/images/sunny.jpg)';
      break;
  }
}






//  const formatTime=(times)=>{
//     let sts = times.getHours() >= 12 ? "PM" : "AM";
//     let minutes =
//       times.getMinutes() < 10 ? "0" + times.getMinutes() 
//       : times.getMinutes();
//       console.log(times.getHours(),'HIU')
//     return times.getMinutes() < 10
//       ? times.getHours() + ":" + minutes + "  " + sts
//       : times.getHours() + ":" + minutes + "  " + sts;
//  }



getWeather('chennai');

btn.addEventListener('click',()=>{
  search.value==""?console.log('try again'):
  console.log(search.value)
  getWeather(search.value)
  search.value=""
})





