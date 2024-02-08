function displayDailyForecastDiv() {
  const dailyForecast = document.createElement("div");
  const dailyForecastUpper = document.createElement("div");
  const dailyForecastUpperLeft = document.createElement("div");
  const dailyForecastDateDiv = document.createElement("div");
  const dailyForecastDay = document.createElement("p");
  const dailyForecastDate = document.createElement("p");
  const dailyForecastIcon = document.createElement("img");
  const dailyForecastCardTemp = document.createElement("div");
  const dailyForecastMaxTemp = document.createElement("p");
  const dailyForecastMinTemp = document.createElement("p");
  const dailyForecastUpperRight = document.createElement("div");
  const dailyPrecipitationIcon = document.createElement("div");
  const dailyPrecipitationPara = document.createElement("p");
  const dailyForecastMiddle = document.createElement("div");
  const dailyForecastCondition = document.createElement("p");
  const dailyForecastLower = document.createElement("div");
  const dailyForecastRealFeel = document.createElement("div");
  const realFeelPara1 = document.createElement("p");
  const realFeelPara2 = document.createElement("p");
  const dailyForecastUvIndex = document.createElement("div");
  const uvIndexPara1 = document.createElement("p");
  const uvIndexPara2 = document.createElement("p");
  const dailyForecastWind = document.createElement("div");
  const windPara1 = document.createElement("p");
  const windPara2 = document.createElement("p");
  const dailyForecastVisibility = document.createElement("div");
  const visibilityPara1 = document.createElement("p");
  const visibilityPara2 = document.createElement("p");

  dailyForecastDay.textContent = "WED";
  dailyForecastDate.textContent = "31.1.";
  dailyForecastMaxTemp.textContent = "9°";
  dailyForecastMinTemp.textContent = "/-4°";
  dailyPrecipitationPara.textContent = "0%";
  dailyForecastCondition.textContent = "Mostly cloudy and not as cold";
  realFeelPara1.textContent = "RealFeel";
  realFeelPara2.textContent = "-3°";
  uvIndexPara1.textContent = "UV Index";
  uvIndexPara2.textContent = "1";
  windPara1.textContent = "Wind";
  windPara2.textContent = "SW 11 km/h";
  visibilityPara1.textContent = "Visibility";
  visibilityPara2.textContent = "8.6 km";

  dailyForecast.setAttribute("class", "daily-forecast-card");
  dailyForecastUpper.setAttribute("class", "daily-forecast-card-upper");
  dailyForecastUpperLeft.setAttribute(
    "class",
    "daily-forecast-card-upper-left"
  );
  dailyForecastDateDiv.setAttribute("class", "daily-forecast-card-date");
  dailyForecastDay.setAttribute("class", "daily-forecast-week-day");
  dailyForecastDate.setAttribute("class", "daily-forecast-date-text");
  dailyForecastIcon.setAttribute(
    "src",
    "./assets/icons/weather-icons/template.png"
  );
  dailyForecastIcon.setAttribute("alt", "weather icon");
  dailyForecastCardTemp.setAttribute("class", "daily-forecast-card-temps");
  dailyForecastMaxTemp.setAttribute("class", "daily-forecast-max-temp");
  dailyForecastMinTemp.setAttribute("class", "daily-forecast-min-temp");
  dailyForecastUpperRight.setAttribute("class", "daily-forecast-upper-right");
  dailyPrecipitationIcon.setAttribute(
    "src",
    "./assets/icons/precipitation_icon.png"
  );
  dailyPrecipitationIcon.setAttribute("alt", "water drop icon");
  dailyPrecipitationPara.setAttribute(
    "class",
    "daily-forecast-precipitation-text"
  );
  dailyForecastMiddle.setAttribute("class", "daily-forecast-card-middle");
  dailyForecastCondition.setAttribute("class", "daily-forecast-condition");
  dailyForecastLower.setAttribute("class", "daily-forecast-card-lower");
  dailyForecastRealFeel.setAttribute("class", "daily-forecast-real-feel");
  realFeelPara2.setAttribute("class", "daily-forecast-text");
  dailyForecastUvIndex.setAttribute("class", "daily-forecast-uv-index");
  uvIndexPara2.setAttribute("class", "uv-index-text");
  dailyForecastWind.setAttribute("class", "daily-forecast-wind");
  windPara2.setAttribute("class", "daily-wind-text");
  dailyForecastVisibility.setAttribute("class", "daily-forecast-visibility");
  visibilityPara2.setAttribute("class", "visibility-text");

  dailyForecast.appendChild(dailyForecastUpper);
  dailyForecastUpper.appendChild(dailyForecastUpperLeft);
  dailyForecastUpperLeft.appendChild(dailyForecastDateDiv);
  dailyForecastDateDiv.appendChild(dailyForecastDay);
  dailyForecastDateDiv.appendChild(dailyForecastDate);
  dailyForecastUpperLeft.appendChild(dailyForecastIcon);
  dailyForecastUpperLeft.appendChild(dailyForecastCardTemp);
  dailyForecastCardTemp.appendChild(dailyForecastMaxTemp);
  dailyForecastCardTemp.appendChild(dailyForecastMinTemp);
  dailyForecastUpper.appendChild(dailyForecastUpperRight);
  dailyForecastUpperRight.appendChild(dailyPrecipitationIcon);
  dailyForecastUpperRight.appendChild(dailyPrecipitationPara);
  dailyForecast.appendChild(dailyForecastMiddle);
  dailyForecastMiddle.append(dailyForecastCondition);
  dailyForecast.appendChild(dailyForecastLower);
  dailyForecastLower.appendChild(dailyForecastRealFeel);
  dailyForecastRealFeel.appendChild(realFeelPara1);
  dailyForecastRealFeel.appendChild(realFeelPara2);
  dailyForecastLower.appendChild(dailyForecastUvIndex);
  dailyForecastUvIndex.appendChild(uvIndexPara1);
  dailyForecastUvIndex.appendChild(uvIndexPara2);
  dailyForecastLower.appendChild(dailyForecastWind);
  dailyForecastWind.appendChild(windPara1);
  dailyForecastWind.appendChild(windPara2);
  dailyForecastLower.appendChild(dailyForecastVisibility);
  dailyForecastVisibility.appendChild(visibilityPara1);
  dailyForecastVisibility.appendChild(visibilityPara2);
  document.querySelector("#main-content-wrapper").appendChild(dailyForecast);
}

export { displayDailyForecastDiv };
