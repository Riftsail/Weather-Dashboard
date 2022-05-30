var requestUrl = "https://api.openweathermap.org/data/2.5/weather"

// fetch(requestUrl) {
// .then(function(response)
// return response.json();
// })
fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}").then(function(response) {
  console.log("inside", response);
});


// .then(function(data) {
//     console.log(data);
// });

$(".icon").html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='Icon depicting current weather.'>");

var input = document.getElementById("weather");

var element = document.getElementById("Search");

element.addEventListener("click", function() {
    console.log(input.value)
  });