import { forecastData } from "./dataStorage";
import { returnIconLink } from "./dataStorage";

function displayCurrentTimeForecast() {
 
  const currentForecast = document.createElement("div");
  const currentForecastUpper = document.createElement("div");
  const currentForecastUpperPara1 = document.createElement("p");
  const currentForecastUpperPara2 = document.createElement("p");
  const currentForecastLower = document.createElement("div");
  const currentForecastLowerLeft = document.createElement("div");
  const currentForecastLowerLeftLeft = document.createElement("div");
  const currentForecastIcon = document.createElement("img");
  const currentForecastLowerLeftRight = document.createElement("div");
  const currentForecastTemperaturePara = document.createElement("p");
  const currentForecastTemperatureUnit = document.createElement("span");
  const currentForecastRealFeelPara = document.createElement("p");
  const currentForecastRealFeelSpan = document.createElement("span");
  const currentForecastLowerRight = document.createElement("div");
  const currentForecastWindSpeed = document.createElement("div");
  const windSpeedPara1 = document.createElement("p");
  const windSpeedPara2 = document.createElement("p");
  const currentForecastWindGust = document.createElement("div");
  const windGustPara1 = document.createElement("p");
  const windGustPara2 = document.createElement("p");
  const currentForecastAirQuality = document.createElement("div");
  const airQualityPara1 = document.createElement("p");
  const airQualityPara2 = document.createElement("p");

  currentForecastUpperPara1.textContent = "CURRENT TIME";
  currentForecastUpperPara2.textContent = forecastData.getForecast().location.localtime.slice(-5);
  currentForecastRealFeelPara.textContent = "RealFeel";
  windSpeedPara1.textContent = "Wind";
  windGustPara1.textContent = "Wind gust";
  airQualityPara1.textContent = "Air quality";
  airQualityPara2.textContent = "Poor"; 

  if (forecastData.getUnit() ==='c') {
    let temp = forecastData.getForecast().current.temp_c.toString();
      if (temp.slice(0, 2).startsWith('-0')) {
        currentForecastTemperaturePara.textContent = temp.slice(0, -2).replace('-', '') + '°';
      }
      else if (temp.includes('.')) {
        currentForecastTemperaturePara.textContent = temp.slice(0, -2) + '°';
      } else {
        currentForecastTemperaturePara.textContent = temp + '°';
      }
    currentForecastTemperatureUnit.textContent = 'c'
    let temp2 = forecastData.getForecast().current.feelslike_c.toString();
    if (temp2.slice(0, 2).startsWith('-0')) {
      currentForecastRealFeelSpan.textContent = temp2.slice(0, -2).replace('-', '') + '°';
    }
    else if (temp2.includes('.')) {
      currentForecastRealFeelSpan.textContent = temp2.slice(0, -2) + '°';
    } else {
      currentForecastRealFeelSpan.textContent = temp2 + '°';
    }
    if (forecastData.getForecast().current.wind_kph.toString().includes('.')) {
    windSpeedPara2.textContent = `${forecastData.getForecast().current.wind_dir} ${forecastData.getForecast().current.wind_kph.toString().slice(0, -2)} km/h`;
    } else {
      windSpeedPara2.textContent = `${forecastData.getForecast().current.wind_dir} ${forecastData.getForecast().current.wind_kph.toString()} km/h`;
    }
    if (forecastData.getForecast().current.gust_kph.toString().includes('.')) {
      windGustPara2.textContent = `${forecastData.getForecast().current.gust_kph.toString().slice(0, -2)} km/h`;
      } else {
      windGustPara2.textContent = `${forecastData.getForecast().current.gust_kph.toString().slice(0, -2)} km/h`;
      }
  } else if (forecastData.getUnit === 'f') {
    let temp = forecastData.getForecast().current.temp_f.toString();
    if (temp.slice(0, 2).startsWith('-0')) {
      currentForecastTemperaturePara.textContent = temp.slice(0, -2).replace('-', '') + '°';
    }
    else if (temp.includes('.')) {
      currentForecastTemperaturePara.textContent = temp.slice(0, -2) + '°';
    } else {
      currentForecastTemperaturePara.textContent = temp + '°';
    }
  currentForecastTemperatureUnit.textContent = 'f'
  let temp2 = forecastData.getForecast().current.feelslike_f.toString();
  if (temp2.slice(0, 2).startsWith('-0')) {
    currentForecastRealFeelSpan.textContent = temp2.slice(0, -2).replace('-', '') + '°';
  }
  else if (temp2.includes('.')) {
    currentForecastRealFeelSpan.textContent = temp2.slice(0, -2) + '°';
  } else {
    currentForecastRealFeelSpan.textContent = temp2 + '°';
  }
  if (forecastData.getForecast().current.wind_mph.toString().includes('.')) {
  windSpeedPara2.textContent = `${forecastData.getForecast().current.wind_dir} ${forecastData.getForecast().current.wind_mph.toString().slice(0, -2)} km/h`;
  } else {
    windSpeedPara2.textContent = `${forecastData.getForecast().current.wind_dir} ${forecastData.getForecast().current.wind_mph.toString()} km/h`;
  }
  if (forecastData.getForecast().current.gust_mph.toString().includes('.')) {
    windGustPara2.textContent = `${forecastData.getForecast().current.gust_mph.toString().slice(0, -2)} mp/h`;
    } else {
    windGustPara2.textContent = `${forecastData.getForecast().current.gust_mph.toString().slice(0, -2)} mp/h`;
    }
  }

  currentForecast.setAttribute("id", "current-forecast");
  currentForecastUpper.setAttribute("id", "current-forecast-upper");
  currentForecastUpperPara2.setAttribute("id", "current-time-text");
  currentForecastLower.setAttribute("id", "current-forecast-lower");
  currentForecastLowerLeft.setAttribute("id", "current-forecast-lower-left");
  currentForecastLowerLeftLeft.setAttribute(
    "id",
    "current-forecast-lower-left-left"
  );
  currentForecastLowerLeftRight.setAttribute(
    "id",
    "current-forecast-lower-left-right"
  );
  currentForecastTemperaturePara.setAttribute(
    "id",
    "current-forecast-temperature-text"
  );
  currentForecastTemperatureUnit.setAttribute(
    "id",
    "current-forecast-temperature-unit"
  );
  currentForecastRealFeelPara.setAttribute(
    "id",
    "current-forecast-real-feel-text"
  );
  currentForecastRealFeelSpan.setAttribute("id", "real-feel-span");
  currentForecastLowerRight.setAttribute("id", "current-forecast-lower-right");
  currentForecastWindSpeed.setAttribute("id", "wind-speed-n-direction");
  currentForecastWindGust.setAttribute("id", "wind-gust");
  currentForecastAirQuality.setAttribute("id", "air-quality");
  currentForecastIcon.setAttribute(
    "src",
    "./assets/icons/weather-icons/template.png"
  );
  currentForecastIcon.setAttribute("alt", "current weather icon");

  currentForecast.appendChild(currentForecastUpper);
  currentForecast.appendChild(currentForecastLower);
  currentForecastUpper.appendChild(currentForecastUpperPara1);
  currentForecastUpper.appendChild(currentForecastUpperPara2);
  currentForecastLower.appendChild(currentForecastLowerLeft);
  currentForecastLower.appendChild(currentForecastLowerRight);
  currentForecastLowerLeft.appendChild(currentForecastLowerLeftLeft);
  currentForecastLowerLeft.appendChild(currentForecastLowerLeftRight);
  currentForecastLowerLeftLeft.appendChild(currentForecastIcon);
  currentForecastLowerLeftRight.appendChild(currentForecastTemperaturePara);
  currentForecastLowerLeftRight.appendChild(currentForecastTemperaturePara);
  currentForecastLowerLeftRight.appendChild(currentForecastRealFeelPara);
  currentForecastTemperaturePara.appendChild(currentForecastTemperatureUnit);
  currentForecastRealFeelPara.appendChild(currentForecastRealFeelSpan);
  currentForecastLowerRight.appendChild(currentForecastWindSpeed);
  currentForecastLowerRight.appendChild(currentForecastWindGust);
  currentForecastLowerRight.appendChild(currentForecastAirQuality);
  currentForecastWindSpeed.appendChild(windSpeedPara1);
  currentForecastWindSpeed.appendChild(windSpeedPara2);
  currentForecastWindGust.appendChild(windGustPara1);
  currentForecastWindGust.appendChild(windGustPara2);
  currentForecastAirQuality.appendChild(airQualityPara1);
  currentForecastAirQuality.appendChild(airQualityPara2);
  document.querySelector("#main-content-wrapper").appendChild(currentForecast);
}

function displayHourlyForecast() {
  const hourlyForecast = document.createElement("div");
  const hourlyForecastUpper = document.createElement("div");
  const hourlyForecastUpperPara = document.createElement("p");
  const hourlyForecastLower = document.createElement("div");
  const hourlyForecastButtonLeft = document.createElement("div");
  const hourlyForecastCardWrapper = document.createElement("div");
  const hourlyForecastButtonRight = document.createElement("div");

  hourlyForecast.setAttribute("id", "hourly-forecast");
  hourlyForecastUpper.setAttribute("id", "hourly-forecast-upper");
  hourlyForecastLower.setAttribute("id", "hourly-forecast-lower");
  hourlyForecastButtonLeft.setAttribute("id", "hourly-forecast-left-button");
  hourlyForecastButtonLeft.setAttribute("class", "hourly-forecast-button");
  hourlyForecastCardWrapper.setAttribute("id", "hourly-forecast-card-wrapper");
  hourlyForecastButtonRight.setAttribute("id", "hourly-forecast-right-button");
  hourlyForecastButtonRight.setAttribute("class", "hourly-forecast-button");

  hourlyForecastUpperPara.textContent = "HOURLY FORECAST";
  hourlyForecastButtonLeft.textContent = "‹";
  hourlyForecastButtonRight.textContent = "›";
  const currentHourly = forecastData.getForecast().forecast.forecastday[0].hour;
  let hours = forecastData.getForecast().location.localtime.slice(-5, -3).toString();
  
  for (let i = hours-- ; i < 24; i++) {
    let currentHour = currentHourly[i];
    const hourlyForecastCard = document.createElement("div");
    const timePara = document.createElement("p");
    const cardIcon = document.createElement("img");
    const tempPara = document.createElement("p");
    const precipitationChance = document.createElement("div");
    const precipitationIcon = document.createElement("img");
    const precipitationPara = document.createElement("p");

    hourlyForecastCard.setAttribute("class", "hourly-forecast-card");
    timePara.setAttribute("class", "time-text");
    cardIcon.setAttribute(
      "src", `${returnIconLink(currentHour.condition.icon)}`);
    cardIcon.setAttribute("alt", "current weather icon");
    tempPara.setAttribute("class", "temperature-text");
    precipitationChance.setAttribute("class", "precipitation-chance");
    precipitationIcon.setAttribute(
      "src",
      "./assets/icons/precipitation_icon.png"
    );
    precipitationIcon.setAttribute("alt", "rain drop icon");
    precipitationPara.setAttribute("class", "precipitation-chance-text");

    timePara.textContent = currentHour.time.slice(-6, -3);
    precipitationPara.textContent = currentHour.will_it_rain + '%';  
    
    if (forecastData.getUnit() ==='c') {
      let temp = currentHour.temp_c.toString()
      if (temp.slice(0, 2).startsWith('-0')) {
        tempPara.textContent = temp.slice(0, -2).replace('-', '');
      }
      else if (temp.includes('.')) {
        tempPara.textContent = temp.slice(0, -2);
      } else {
        tempPara.textContent = temp;
      }
    } else if (forecastData.getUnit === 'f') {
      let temp = currentHour.temp_f.toString()
      if (temp.slice(0, 2).startsWith('-0')) {
        tempPara.textContent = temp.slice(0, -2).replace('-', '');
      }
      else if (temp.includes('.')) {
        tempPara.textContent = temp.slice(0, -2);
      } else {
        tempPara.textContent = temp;
      }
    }

    hourlyForecastCard.appendChild(timePara);
    hourlyForecastCard.appendChild(cardIcon);
    hourlyForecastCard.appendChild(tempPara);
    hourlyForecastCard.appendChild(precipitationChance);
    precipitationChance.appendChild(precipitationIcon);
    precipitationChance.appendChild(precipitationPara);
    hourlyForecastCardWrapper.append(hourlyForecastCard);
  }

  hourlyForecast.appendChild(hourlyForecastUpper);
  hourlyForecast.appendChild(hourlyForecastLower);
  hourlyForecastUpper.append(hourlyForecastUpperPara);
  hourlyForecastLower.appendChild(hourlyForecastButtonLeft);
  hourlyForecastLower.appendChild(hourlyForecastCardWrapper);
  hourlyForecastLower.appendChild(hourlyForecastButtonRight);
  document.querySelector("#main-content-wrapper").appendChild(hourlyForecast);

  document
  .querySelector("#hourly-forecast-lower")
  .addEventListener("click", (event) => {
    const eventId = event.target.id;
    const forecastCardWrapper = document.querySelector(
      "#hourly-forecast-card-wrapper"
    );

    switch (eventId) {
      case "hourly-forecast-left-button":
        forecastCardWrapper.scrollLeft -= 62.25;
        break;
      case "hourly-forecast-right-button":
        forecastCardWrapper.scrollLeft += 62.25;
    }
  });
}

export { displayCurrentTimeForecast, displayHourlyForecast };
