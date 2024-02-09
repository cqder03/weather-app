import { forecastData } from "./dataStorage";
function displayDailyForecastDiv() {
  let forecastDays = forecastData.getForecast().forecast.forecastday;
  forecastDays.forEach((day) => {
    const date = day.date.slice(-2) + '.' + day.date.slice(-5, -3) + '.'
    const weekDay = dayOfTheWeek(new Date(day.date).getDay(), 'part');
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
    const dailyPrecipitationIcon = document.createElement("img");
    const dailyPrecipitationPara = document.createElement("p");
    const dailyForecastMiddle = document.createElement("div");
    const dailyForecastCondition = document.createElement("p");
    const dailyForecastLower = document.createElement("div");
    const dailyForecastRealFeel = document.createElement("div");
    const realFeelPara1 = document.createElement("p");
    const humidityPara = document.createElement("p");
    const dailyForecastUvIndex = document.createElement("div");
    const uvIndexPara1 = document.createElement("p");
    const uvIndexPara2 = document.createElement("p");
    const dailyForecastWind = document.createElement("div");
    const windPara1 = document.createElement("p");
    const windPara2 = document.createElement("p");
    const dailyForecastVisibility = document.createElement("div");
    const visibilityPara1 = document.createElement("p");
    const visibilityPara2 = document.createElement("p");

    dailyForecastDay.textContent = weekDay;
    dailyForecastDate.textContent = date;
    dailyForecastCondition.textContent = "Mostly cloudy and not as cold";
    realFeelPara1.textContent = "RealFeel";
    uvIndexPara1.textContent = "UV Index";
    windPara1.textContent = "Max Wind Speed";
    visibilityPara1.textContent = "Visibility";
    dailyPrecipitationPara.textContent = day.day.daily_chance_of_rain + '%';
    humidityPara.textContent = day.day.avghumidity + '%';
    uvIndexPara2.textContent = day.day.uv;
    
    if (forecastData.getUnit() === 'c') {
      let maxTemp = day.day.maxtemp_c.toString();
      if (maxTemp.slice(0, 2).startsWith('-0')) {
        dailyForecastMaxTemp.textContent = maxTemp.slice(0, -2).replace('-', '') + '°';
      }
      else if (maxTemp.includes('.')) {
        dailyForecastMaxTemp.textContent = maxTemp.slice(0, -2) + '°';
      } else {
        dailyForecastMaxTemp.textContent = maxTemp + '°';
      }
      let minTemp = day.day.mintemp_c.toString();
      if (minTemp.slice(0, 2).startsWith('-0')) {
        dailyForecastMinTemp.textContent = "/" + minTemp.slice(0, -2).replace('-', '') + '°';
      }
      else if (minTemp.includes('.')) {
        dailyForecastMinTemp.textContent = "/" + minTemp.slice(0, -2) + '°';
      } else {
        dailyForecastMinTemp.textContent = "/" + minTemp + '°';
      }
      if (day.day.maxwind_kph.toString().includes('.')) {
      windPara2.textContent = `${day.day.maxwind_kph.toString().slice(0, -2)} km/h`;
      } else {
        windPara2.textContent = `${day.day.maxwind_kph} km/h`;
      }
      visibilityPara2.textContent = day.day.avgvis_km + 'km';
    } else if (forecastData.getUnit() === 'f') {
      let maxTemp = day.day.maxtemp_f.toString();
      if (maxTemp.slice(0, 2).startsWith('-0')) {
        dailyForecastMaxTemp.textContent = maxTemp.slice(0, -2).replace('-', '') + '°';
      }
      else if (maxTemp.includes('.')) {
        dailyForecastMaxTemp.textContent = maxTemp.slice(0, -2) + '°';
      } else {
        dailyForecastMaxTemp.textContent = maxTemp + '°';
      }
      let minTemp = day.day.mintemp_f.toString();
      if (minTemp.slice(0, 2).startsWith('-0')) {
        dailyForecastMinTemp.textContent = "/" + minTemp.slice(0, -2).replace('-', '') + '°';
      }
      else if (minTemp.includes('.')) {
        dailyForecastMinTemp.textContent = "/" + minTemp.slice(0, -2) + '°';
      } else {
        dailyForecastMinTemp.textContent = "/" + minTemp + '°';
      }
      if (day.day.maxwind_mph.toString().includes('.')) {
      windPara2.textContent = `${day.day.maxwind_mph.toString().slice(0, -2)} mp/h`;
      } else {
        windPara2.textContent = `${day.day.maxwind_mph} mp/h`;
      }
      visibilityPara2.textContent = day.day.avgvis_miles + 'miles';
    }

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
    dailyForecastUpperRight.setAttribute("class", "daily-forecast-card-upper-right");
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
    humidityPara.setAttribute("class", "daily-forecast-text");
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
    dailyForecastRealFeel.appendChild(humidityPara);
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
  })

  
}

function dayOfTheWeek(num, part) {
  switch(num) {
    case 0:
      if (part === 'part')   {
        return 'SUN';
      } else if (part === 'full') {
        return 'SUNDAY';
      }
      break;
    case 1:
      if (part === 'part')   {
        return 'MON';
      } else if (part === 'full') {
        return 'MONDAY';
      }
      break;
    case 2:
      if (part === 'part')   {
        return 'TUE';
      } else if (part === 'full') {
        return 'TUESDAY';
      }
      break;
    case 3:
      if (part === 'part')   {
        return 'WED';
      } else if (part === 'full') {
        return 'WEDNESDAY';
      }
      break;
    case 4:
      if (part === 'part')   {
        return 'THU';
      } else if (part === 'full') {
        return 'THURDSAY';
      }
      break;
    case 5:
      if (part === 'part')   {
        return 'FRI';
      } else if (part === 'full') {
        return 'FRIDAY';
      }
      break;
    case 6:
      if (part === 'part')   {
        return 'SAT';
      } else if (part === 'full') {
      return 'SATURDAY'
      }
      break;
  }
}

export { displayDailyForecastDiv, dayOfTheWeek };
