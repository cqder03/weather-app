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
    const hourlyForecastArrowPara = document.createElement('p');
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
    const hourlyForecastLowerMore = document.createElement('div');
    const hourlyForecastLowerMorePressure = document.createElement('div');
    const pressurePara1 = document.createElement('p');
    const pressurePara2 = document.createElement('p');
    const hourlyForecastLowerMoreDewPoint = document.createElement('div');
    const dewPointPara1 = document.createElement('p');
    const dewPointPara2 = document.createElement('p');
    const hourlyForecastLowerMoreVisibility = document.createElement('div');
    const visibilityPara1 = document.createElement('p');
    const visibilityPara2 = document.createElement('p');
    const hourlyForecastLowerMoreCloudCover = document.createElement('div');
    const cloudCoverPara1 = document.createElement('p');
    const cloudCoverPara2 = document.createElement('p');

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
    hourlyForecastArrowPara.setAttribute('class', 'hourly-more-option');
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
    hourlyForecastLowerMore.setAttribute('class', 'hourly-forecast-lower-more hourly-forecast-lower-more-hidden');
    hourlyForecastLowerMorePressure.setAttribute('class', 'hourly-forecast-pressure');
    pressurePara2.setAttribute('class', 'hourly-forecast-pressure-text');
    hourlyForecastLowerMoreDewPoint.setAttribute('class', 'hourly-forecast-dew-point');
    dewPointPara2.setAttribute('class', 'hourly-forecast-dew-point-text');
    hourlyForecastLowerMoreVisibility.setAttribute('class', 'hourly-forecast-visibility');
    visibilityPara2.setAttribute('class', 'hourly-forecast-visibility-text');
    hourlyForecastLowerMoreCloudCover.setAttribute('class', 'hourly-forecast-cloud-cover');
    cloudCoverPara2.setAttribute('class', 'hourly-forecast-cloud-text');
    hourlyForecastArrowPara.addEventListener('click', () => {
        if (hourlyForecastArrowPara.getAttribute('class').includes('more-option-active')) {
            hourlyForecastArrowPara.classList.remove('more-option-active');
            hourlyForecastLowerMore.classList.add('hourly-forecast-lower-more-hidden');
        } else {
            hourlyForecastArrowPara.classList.add('more-option-active');
            hourlyForecastLowerMore.classList.remove('hourly-forecast-lower-more-hidden');
        }
    });


    hourlyForecastDatePara.textContent = dataPoint.date;
    hourlyForecastTimePara.textContent = dataPoint.time;
    hourlyForecastTempPara.textContent = dataPoint.temp;
    hourlyForecastUpperMiddlePara.textContent = "ReelFeel";
    hourlyForecastUpperMiddleTempPara.textContent = dataPoint.reelfeeltemp;
    hourlyForecastArrowPara.textContent = '›';
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
    pressurePara1.textContent = 'Pressure';
    pressurePara2.textContent = '1005mb';
    dewPointPara1.textContent = 'Dew point';
    dewPointPara2.textContent = '6°';
    visibilityPara1.textContent = 'Visibility';
    visibilityPara2.textContent = '10 km';
    cloudCoverPara1.textContent = 'Cloud cover';
    cloudCoverPara2.textContent = '51%';

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
    hourlyForecastUpperRight.appendChild(hourlyForecastArrowPara);
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
    hourlyForecastDiv.appendChild(hourlyForecastLowerMore);
    hourlyForecastLowerMore.appendChild(hourlyForecastLowerMorePressure);
    hourlyForecastLowerMorePressure.appendChild(pressurePara1);
    hourlyForecastLowerMorePressure.appendChild(pressurePara2);
    hourlyForecastLowerMore.appendChild(hourlyForecastLowerMoreDewPoint);
    hourlyForecastLowerMoreDewPoint.appendChild(dewPointPara1);
    hourlyForecastLowerMoreDewPoint.appendChild(dewPointPara2);
    hourlyForecastLowerMore.appendChild(hourlyForecastLowerMoreVisibility);
    hourlyForecastLowerMoreVisibility.appendChild(visibilityPara1);
    hourlyForecastLowerMoreVisibility.appendChild(visibilityPara2);
    hourlyForecastLowerMore.appendChild(hourlyForecastLowerMoreCloudCover);
    hourlyForecastLowerMoreCloudCover.appendChild(cloudCoverPara1);
    hourlyForecastLowerMoreCloudCover.appendChild(cloudCoverPara2);

    document
      .querySelector("#main-content-wrapper")
      .appendChild(hourlyForecastDiv);
  });
}

export { displayHourlyForecastDiv };
