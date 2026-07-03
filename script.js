 const apikey = "abe3f17354b5a853725bce42d6d5dee7";
      
      const searchBtn=document.querySelector(".search button")
        const searchBox=document.querySelector(".search input")
      const weatherIcon= document.querySelector(".weather-icon")


    async function checkWeather(city){
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
        const response=await fetch(apiUrl);
        if(response.status==404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";


        }
        else{
            var data=await response.json();

        console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

        if(data.weather[0].main=="clouds"){
            weatherIcon.src="weather-app-img\images\clouds.png"
        }
        else if(data.weather[0].main=="clear"){
            weatherIcon.src="weather-app-img\images\clear.png"
        }
        else if(data.weather[0].main=="rain"){
            weatherIcon.src="weather-app-img\images\rain.png"
        }
        else if(data.weather[0].main=="drizzle"){
            weatherIcon.src="weather-app-img\images\drizzle.png"
        }
        else if(data.weather[0].main=="mist"){
            weatherIcon.src="weather-app-img\images\mist.png"
        }
        document.querySelector(".weather").style.display="block";
                document.querySelector(".error").style.display="none";
        }
        

    }    
    searchBtn.addEventListener("click",()=>{
           checkWeather(searchBox.value);
    })