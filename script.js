const API_KEY ='f541d7c998da566685825445595a6b49';
const API_URL ='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city){
    const response = await fetch(API_URL + city + `&appid=${API_KEY}`);

    if(response.status === 404){ //If the response status is 404 (not found), it displays an error message and hides the weather display.
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }else{
        let data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/hr';

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = 'images/cloudy.png';
    }else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = 'images/clear.png';
    }else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = 'images/rain.png';
    }else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = 'images/drizzle.png';
    }else if(data.weather[0].main == 'Snow'){
        weatherIcon.src = 'images/snow.png';
    }
    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';
    //so the error message is hidden when displaying the data

    }
    
}

console.log(searchBtn);
searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
   //Listens for a click event on the search button (searchBtn).
  //When clicked, it calls checkWeather with the value entered in the search input (searchBox.value), triggering the weather information retrieval.
})

