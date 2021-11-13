const API_KEY = "34c431e26136273e0630fd6bc69dd372";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector(".weather span:first-child");
      const city = document.querySelector(".weather span:last-child");
      weather.textContent = `${data.weather[0].main}/${data.main.temp}°C`;
      city.textContent = data.name;
    })
  );
}
function onGeoError() {
  alert("Can't find where you are. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
