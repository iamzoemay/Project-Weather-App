function displayTemperature(response) {
  console.log(response.data);
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.temperature.current
  );
  document.querySelector("#city").innerHTML = response.data.city;
  document.querySelector("#description").innerHTML =
    response.data.condition.description;
  document.querySelector("#humidity").innerHTML =
    response.data.temperature.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

let apiKey = "43o61eb10306ca5f7d4b73f203t3be63";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Cape_Town&key=43o61eb10306ca5f7d4b73f203t3be63&units=metric`;

axios.get(apiUrl).then(displayTemperature);
