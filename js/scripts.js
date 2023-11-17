// paste here

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const wheaterElement = document.querySelector("#wheater-icon");
const countryElement = document.querySelector("#country");
const windElement = document.querySelector("#wind span");
const umidityElement = document.querySelector("#umidity span");
const weatherContainer = document.querySelector("#weather-data")


const getWeatherData = async(city) => {
  const apiWheaterURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
  const res = await fetch(apiWheaterURL);
  const data = await res.json();

  return data
};

const showWeatherData = async (city) => {
  const data = await getWeatherData(city)
  const apiCountryURL = `https://flagsapi.com/${data.sys.country}/flat/64.png`;
  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  countryElement.setAttribute("src", apiCountryURL);
  umidityElement.innerText = data.main.humidity+"%";
  windElement.innerText = data.wind.speed+"km/h";

  weatherContainer.classList.remove("hide");
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const city = cityInput.value;
  showWeatherData(city)
});