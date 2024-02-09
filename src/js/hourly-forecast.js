import { forecastData } from "./dataStorage";

function displayHourlyForecastDiv() {
  let forecastDays = forecastData.getForecast().forecast.forecastday;
  let time = forecastData.getForecast().location.localtime.slice(-5, -3);
  for (let i = 0; i < 3; i++) {
    const forecastDay = forecastDays[i];
    const dayDate = forecastDay.date.slice(-2) + '.' + forecastDay.date.slice(-5, -3) + '.';
    for (let j = 0; j < 24; j++) {
      if (i === 1 || j < time) {
        continue;
      }
      const forecastHour = forecastDay.hour[j];
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
        "./assets/icons/weather-icons/template.png"
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
        "./assets/icons/precipitation_icon.png"
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
  
  
      hourlyForecastDatePara.textContent = dayDate;
      hourlyForecastTimePara.textContent = forecastHour.time.toString().slice(-5);
      hourlyForecastUpperMiddlePara.textContent = "ReelFeel";
      hourlyForecastArrowPara.textContent = '›';
      hourlyForecastPrecipitationPara.textContent = forecastHour.will_it_rain + '%';
      hourlyForecastMiddlePara.textContent = "Overcast";
      windSpeedPara1.textContent = "Wind";
      windGustPara1.textContent = "Wind gust";
      airQualityPara1.textContent = "Air quality";
      humidityPara1.textContent = "Humidity";
      pressurePara1.textContent = 'Pressure';
      dewPointPara1.textContent = 'Dew point';
      visibilityPara1.textContent = 'Visibility';
      cloudCoverPara1.textContent = 'Cloud cover';
      cloudCoverPara2.textContent = forecastHour.cloud + '%';
      humidityPara2.textContent = forecastHour.humidity + '%';
      airQualityPara2.textContent = forecastHour.air_quality['us-epa-index'];
      
      if (forecastData.getUnit() === 'c') {
        pressurePara2.textContent = forecastHour.pressure_mb + 'mb';
        visibilityPara2.textContent = forecastHour.vis_km + ' km';
        
        let dewTemp = forecastHour.dewpoint_c.toString();
        if (dewTemp.slice(0, 2).startsWith('-0')) {
          dewPointPara2.textContent = dewTemp.slice(0, -2).replace('-', '') + '°';
        }
        else if (dewTemp.includes('.')) {
          dewPointPara2.textContent = dewTemp.slice(0, -2) + '°';
        } else {
          dewPointPara2.textContent = dewTemp + '°';
        }

        let mainTemp = forecastHour.temp_c.toString();
        if (mainTemp.slice(0, 2).startsWith('-0')) {
          hourlyForecastTempPara.textContent = mainTemp.slice(0, -2).replace('-', '') + '°';
        }
        else if (mainTemp.includes('.')) {
          hourlyForecastTempPara.textContent = mainTemp.slice(0, -2) + '°';
        } else {
          hourlyForecastTempPara.textContent = mainTemp + '°';
        }        

        let feelsTemp = forecastHour.feelslike_c.toString();
        if (feelsTemp.slice(0, 2).startsWith('-0')) {
          hourlyForecastUpperMiddleTempPara.textContent = feelsTemp.slice(0, -2).replace('-', '') + '°';
        }
        else if (feelsTemp.includes('.')) {
          hourlyForecastUpperMiddleTempPara.textContent = feelsTemp.slice(0, -2) + '°';
        } else {
          hourlyForecastUpperMiddleTempPara.textContent = feelsTemp + '°';
        }
        if (forecastHour.wind_kph.toString().includes('.')) {
          windSpeedPara2.textContent = `${forecastHour.wind_dir} ${forecastHour.wind_kph.toString().slice(0, -2)} km/h`;
          } else {
            windSpeedPara2.textContent = `${forecastHour.wind_dir} ${forecastHour.wind_kph.toString()} km/h`;
          }
        if (forecastHour.gust_kph.toString().includes('.')) {
          windGustPara2.textContent = `${forecastHour.gust_kph.toString().slice(0, -2)} km/h`;
          } else {
          windGustPara2.textContent = `${forecastHour.gust_kph.toString().slice(0, -2)} km/h`;
          }    
      } else if(forecastData.getUnit() === 'f') {
        pressurePara2.textContent = forecastHour.pressure_in + ' in';
        visibilityPara2.textContent = forecastHour.vis_miles + ' miles';
        
        let dewTemp = forecastHour.dewpoint_f.toString();
        if (dewTemp.slice(0, 2).startsWith('-0')) {
          dewPointPara2.textContent = dewTemp.slice(0, -2).replace('-', '') + '°';
        }
        else if (dewTemp.includes('.')) {
          dewPointPara2.textContent = dewTemp.slice(0, -2) + '°';
        } else {
          dewPointPara2.textContent = dewTemp + '°';
        }

        let mainTemp = forecastHour.temp_f.toString();
        if (mainTemp.slice(0, 2).startsWith('-0')) {
          hourlyForecastTempPara.textContent = mainTemp.slice(0, -2).replace('-', '') + '°';
        }
        else if (mainTemp.includes('.')) {
          hourlyForecastTempPara.textContent = mainTemp.slice(0, -2) + '°';
        } else {
          hourlyForecastTempPara.textContent = mainTemp + '°';
        }        

        let feelsTemp = forecastHour.feelslike_f.toString();
        if (feelsTemp.slice(0, 2).startsWith('-0')) {
          hourlyForecastUpperMiddleTempPara.textContent = feelsTemp.slice(0, -2).replace('-', '') + '°';
        }
        else if (feelsTemp.includes('.')) {
          hourlyForecastUpperMiddleTempPara.textContent = feelsTemp.slice(0, -2) + '°';
        } else {
          hourlyForecastUpperMiddleTempPara.textContent = feelsTemp + '°';
        }
        if (forecastHour.wind_mph.toString().includes('.')) {
          windSpeedPara2.textContent = `${forecastHour.wind_dir} ${forecastHour.wind_mph.toString().slice(0, -2)} mp/h`;
          } else {
            windSpeedPara2.textContent = `${forecastHour.wind_dir} ${forecastHour.wind_mph.toString()} mp/h`;
          }
        if (forecastHour.gust_mph.toString().includes('.')) {
          windGustPara2.textContent = `${forecastHour.gust_mph.toString().slice(0, -2)} mp/h`;
          } else {
          windGustPara2.textContent = `${forecastHour.gust_mph.toString().slice(0, -2)} mp/h`;
          }    
      }

  
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

    }
  }
}

export { displayHourlyForecastDiv };
