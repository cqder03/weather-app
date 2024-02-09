import { setHeaderLocation } from "./header";

const locationData = {
    lastLocation: '',

    setLocationName(name) {
        this.lastLocation = name;
        localStorage.setItem('lastLocation', `${name}`);
    },

    locationName() {
        return this.lastLocation;
    },

    checkLocation() {
        if (localStorage.getItem('lastLocation')) {
            console.log('We had last location');
            this.setLocationName(localStorage.getItem('lastLocation'));
            setHeaderLocation(localStorage.getItem('lastLocation'));
            return this.locationName();
        } else {
            console.log('Setting new default location');
            localStorage.setItem('lastLocation', 'London, United Kingdom');
            this.setLocationName(localStorage.getItem('lastLocation')); 
            setHeaderLocation(localStorage.getItem('lastLocation'));
            return this.locationName();
        }
    },
}

const forecastData = {
    forecast: '',
    unit: 'c',

    setForecast(value) {
        this.forecast = value;
    },

    getForecast() {
        return this.forecast;
    },

    setUnit(value) {
        this.unit = value;
    },

    getUnit() {
        return this.unit;
    }
}

function returnIconLink(link) {
    let imgName = link.slice('-7');
    if (link.includes('day')) {
        return `./assets/icons/weather-icons/day/${imgName}`;
    } else if (link.includes('night')) {
        return `./assets/icons/weather-icons/night/${imgName}`;
    }
}

export {
    locationData,
    forecastData,
    returnIconLink
}