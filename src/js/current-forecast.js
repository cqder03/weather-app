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
  currentForecastUpperPara2.textContent =
    "99:99"; /*Need to add object var here*/
  currentForecastTemperaturePara.textContent =
    "5°"; /*Need to add object var here*/
  currentForecastTemperatureUnit.textContent =
    "c"; /*Need to add object var here*/
  currentForecastRealFeelPara.textContent = "RealFeel";
  currentForecastRealFeelSpan.textContent =
    "-1°"; /*Need to add object var here*/
  windSpeedPara1.textContent = "Wind";
  windSpeedPara2.textContent = "SW 11 km/h"; /*Need to add object var here*/
  windGustPara1.textContent = "Wind gust";
  windGustPara2.textContent = "25 km/h"; /*Need to add object var here*/
  airQualityPara1.textContent = "Air quality";
  airQualityPara2.textContent = "Poor"; /*Need to add object var here*/

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
    "../src/assets/icons/weather-icons/template.png"
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
  hourlyForecastButtonLeft.textContent = "←";
  hourlyForecastButtonRight.textContent = "→";

  const templateData = [
    {
      time: "11",
      temp: "2°",
      precipitation: "5%",
    },
    {
      time: "11",
      temp: "2°",
      precipitation: "5%",
    },
    {
      time: "11",
      temp: "2°",
      precipitation: "5%",
    },
    {
      time: "11",
      temp: "2°",
      precipitation: "5%",
    },
    {
      time: "11",
      temp: "2°",
      precipitation: "5%",
    },
    {
      time: "11",
      temp: "2°",
      precipitation: "5%",
    },
    {
      time: "11",
      temp: "2°",
      precipitation: "5%",
    },
    {
      time: "11",
      temp: "2°",
      precipitation: "5%",
    },
    {
      time: "11",
      temp: "2°",
      precipitation: "5%",
    },
    {
      time: "11",
      temp: "2°",
      precipitation: "5%",
    },
    {
      time: "11",
      temp: "2°",
      precipitation: "5%",
    },
  ];

  for (let card of templateData) {
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
      "src",
      "../src/assets/icons/weather-icons/template.png"
    );
    cardIcon.setAttribute("alt", "current weather icon");
    tempPara.setAttribute("class", "temperature-text");
    precipitationChance.setAttribute("class", "precipitation-chance");
    precipitationIcon.setAttribute(
      "src",
      "../src/assets/icons/precipitation_icon.png"
    );
    precipitationIcon.setAttribute("alt", "rain drop icon");
    precipitationPara.setAttribute("class", "precipitation-chance-text");

    timePara.textContent = card.time;
    tempPara.textContent = card.temp;
    precipitationPara.textContent = card.precipitation;

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
}

export { displayCurrentTimeForecast, displayHourlyForecast };
