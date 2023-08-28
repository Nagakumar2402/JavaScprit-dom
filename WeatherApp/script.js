apiKey = "d8a9c8ecf57d0508aa030837df6745c7";

const getWeather = async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

const search = document.querySelector(".button-74");
const input = document.querySelector("input");
const icon = document.querySelector(".icon");
const WCity = document.querySelector(".city");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
search.addEventListener("click", (e) => {
  const city = input.value || "visakhapatnam";
  getWeather(city).then((data) => {
    icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
    WCity.innerHTML = ` ${data.name}, ${data.sys.country}`;
    weather.textContent = data.weather[0].main;
    temperature.textContent = (data.main.temp - 273).toFixed(0) + "°C";
    description.textContent = data.weather[0].description;
  });
});
