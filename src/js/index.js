import { activeTabFunction, themeAndTemperatureSwitch } from "./header";

document.querySelector('#header-content-right-wrapper').addEventListener('click', (event) => {
    activeTabFunction(event.target.id);
});

document.querySelector('#navbar-content-wrapper').addEventListener('click', (event) => {
    themeAndTemperatureSwitch(event.target.id);
    console.log(event.target.id);
});
