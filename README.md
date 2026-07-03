# Weather App

## Overview

The Weather App is a web application developed using HTML, CSS, and JavaScript. It allows users to search for the current weather of any city by entering its name. The application fetches live weather information from the OpenWeatherMap API and displays important weather details in a clean and responsive interface.

## Features

* Search weather by city name
* Displays the current temperature in Celsius
* Shows humidity percentage
* Shows wind speed
* Updates the weather image according to the current weather condition
* Displays an error message for invalid city names
* Responsive layout for desktop and mobile devices

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* OpenWeatherMap API

## Project Structure

```text id="cjlwmz"
Weather-App/
│
├── index.html
├── style.css
├── script.js
└── weather-app-img/
    └── images/
        ├── search.png
        ├── clear.png
        ├── clouds.png
        ├── rain.png
        ├── drizzle.png
        ├── mist.png
        ├── humidity.png
        └── wind.png
```

## How It Works

1. The user enters a city name in the search box.
2. When the search button is clicked, a request is sent to the OpenWeatherMap API.
3. The API returns the latest weather information for the requested city.
4. The application displays the city name, temperature, humidity, wind speed, and the corresponding weather image.
5. If the entered city name is not found, an error message is shown instead of the weather details.

## Installation

1. Clone or download the project repository.
2. Open the project folder in your preferred code editor.
3. Add your OpenWeatherMap API key to the `script.js` file.
4. Open `index.html` in any modern web browser.
5. Enter a city name and click the search button to view the weather information.

## API

The application uses the OpenWeatherMap Current Weather API to retrieve live weather data.

Example request:

```text id="j5fxo7"
https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=YOUR_API_KEY
```

## Conclusion

This project demonstrates how to integrate a third-party API into a web application using JavaScript. It also showcases the use of asynchronous programming, DOM manipulation, API requests using `fetch()`, and responsive web design. The project is suitable for beginners who want to learn how to build interactive web applications using front-end technologies.
