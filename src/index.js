import './style.css';
import "bootstrap";
// import './scss/app.scss';
import key from './key';

const content = document.getElementById('content');


const city = "Madrid"
async function getWeather() {
  const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key.apiKey}`, {mode: 'cors'});
  const json = await url.json()
  console.log(json)
  // return json
}

getWeather()