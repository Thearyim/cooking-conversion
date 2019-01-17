function add(number1, number2){
  return number1 + number2;
}

function calculateBMI(height, weight){
  return (weight /  (height * height)) * 703;
}

function convertGallonsToLiters(gallons){
  return gallons * 3.785;
}

function convertUnits(conversionType, unit){
  var result;
  if (conversionType == "gallonsToLiters")
  {
    result = unit * 3.785;
  }
  else if (conversionType == "litersToGallons")
  {
    result = 3.875 / unit;
  }

  return result;
}

function showGallonsToLiters(){
  var conversionType = prompt("Type of conversion:");
  var gallons = parseInt(prompt("Enter unit in gallons:"));
  //var result = convertGallonsToLiters(gallons);
  var result = convertUnits(conversionType, gallons);
  alert(result);
}

function showBMI(){
  var height = parseInt(prompt("Enter your height in inch:"));
  var weight = parseInt(prompt("Enter your weight in pound:"));
  var result = calculateBMI(height, weight);
  alert(result);
}

function divide(number1, number2){
  return number1 / number2;
}

function multiply(number1, number2){
  return number1 * number2;
}

function subtract(number1, number2){
  return number1 - number2;
}

function convertCelsiusToFahrenheit(degreesCelsius){
  return (degreesCelsius * (9 /5)) + 32;
}

function showCelsiusToFahrenheit(){
  var celsius = parseInt(prompt("Enter degrees in celsius"));
  var result = convertCelsiusToFahrenheit(celsius);
  alert(result);
}

showGallonsToLiters();

//showCelsiusToFahrenheit();

//showBMI();

//var number2 = parseInt(prompt("Enter another number:"));
//var result = multiply(number1, number2);
//alert(result);









//var add = function(number1, number2) {
  //return number1 + number2;
//};
