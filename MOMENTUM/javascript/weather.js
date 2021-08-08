const API_KEY = "260a43700569a0c67370df798f47450c";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = `@${data.name}`;
        weather.innerText = `${data.main.temp}º/${data.weather[0].main}`;


    })
}

function onGeoError(){
    alert("Can't you find. No weather for you.");
}



navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);