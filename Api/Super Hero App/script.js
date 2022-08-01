const ACCESS_TOKEN=183930390741698;
const BASE_URL=`https://superheroapi.com/api.php/${ACCESS_TOKEN}`
const heroDiv=document.getElementById('hero-container');
const getHero=document.getElementById('getHero');
const searchButton=document.getElementById('search')
const searchInput=document.getElementById('searchField')

function getRandomNumber(){
    return Math.floor(Math.random()*731)+1;
}

getHero.addEventListener('click',function(){
    getRandomSuperHero(getRandomNumber());
})
searchButton.addEventListener('click',()=>{
    if(isValidate(searchInput.value)){
        let value=searchInput.value.toLowerCase().split(" ");
        let newVal=value.join("-")
        getSearchedHero(newVal)
         searchInput.value=''
    }
    else{
        heroDiv.innerHTML='<h2>Enter Value</h2>'
    }
   
})
function displayHero(hero){
    heroDiv.innerHTML=
    `<img src='${hero.image.url}' width=250 height=250 alt='${hero.name}'/>
    <p class="names">${hero.name}</p>
    <div class="stats">
    <h2>Power Stats</h3>
    <p>⚔ Combat : ${hero.powerstats.combat}</p>
    <p>🏋🏼‍♂️ Durability : ${hero.powerstats.durability}</p>
    <p>🧠 Intelligence : ${hero.powerstats.intelligence}</p>
    <p>📊 Power : ${hero.powerstats.power}</p>
    <p>⚡ Speed : ${hero.powerstats.speed}</p>
    <p>💪🏼 Strength : ${hero.powerstats.strength}</p>
    </div>`
}
function errorDisplay(hero){
    heroDiv.innerHTML=
    `<img src='${hero.image.url}' width=300 height=300 alt='${hero.name}'/>
    <p class="names">${hero.name}</p>
    <h2>Sorry!!! No Powerstats Found</h2>`
}
const getRandomSuperHero=(id)=>{
    fetch(`${BASE_URL}/${id}`)
    .then(response=>response.json())
    .then(json=>{
        if(json.powerstats.combat!='null'){
            displayHero(json)
        }
        else{
           errorDisplay(json)
        }
       
    })
    .catch(err=>console.log(err))
}

const getSearchedHero=(name)=>{
    fetch(`${BASE_URL}/search/${name}`)
    .then(response=>response.json())
    .then(json=>{        
        if(json.results[0].powerstats.combat!='null'){
            displayHero(json.results[0])
        }
        else{
           errorDisplay(json.results[0])
        }
       
    })
    .catch(err=>{
        heroDiv.innerHTML='<h2>Hero Not Found</h2>'
    })
}

const isValidate=(val)=>{
    return val==0?false:true;
}