# Weather App

A simple and responsive Weather App built using HTML, CSS, and JavaScript. It fetches real-time weather information using the OpenWeatherMap API.

## Features

* Search weather by city name
* Display temperature
* Display humidity
* Display wind speed
* Weather icon changes based on current weather conditions
* Shows an error message for invalid city names
* Responsive user interface

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* OpenWeatherMap API

## Project Structure

```text
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

## How to Run

1. Download or clone this repository.
2. Open the project folder.
3. Replace the API key in `script.js` with your own OpenWeatherMap API key if needed.
4. Open `index.html` in your web browser.
5. Enter a city name and click the search button.

## API

This project uses the OpenWeatherMap Current Weather API.

Example request:

```text
https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=YOUR_API_KEY
```







This project is licensed under the MIT License.

