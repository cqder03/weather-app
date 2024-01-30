const templateData = [
  {
    date: "31.1.",
    time: "00:00",
    temp: "-2°",
    reelfeeltemp: "-5°",
    wind: "WNW 15km/h",
    windGust: "30km/h",
    airQuality: "Fine",
    humidity: "77%",
  },
  {
    date: "31.1.",
    time: "01:00",
    temp: "-2°",
    reelfeeltemp: "-4°",
    wind: "SSW 8km/h",
    windGust: "27km/h",
    airQuality: "Fine",
    humidity: "82%",
  },
  {
    date: "31.1.",
    time: "02:00",
    temp: "-1°",
    reelfeeltemp: "-2°",
    wind: "SSW 8km/h",
    windGust: "23km/h",
    airQuality: "Fine",
    humidity: "82%",
  },
  {
    date: "31.1.",
    time: "03:00",
    temp: "1°",
    reelfeeltemp: "0°",
    wind: "SW 5km/h",
    windGust: "20km/h",
    airQuality: "Fine",
    humidity: "80%",
  },
  {
    date: "31.1.",
    time: "04:00",
    temp: "3°",
    reelfeeltemp: "0",
    wind: "SSW 5km/h",
    windGust: "18km/h",
    airQuality: "Poor",
    humidity: "76%",
  },
  {
    date: "31.1.",
    time: "05:00",
    temp: "4°",
    reelfeeltemp: "2",
    wind: "SW 5km/h",
    windGust: "12km/h",
    airQuality: "Poor",
    humidity: "77%",
  },
];

function displayHourlyForecastDiv() {
  templateData.forEach((dataPoint) => {
    const hourlyForecastDiv = document.createElement("div");
    const hourlyForecastUpper = document.createElement("div");
    const hourlyForecastUpperLeft = document.createElement("div");
    const hourlyForecastUpperLeftDate = document.createElement("div");
    const hourlyForecastDatePara = document.createElement("p");
    const hourlyForecastTimePara = document.createElement("p");
    const hourlyForecastUpperLeftIcon = document.createElement("img");
    const hourlyForecastTempPara = document.createElement("p");
    const hourlyForecastUpperMiddle = document.createElement("div");
    const hourlyForecastUpperMiddlePara = document.createElement("p");
    const hourlyForecastUpperMiddleTempPara = document.createElement("p1");
    const hourlyForecastUpperRight = document.createElement("div");
    const hourlyForecastUpperRightIcon = document.createElement("img");
    const hourlyForecastPrecipitationPara = document.createElement("p");
    const hourlyForecastMiddle = document.createElement("div");
    const hourlyForecastMiddlePara = document.createElement("p");
    const hourlyForecastLower = document.createElement("div");
    const hourlyForecastLowerWindSpeed = document.createElement("div");
    const windSpeedPara1 = document.createElement("p");
    const windSpeedPara2 = document.createElement("p");
    const hourlyForecastLowerWindGust = document.createElement("div");
    const windGustPara1 = document.createElement("p");
    const windGustPara2 = document.createElement("p");
    const hourlyForecastLowerAirQuality = document.createElement("div");
    const airQualityPara1 = document.createElement("p");
    const airQualityPara2 = document.createElement("p");
    const hourlyForecastLowerHumidity = document.createElement("div");
    const humidityPara1 = document.createElement("p");
    const humidityPara2 = document.createElement("p");

    hourlyForecastDiv.setAttribute("class", "hourly-forecast-div");
    hourlyForecastUpper.setAttribute("class", "hourly-forecast-upper");
    hourlyForecastUpperLeft.setAttribute("class", "hourly-forecast-upper-left");
    hourlyForecastUpperLeftDate.setAttribute(
      "class",
      "hourly-forecast-upper-left-date"
    );
    hourlyForecastDatePara.setAttribute("class", "hourly-forecast-date");
    hourlyForecastTimePara.setAttribute("class", "hourly-forecast-time");
    hourlyForecastUpperLeftIcon.setAttribute(
      "src",
      "../src/assets/icons/weather-icons/template.png"
    );
    hourlyForecastUpperLeftIcon.setAttribute("alt", "weather icon");
    hourlyForecastTempPara.setAttribute("class", "hourly-forecast-temp");
    hourlyForecastUpperMiddle.setAttribute(
      "class",
      "hourly-forecast-upper-middle"
    );
    hourlyForecastUpperMiddleTempPara.setAttribute(
      "class",
      "hourly-forecast-real-feel-temp"
    );
    hourlyForecastUpperRight.setAttribute(
      "class",
      "hourly-forecast-upper-right"
    );
    hourlyForecastUpperRightIcon.setAttribute(
      "src",
      "../src/assets/icons/precipitation_icon.png"
    );
    hourlyForecastUpperRightIcon.setAttribute("alt", "water drop icon");
    hourlyForecastPrecipitationPara.setAttribute(
      "class",
      "precipitation-chance-text"
    );
    hourlyForecastMiddle.setAttribute("class", "hourly-forecast-middle");
    hourlyForecastMiddlePara.setAttribute("class", "hourly-condition");
    hourlyForecastLower.setAttribute("class", "hourly-forecast-lower");
    hourlyForecastLowerWindSpeed.setAttribute("class", "hourly-wind-speed");
    windSpeedPara2.setAttribute("class", "hourly-wind-speed-test");
    hourlyForecastLowerWindGust.setAttribute("class", "hourly-wind-gust");
    windGustPara2.setAttribute("class", "hourly-wind-gust-text");
    hourlyForecastLowerAirQuality.setAttribute("class", "hourly-air-quality");
    airQualityPara2.setAttribute("class", "hourly-air-quality-text");
    hourlyForecastLowerHumidity.setAttribute("class", "hourly-humidity");
    humidityPara2.setAttribute("class", "hourly-humidity-text");

    hourlyForecastDatePara.textContent = dataPoint.date;
    hourlyForecastTimePara.textContent = dataPoint.time;
    hourlyForecastTempPara.textContent = dataPoint.temp;
    hourlyForecastUpperMiddlePara.textContent = "ReelFeel";
    hourlyForecastUpperMiddleTempPara.textContent = dataPoint.reelfeeltemp;
    hourlyForecastPrecipitationPara.textContent = "0%";
    hourlyForecastMiddlePara.textContent = "Overcast";
    windSpeedPara1.textContent = "Wind";
    windSpeedPara2.textContent = dataPoint.wind;
    windGustPara1.textContent = "Wind gust";
    windGustPara2.textContent = dataPoint.windGust;
    airQualityPara1.textContent = "Air quality";
    airQualityPara2.textContent = dataPoint.airQuality;
    humidityPara1.textContent = "Humidity";
    humidityPara2.textContent = dataPoint.humidity;

    hourlyForecastDiv.appendChild(hourlyForecastUpper);
    hourlyForecastUpper.appendChild(hourlyForecastUpperLeft);
    hourlyForecastUpperLeft.appendChild(hourlyForecastUpperLeftDate);
    hourlyForecastUpperLeftDate.appendChild(hourlyForecastDatePara);
    hourlyForecastUpperLeftDate.appendChild(hourlyForecastTimePara);
    hourlyForecastUpperLeft.appendChild(hourlyForecastUpperLeftIcon);
    hourlyForecastUpperLeft.appendChild(hourlyForecastTempPara);
    hourlyForecastUpper.appendChild(hourlyForecastUpperMiddle);
    hourlyForecastUpperMiddle.appendChild(hourlyForecastUpperMiddlePara);
    hourlyForecastUpperMiddle.appendChild(hourlyForecastUpperMiddleTempPara);
    hourlyForecastUpper.appendChild(hourlyForecastUpperRight);
    hourlyForecastUpperRight.appendChild(hourlyForecastUpperRightIcon);
    hourlyForecastUpperRight.appendChild(hourlyForecastPrecipitationPara);
    hourlyForecastDiv.appendChild(hourlyForecastMiddle);
    hourlyForecastMiddle.appendChild(hourlyForecastMiddlePara);
    hourlyForecastDiv.appendChild(hourlyForecastLower);
    hourlyForecastLower.appendChild(hourlyForecastLowerWindSpeed);
    hourlyForecastLowerWindSpeed.appendChild(windSpeedPara1);
    hourlyForecastLowerWindSpeed.appendChild(windSpeedPara2);
    hourlyForecastLower.appendChild(hourlyForecastLowerWindGust);
    hourlyForecastLowerWindGust.appendChild(windGustPara1);
    hourlyForecastLowerWindGust.appendChild(windGustPara2);
    hourlyForecastLower.appendChild(hourlyForecastLowerAirQuality);
    hourlyForecastLowerAirQuality.appendChild(airQualityPara1);
    hourlyForecastLowerAirQuality.appendChild(airQualityPara2);
    hourlyForecastLower.appendChild(hourlyForecastLowerHumidity);
    hourlyForecastLowerHumidity.appendChild(humidityPara1);
    hourlyForecastLowerHumidity.appendChild(humidityPara2);
    document
      .querySelector("#main-content-wrapper")
      .appendChild(hourlyForecastDiv);
  });
}

export { displayHourlyForecastDiv };
