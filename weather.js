

var title = "It's the weather";

var printWeather = function() {
  var w = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
  console.log("The weather today is " + w + " degrees");
};

module.exports.printWeather = printWeather;
module.exports.title = title;



