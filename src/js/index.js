import { activeTabFunction, setHeaderLocation, themeAndTemperatureSwitch, updateHeader } from "./header";
import { forecastData, locationData } from "./dataStorage";

window.addEventListener('load',  async () => {
  locationData.checkLocation();
  let data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=3eb2423f34a24d7fbdd190934242601&q=${locationData.locationName()}&days=3&aqi=yes&alerts=no`, {mode: 'cors'});
  let convertedData = await data.json();
  forecastData.setForecast(convertedData);
  updateHeader();
  activeTabFunction("today");
  console.log(forecastData.getForecast());
});

document.querySelector('#search-location').addEventListener('keypress', (event) => {
  const inputField = document.querySelector('#search-location');
  if (event.key === 'Enter') {
    if (inputField.value === '') {
      alert('You can\'t enter empty field');
      inputField.value = '';
    } else {
      locationData.setLocationName(inputField.value);
      setHeaderLocation(inputField.value);
      inputField.value = '';
    }
  }
});

document
  .querySelector("#header-content-right-wrapper")
  .addEventListener("click", (event) => {
    themeAndTemperatureSwitch(event.target.id);
  });

document
  .querySelector("#navbar-content-wrapper")
  .addEventListener("click", (event) => {
    activeTabFunction(event.target.id);
  });

