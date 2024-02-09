import { displayCurrentTimeForecast } from "./current-forecast";
import { dayOfTheWeek } from "./daily-forecast";
import { forecastData } from "./dataStorage";

const airQualityScale = [
    {
        name: 'Excellent',
        classname: 'air-quality-excellent',
        description: `The air quality is ideal for most individuals. \n 
        Enjoy your normal outdoor activities.`,
        score: '0 - 19'
    },
    {
        name: 'Fair',
        classname: 'air-quality-fair',
        description: `The air quality is generally acceptable for most \n 
        individuals. However, sensitive groups may experience minor to \n 
        moderate symptoms from long-term exposure.`,
        score: '20 - 49'
    },
    {
        name: 'Poor',
        classname: 'air-quality-poor',
        description: `The air has reached a high level of pollution and is \n 
        unhealthy for sensitive groups. Reduce time spent outside if you are \n
        feeling symptoms such as difficulty breathing or throat irritation.`,
        score: '50 - 99'
    },
    {
        name: 'Unhealthy',
        classname: 'air-quality-unhealthy',
        description: `Health effects can be immediately felt by sensitive groups. \n
        Healthy individuals may experience difficulty breathing and throat irritation \n
        with prolonged exposure. Limit outdoor activity.`,
        score: '100 - 149'
    },
    {
        name: 'Very unhealthy',
        classname: 'air-quality-very-unhealthy',
        description: `Health effects will be immediately felt by sensitive groups and should \n 
        avoid outdoor activity. Healthy individuals are likely to experience difficulty breathing \n
        and throat irritation; consider staying indoors and rescheduling outdoor activities.`,
        score: '150 - 249'
    },
    {
        name: 'Dangerous',
        classname: 'air-quality-dangerous',
        description: `Any exposure to the air, even for a few minutes, can lead to serious health effects \n
        on everybody. Avoid outdoor activities.`,
        score: '250+'
    },
];

const airQualityPollutants = [
    {
        name: 'PM',
        micron_size: '2.5',
    },
    {
        name: 'PM',
        micron_size: '10',
    },
    {
        name: 'NO',
        micron_size: '2',
    },
    {
        name: 'O',
        micron_size: '3',
    },
    {
        name: 'SO',
        micron_size: '2',
    },
    {
        name: 'CO',
        micron_size: '',
    },
];


function displayAirQuality() {
    const currentForecast = forecastData.getForecast().current;
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
    const pollutionScoreDisplay = document.createElement('div');
    const pollutantCaption = document.createElement('p');
    const pollutantScore = document.createElement('p');
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
    pollutionScoreDisplay.setAttribute('class', 'pollutant-score-display');
    pollutantScore.setAttribute('class', 'pollutant-score');
    pollutantCaption.setAttribute('class', 'pollutant-caption');
    currentAirQualityBottomRight.setAttribute('class', 'current-air-quality-lower-right');
    currentAirQualityPara.setAttribute('class', 'current-air-quality-text');
    currentAirQualityMark.setAttribute('class', 'current-air-quality-mark');
    currentAirQualityDescription.setAttribute('class', 'current-air-quality-description');

    airQualityCaption.textContent = 'CURRENT AIR QUALITY';
    currentDatePara.textContent = currentForecast.last_updated.slice(-8, -6) + '.' + currentForecast.last_updated.slice(-11, -9);
    currentDayPara.textContent = dayOfTheWeek(new Date(), 'full');
    let forecastScore = currentForecast.air_quality.co.toString().slice(0, -2);
     if (forecastScore > 250) {
        currentAirQualityPara.textContent = 'Dangerous';
        pollutionScoreDisplay.classList.add('air-quality-dangerous');
        currentAirQualityMark.classList.add('air-quality-dangerous');
    } else if (forecastScore >= 150 || forecastScore <= 249) {
        currentAirQualityPara.textContent = 'Very unhealthy';
        pollutionScoreDisplay.classList.add('air-quality-very-unhealthy');
        currentAirQualityMark.classList.add('air-quality-very-unhealthy');
    } else if (forecastScore >= 100 || forecastScore <= 149) {
        currentAirQualityPara.textContent = 'Unhealthy';
        pollutionScoreDisplay.classList.add('air-quality-unhealthy');
        currentAirQualityMark.classList.add('air-quality-unhealthy');
    } else if (forecastScore >= 50 || forecastScore <= 99) {
        currentAirQualityPara.textContent = 'Poor';
        pollutionScoreDisplay.classList.add('air-quality-poor');
        currentAirQualityMark.classList.add('air-quality-poor');
    } else if (forecastScore >= 20 || forecastScore <= 49) {
        currentAirQualityPara.textContent = 'Fair';
        pollutionScoreDisplay.classList.add('air-quality-fair');
        currentAirQualityMark.classList.add('air-quality-fair');
    } else if (forecastScore <= 19) {
        currentAirQualityPara.textContent = 'Excellent';
        pollutionScoreDisplay.classList.add('air-quality-excellent');
        currentAirQualityMark.classList.add('air-quality-excellent');
    }
    for (const desc  of airQualityScale) {
        if (desc.name === currentAirQualityPara.textContent) {
            currentAirQualityDescription.textContent = desc.description;
            break;
        }
    }
    
    pollutantScore.textContent = currentForecast.air_quality.co.toString().slice(0, -2);
    pollutantCaption.textContent = 'AQI';

    currentAirQuality.appendChild(currentAirQualityUpper);
    currentAirQualityUpper.appendChild(airQualityCaption);
    currentAirQuality.appendChild(currentAirQualityLower);
    currentAirQualityLower.appendChild(currentAirQualityLowerTop);
    currentAirQualityLowerTop.appendChild(currentDayPara);
    currentAirQualityLowerTop.appendChild(currentDatePara);
    currentAirQualityLower.appendChild(currentAirQualityLowerBottom);
    currentAirQualityLowerBottom.appendChild(currentAirQualityBottomLeft);
    currentAirQualityBottomLeft.appendChild(pollutionScoreDisplay);
    currentAirQualityBottomLeft.appendChild(pollutantScore);
    currentAirQualityBottomLeft.appendChild(pollutantCaption);
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
    currentPollutants.classList.add('class', 'current-active-tab');
    airQualityScale.setAttribute('class', 'air-quality-scale');
    airQualityCaption.setAttribute('class', 'current-air-quality-caption');
    airQualityMoreLower.setAttribute('class', 'current-air-quality-more-lower');

    currentPollutants.textContent = 'Current Pollutants';
    airQualityScale.textContent = 'Air Quality Scale';
    airQualityCaption.textContent = 'Over the past hour';

    displayCurrentPollutants(airQualityMoreLower);
    
    airQualityMore.appendChild(airQualityMoreUpper);
    airQualityMoreUpper.appendChild(currentPollutants);
    airQualityMoreUpper.appendChild(airQualityScale);
    airQualityMoreUpper.appendChild(airQualityCaption);
    airQualityMore.appendChild(airQualityMoreLower);
    document.querySelector('#main-content-wrapper').appendChild(airQualityMore);;
    airQualityMoreUpper.addEventListener('click', (event) => {
        let eventClassList = event.target.classList;
        
        if (eventClassList.contains('current-pollutants')) {
            clearAirQualityLowerMore();
            activateLowerMoreTab('current-pollutants');
            displayCurrentPollutants(airQualityMoreLower);    
        } else if (eventClassList.contains('air-quality-scale')) {
            clearAirQualityLowerMore();
            activateLowerMoreTab('air-quality-scale');
            displayAirQualityScale(airQualityMoreLower);
        }
    });

    
}

function displayCurrentPollutants(parent) {
    const currentForecast = forecastData.getForecast().current;
    let i = 0;
    for (let pollutant in currentForecast.air_quality) {
        if (i > 5) {
            break;
        }
        const airQualityPollutantCard = document.createElement('div');
        const airQualityPollutantCardLeft = document.createElement('div');
        const pollutantPara1 = document.createElement('p');
        const pollutantPara1Sub = document.createElement('sub');
        const pollutantMark = document.createElement('div');
        const pollutantPara2 = document.createElement('p');
        const airQualityPollutantCardMiddle = document.createElement('div');
        const pollutantCardDescription = document.createElement('p');
        const airQualityPollutantCardRight = document.createElement('div');
        const pollutantScore1 = document.createElement('p');
        const pollutantScore2 = document.createElement('p');
        
        airQualityPollutantCard.setAttribute('class', 'pollutant-card');
        airQualityPollutantCardLeft.setAttribute('class', 'pollutant-card-left');
        pollutantPara1.setAttribute('class', 'pullutant-para1');
        pollutantPara1Sub.setAttribute('class', 'micron-size');
        pollutantMark.setAttribute('class', 'pollutant-mark');
        pollutantMark.classList.add('air-quality-poor');
        pollutantPara2.setAttribute('class', 'pollutant-para2');
        airQualityPollutantCardMiddle.setAttribute('class', 'pollutant-card-middle');
        pollutantCardDescription.setAttribute('class', 'pollutant-card-description');
        airQualityPollutantCardRight.setAttribute('class', 'pollutant-card-right');
        pollutantScore1.setAttribute('class', 'pollutant-score1');
        pollutantScore2.setAttribute('class', 'pollutant-score2');
    
        pollutantPara1.textContent = airQualityPollutants[i].name;
        pollutantPara1Sub.textContent = airQualityPollutants[i].micron_size;
        let pollutantScore = currentForecast.air_quality[pollutant];
         if (pollutantScore > 250) {
            pollutantMark.classList.add('air-quality-dangerous');
            pollutantCardDescription.textContent = airQualityScale[5].description;
        } else if (pollutantScore >= 150 || pollutantScore <= 249) {
            pollutantMark.classList.add('air-quality-very-unhealthy');
            pollutantCardDescription.textContent = airQualityScale[4].description;
        } else if (pollutantScore >= 100 || pollutantScore <= 149) {
            pollutantMark.classList.add('air-quality-unhealthy');
            pollutantCardDescription.textContent = airQualityScale[3].description;
        } else if (pollutantScore >= 50 || pollutantScore <= 99) {
            pollutantMark.classList.add('air-quality-poor');
            pollutantCardDescription.textContent = airQualityScale[2].description;
        } else if (pollutantScore >= 20 || pollutantScore <= 49) {
            pollutantMark.classList.add('air-quality-fair');
            pollutantCardDescription.textContent = airQualityScale[1].description;
        } else if (pollutantScore <= 19) {
            pollutantMark.classList.add('air-quality-excellent');
            pollutantCardDescription.textContent = airQualityScale[0].description;
        }
        console.log(i);
        i++;
        
        pollutantScore1.textContent = pollutantScore;
        pollutantScore2.textContent = pollutantScore + ' µg/m³';
    
        airQualityPollutantCard.appendChild(airQualityPollutantCardLeft);
        airQualityPollutantCardLeft.appendChild(pollutantPara1);
        pollutantPara1.appendChild(pollutantPara1Sub);
        airQualityPollutantCardLeft.appendChild(pollutantMark);
        airQualityPollutantCardLeft.appendChild(pollutantPara2);
        airQualityPollutantCard.appendChild(airQualityPollutantCardMiddle);
        airQualityPollutantCardMiddle.appendChild(pollutantCardDescription);
        airQualityPollutantCard.appendChild(airQualityPollutantCardRight);
        airQualityPollutantCardRight.appendChild(pollutantScore1);
        airQualityPollutantCardRight.appendChild(pollutantScore2);
        parent.appendChild(airQualityPollutantCard);
    }
}

function displayAirQualityScale(parent) {
    for (let card of airQualityScale) {
    const scaleCard = document.createElement('div');
    const scaleCardUpper = document.createElement('div');
    const scaleCardUpperLeft = document.createElement('div');
    const pollutantMark = document.createElement('div');
    const pollutantName = document.createElement('p');
    const scaleCardUpperRight = document.createElement('div');
    const pollutantScale = document.createElement('div');
    const scaleCardLower = document.createElement('div');
    const pollutantDescription = document.createElement('p');

    scaleCard.setAttribute('class', 'scale-card');
    scaleCardUpper.setAttribute('class', 'scale-card-upper');
    scaleCardUpperLeft.setAttribute('class', 'scale-card-upper-left');
    pollutantMark.setAttribute('class', 'pollutant-mark');
    pollutantMark.classList.add(`${card.classname}`);
    pollutantName.setAttribute('class', 'pollutant-name');
    scaleCardUpperRight.setAttribute('class', 'scale-card-upper-right');
    pollutantScale.setAttribute('class', 'pollutant-scale');
    scaleCardLower.setAttribute('class', 'scale-card-lower');
    pollutantDescription.setAttribute('class', 'pollutant-description');

    pollutantName.textContent = `${card.name}`;
    pollutantDescription.textContent = `${card.description}`;
    pollutantScale.textContent = `${card.score}`;

    scaleCard.appendChild(scaleCardUpper);
    scaleCard.appendChild(scaleCardLower);
    scaleCardUpper.appendChild(scaleCardUpperLeft);
    scaleCardUpperLeft.appendChild(pollutantMark);
    scaleCardUpperLeft.appendChild(pollutantName);
    scaleCardUpper.appendChild(scaleCardUpperRight);
    scaleCardUpperRight.appendChild(pollutantScale);
    scaleCardLower.appendChild(pollutantDescription);
    parent.appendChild(scaleCard);
    }
}

function activateLowerMoreTab(tab) {
    document.querySelectorAll('.current-air-quality-more-upper > *').forEach((child) => child.classList.remove('current-active-tab'));
    
    if (tab === 'current-pollutants') {
        document.querySelector(`.${tab}`).classList.add('current-active-tab');
    } else if (tab === 'air-quality-scale') {
        document.querySelector(`.${tab}`).classList.add('current-active-tab');
    }
}

function clearAirQualityLowerMore() {
    const selector = document.querySelector('.current-air-quality-more-lower');
    const selectorChildren = document.querySelectorAll('.current-air-quality-more-lower > *');

    for (let child of selectorChildren) {
        selector.removeChild(child);
    }
}

export {
    displayAirQuality,
    displayAirQualityMore
}