function themeAndTemperatureSwitch(id) {
    const listOfTabs = document.querySelectorAll('#navbar-content-wrapper > *');

    listOfTabs.forEach((tab) => tab.classList.remove('active'));

    switch(id) {
        case 'today':
            document.querySelector(`#${id}`).classList.add('active');
            console.log(id);
            break;
        case 'hourly':
            document.querySelector(`#${id}`).classList.add('active');
            break;
        case 'daily':
            document.querySelector(`#${id}`).classList.add('active');
            break;
        case 'air-quality':
            document.querySelector(`#${id}`).classList.add('active');
            break;
    }
}

function activeTabFunction(id) {
   
    switch(id) {
         case 'theme-toggle':
         case 'theme-toggle-icon':
             const themeIconSelector = document.querySelector('#theme-toggle > img');
             const themeIconSelectorClass = themeIconSelector.getAttribute('class');
 
             if (themeIconSelectorClass === 'light-theme') {
                 themeIconSelector.setAttribute('class', 'dark-theme');
                 themeIconSelector.setAttribute('src', '../src/assets/icons/theme-icons/dark.png')
                 document.body.setAttribute('class', 'dark');
             } else {
                 themeIconSelector.setAttribute('class', 'light-theme');
                 themeIconSelector.setAttribute('src', '../src/assets/icons/theme-icons/light.png') 
                 document.body.setAttribute('class', 'light');
             }
             break;
         case 'temperature-unit-toggle': 
         case 'temperature-unit-icon':
             const temperatureUnitIconSelector = document.querySelector('#temperature-unit-toggle > *');
             const temperatureUnitIconSelectorClass = temperatureUnitIconSelector.getAttribute('class');
 
             if (temperatureUnitIconSelectorClass === 'celcius-unit') {
                 temperatureUnitIconSelector.setAttribute('class', 'fehrenheir-unit');
                 temperatureUnitIconSelector.setAttribute('src', '../src/assets/icons/temperature-units-icons/fehrenheit-icon.png')
             } else {
                 temperatureUnitIconSelector.setAttribute('class', 'celcius-unit');
                 temperatureUnitIconSelector.setAttribute('src', '../src/assets/icons/temperature-units-icons/celcius-icon.png')
             }
             break;
     }
    
}

export {
    themeAndTemperatureSwitch,
    activeTabFunction
}
