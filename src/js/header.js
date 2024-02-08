import { displayAirQuality, displayAirQualityMore } from "./air-quality";
import {
  displayCurrentTimeForecast,
  displayHourlyForecast,
} from "./current-forecast";
import { displayDailyForecastDiv } from "./daily-forecast";
import { forecastData, locationData, returnIconLink } from "./dataStorage";
import { displayHourlyForecastDiv } from "./hourly-forecast";

function activeTabFunction(id) {
  const listOfTabs = document.querySelectorAll("#navbar-content-wrapper > *");

  listOfTabs.forEach((tab) => tab.classList.remove("active-tab"));

  switch (id) {
    case "today":
      document.querySelector(`#${id}`).classList.add("active-tab");
      clearMainContent();
      displayCurrentTimeForecast();
      displayHourlyForecast();
      break;
    case "hourly":
      document.querySelector(`#${id}`).classList.add("active-tab");
      clearMainContent();
      displayHourlyForecastDiv();
      break;
    case "daily":
      document.querySelector(`#${id}`).classList.add("active-tab");
      clearMainContent();
      displayDailyForecastDiv();
      break;
    case "air-quality":
      document.querySelector(`#${id}`).classList.add("active-tab");
      clearMainContent();
      displayAirQuality();
      displayAirQualityMore();
      break;
  }
}

function themeAndTemperatureSwitch(id) {
  switch (id) {
    case "theme-toggle":
    case "theme-toggle-icon":
      const themeIconSelector = document.querySelector("#theme-toggle > img");
      const themeIconSelectorClass = themeIconSelector.getAttribute("class");

      if (themeIconSelectorClass === "light-theme") {
        themeIconSelector.setAttribute("class", "dark-theme");
        themeIconSelector.setAttribute(
          "src",
          "./assets/icons/theme-icons/dark.png"
        );
        
        document.body.setAttribute("class", "dark");
      } else {
        themeIconSelector.setAttribute("class", "light-theme");
        themeIconSelector.setAttribute(
          "src",
          "./assets/icons/theme-icons/light.png"
        );
        document.body.setAttribute("class", "light");
      }
      break;
    case "temperature-unit-toggle":
    case "temperature-unit-icon":
      const temperatureUnitIconSelector = document.querySelector(
        "#temperature-unit-toggle > *"
      );
      const temperatureUnitIconSelectorClass =
        temperatureUnitIconSelector.getAttribute("class");

      if (temperatureUnitIconSelectorClass === "celcius-unit") {
        temperatureUnitIconSelector.setAttribute("class", "fahrenheit-unit");
        temperatureUnitIconSelector.setAttribute(
          "src",
          "./assets/icons/temperature-units-icons/fehrenheit-icon.png"
        );
        forecastData.setUnit('f');
      } else {
        temperatureUnitIconSelector.setAttribute("class", "celcius-unit");
        temperatureUnitIconSelector.setAttribute(
          "src",
          "./assets/icons/temperature-units-icons/celcius-icon.png"
          );
          forecastData.setUnit('c');
        }
        updateHeader();
        break;
  }
}

function updateHeader() {
  const temperatureSelector = document.querySelector('#location-holder-temperature');
  const temperatureUnitSelector = document.querySelector('#header-temperature-type');
  const iconSelecor = document.querySelector("#location-holder > img");

  setHeaderLocation(`${forecastData.getForecast().location.name}, ${forecastData.getForecast().location.country}`);

  if (forecastData.getUnit() === 'c') {
    temperatureSelector.textContent = `${forecastData.getForecast().current.temp_c}°`;
    temperatureUnitSelector.textContent = 'c';
  } else if (forecastData.getUnit() === 'f') {
    temperatureSelector.textContent = `${forecastData.getForecast().current.temp_f}°`;
    temperatureUnitSelector.textContent = 'f';
  }

  iconSelecor.setAttribute('src' , `${returnIconLink(forecastData.getForecast().current.condition.icon)}`);
}

function setHeaderLocation(name) {
  const locationSelector = document.querySelector('#location-holder-text');
  locationSelector.textContent = name;
}

function clearMainContent() {
  const mainContentChildren = document.querySelectorAll(
    "#main-content-wrapper > *"
  );

  mainContentChildren.forEach((child) =>
    document.querySelector("#main-content-wrapper").removeChild(child)
  );
}

export { themeAndTemperatureSwitch, activeTabFunction, setHeaderLocation, updateHeader };
