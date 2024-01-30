import { activeTabFunction, themeAndTemperatureSwitch } from "./header";

document
  .querySelector("#header-content-right-wrapper")
  .addEventListener("click", (event) => {
    themeAndTemperatureSwitch(event.target.id);
  });

document
  .querySelector("#navbar-content-wrapper")
  .addEventListener("click", (event) => {
    activeTabFunction(event.target.id);
    console.log(event.target.id);
  });

activeTabFunction("today");

document
  .querySelector("#hourly-forecast-lower")
  .addEventListener("click", (event) => {
    const eventId = event.target.id;
    const forecastCardWrapper = document.querySelector(
      "#hourly-forecast-card-wrapper"
    );

    switch (eventId) {
      case "hourly-forecast-left-button":
        forecastCardWrapper.scrollLeft -= 62.25;
        console.log(forecastCardWrapper.scroll);
        break;
      case "hourly-forecast-right-button":
        forecastCardWrapper.scrollLeft += 62.25;
    }
  });
