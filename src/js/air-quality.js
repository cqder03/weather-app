import { displayCurrentTimeForecast } from "./current-forecast";

function displayAirQuality() {
    const currentAirQuality = document.createElement('div');
    const currentAirQualityUpper = document.createElement('div');
    const airQualityCaption = document.createElement('p');
    const currentAirQualityLower = document.createElement('div');
    const currentAirQualityLowerTop = document.createElement('div');
    const airQualityDate = document.createElement('div');
    const currentDayPara = document.createElement('p');
    const currentDatePara = document.createElement('p');
    const currentAirQualityLowerBottom = document.createElement('div');
    const currentAirQualityBottomLeft = document.createElement('div');
    const currentAirQualityBottomRight = document.createElement('div');
    const currentAirQualityMark = document.createElement('div');
    const currentAirQualityPara = document.createElement('p');
    const currentAirQualityDescription = document.createElement('p');

    currentAirQuality.setAttribute('class', 'current-air-quality');
    currentAirQualityUpper.setAttribute('class', 'current-air-quality-upper');
    airQualityCaption.setAttribute('class', 'air-quality-caption');
    currentAirQualityLower.setAttribute('class', 'current-air-quality-lower');
    currentAirQualityLowerTop.setAttribute('class', 'current-air-quality-lower-top');
    airQualityDate.setAttribute('class', 'air-quality-date');
    currentDayPara.setAttribute('class', 'current-day');
    currentDatePara.setAttribute('class', 'current-date');
    currentAirQualityLowerBottom.setAttribute('class', 'current-air-quality-lower-bottom');
    currentAirQualityBottomLeft.setAttribute('class', 'current-air-quality-lower-bottom-left');
    currentAirQualityBottomRight.setAttribute('class', 'current-air-quality-lower-right');
    currentAirQualityPara.setAttribute('class', 'current-air-quality-text');
    currentAirQualityPara.setAttribute('class', 'air-quality-poor');
    currentAirQualityMark.setAttribute('class', 'current-air-quality-mark');
    currentAirQualityDescription.setAttribute('class', 'current-air-quality-description');

    airQualityCaption.textContent = 'CURRENT AIR QUALITY';
    currentDayPara.textContent = 'THURSDAY';
    currentDatePara.textContent = '1.2.';
    currentAirQualityPara.textContent = 'Poor';
    currentAirQualityDescription.textContent = `The air has reached a high level of pollution \n 
    and is unhealthy for sensitive groups. Reduce time spent outside if you are feeling symptoms \n 
    such as difficulty breathing or throat irritation.`;

    currentAirQuality.appendChild(currentAirQualityUpper);
    currentAirQualityUpper.appendChild(airQualityCaption);
    currentAirQuality.appendChild(currentAirQualityLower);
    currentAirQualityLower.appendChild(currentAirQualityLowerTop);
    currentAirQualityLowerTop.appendChild(currentDayPara);
    currentAirQualityLowerTop.appendChild(currentDatePara);
    currentAirQualityLower.appendChild(currentAirQualityLowerBottom);
    currentAirQualityLowerBottom.appendChild(currentAirQualityBottomLeft);
    currentAirQualityLowerBottom.appendChild(currentAirQualityBottomRight);
    currentAirQualityBottomRight.appendChild(currentAirQualityMark);
    currentAirQualityBottomRight.appendChild(currentAirQualityPara);
    currentAirQualityBottomRight.appendChild(currentAirQualityDescription);
    document.querySelector('#main-content-wrapper').appendChild(currentAirQuality);
}

function displayAirQualityMore() {
    const airQualityMore = document.createElement('div');
    const airQualityMoreUpper = document.createElement('div');
    const currentPollutants = document.createElement('p')
    const airQualityScale = document.createElement('p')
    const airQualityCaption = document.createElement('p')
    const airQualityMoreLower = document.createElement('div');

    airQualityMore.setAttribute('class', 'current-air-quality-more');
    airQualityMoreUpper.setAttribute('class', 'current-air-quality-more-upper');
    currentPollutants.setAttribute('class', 'current-pollutants');
    airQualityScale.setAttribute('class', 'air-quality-scale');
    airQualityCaption.setAttribute('class', 'current-air-quality-caption');
    airQualityMoreLower.setAttribute('class', 'current-air-quality-more-lower');

for (let i = 0; i < 6; i++) {

    const airQualityPollutantCard = createElement('div');
    const airQualityPollutantCardLeft = document.createElement('div');
    const pollutantPara1 = document.createElement('p');
    const pollutantMark = document.createElement('div');
    const pollutantPara2 = document.createElement('p');
    const airQualityPollutantCardMiddle = document.createElement('div');
    const pollutantCardDescription = document.createElement('p');
    const airQualityPollutantCardRight = document.createElement('div');
    const pollutantScore1 = document.createElement('p');
    const pollutantScore2 = document.createElement('p');

    airQualityPollutantCard.setAttribute('class', 'pollutant-card')
    airQualityPollutantCardLeft.setAttribute('class', 'pollutant-card-left')
    pollutantPara1.setAttribute('class', 'pullutant-para1')
    pollutantMark.setAttribute('class', 'pollutant-mark')
    pollutantPara2.setAttribute('class', 'pollutant-para2')
    airQualityPollutantCardMiddle.setAttribute('class', 'pollutant-card-middle')
    pollutantCardDescription.setAttribute('class', 'pollutant-card-description')
    airQualityPollutantCardRight.setAttribute('class', 'poluttant-card-right')
    pollutantScore1.setAttribute('class', 'polutant-score1')
    pollutantScore2.setAttribute('class', 'polutant-score2')

    pollutantPara1.textContent = 'PM 2.5';
    pollutantPara2.textContent = 'Poor';
    pollutantCardDescription.textContent = `The air has reached a high level of pollution \n
    and is unhealthy for sensitive groups. Reduce time spent outside if you are feeling \n
    symptoms such as difficulty breathing or throat irritation.`;
    pollutantScore1.textContent = '196';
    pollutantScore2.textContent = '42 µg/m³';

    airQualityPollutantCard.appendChild(airQualityPollutantCardLeft);
    airQualityPollutantCardLeft.appendChild(pollutantPara1);
    airQualityPollutantCardLeft.appendChild(pollutantMark);
    airQualityPollutantCardLeft.appendChild(pollutantPara2);
    airQualityPollutantCard.appendChild(airQualityPollutantCardMiddle);
    airQualityPollutantCardMiddle.appendChild(pollutantCardDescription);
    airQualityPollutantCard.appendChild(airQualityPollutantCardRight);
    airQualityPollutantCardRight.appendChild(pollutantScore1);
    airQualityPollutantCardRight.appendChild(pollutantScore2);
    airQualityMoreLower.appendChild(airQualityPollutantCard);

    airQualityMore.appendChild(airQualityMoreUpper);
    airQualityMoreUpper.appendChild(currentPollutants);
    airQualityMoreUpper.appendChild(airQualityScale);
    airQualityMoreUpper.appendChild(airQualityCaption);
    airQualityMore.appendChild(airQualityMoreLower);
    document.querySelector('#main-content-wrapper'),appendChild(airQualityMore);;
}

    
}
 
export {
    displayAirQuality
}