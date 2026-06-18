//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)

//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;

let tot_temperature_in_fahrenheit;
let tot_temperature_in_celsius;
let avg_temperature_in_fahrenheit;
let avg_temperature_in_celsius;

// array of all temp in farenheit.
const all_farenheight = [
  day1TempF,
  day3TempF,
  day5TempF,
  day7TempF,
  day9TempF,
  day11TempF,
  day13TempF,
  day15TempF,
  day17TempF,
  day19TempF,
  day21TempF,
  day23TempF,
  day25TempF,
  day27TempF,
  day29TempF,
];
//array of all temp in celcius
const all_celcius = [
  day2TempC,
  day4TempC,
  day6TempC,
  day8TempC,
  day10TempC,
  day12TempC,
  day14TempC,
  day16TempC,
  day18TempC,
  day20TempC,
  day22TempC,
  day24TempC,
  day26TempC,
  day28TempC,
  day30TempC,
];

// check that all arrays contain a total of 15 values. (total = 30)
console.log(all_farenheight.length);
console.log(all_celcius.length);

// create function to get total temp in farenheight
const get_totoal_farenheit = () => {
  // create variable for total temp after converted from celcius.
  let converted_total = 0;

  // variable for total farenheit temp
  let farenheit_total = 0;

  //for each variable in celcius array, convert and add to converted_total
  all_celcius.forEach((celcius) => {
    converted_total += (celcius * 9) / 5 + 32;
  });

  //for each variable in farenheit array, add to farenheit total
  all_farenheight.forEach((farenheit) => (farenheit_total += farenheit));

  // add converted_total and farenheit_total to get total temp_in farenheit

  let total_in_farenheit = converted_total + farenheit_total;

  // check value is returned

  console.log("This is the total in fareheit:", total_in_farenheit);
  // return result
  return total_in_farenheit;
};

// create function to get total temp in celcius
const get_totoal_celcius = () => {
  // create variable for total temp after converted from farenheit.
  let converted_total = 0;

  // variable for total celcius temp
  let celcius_total = 0;

  //for each variable in celcius array, convert and add to converted_total
  all_farenheight.forEach((fareheit) => {
    converted_total += ((fareheit - 32) * 5) / 9;
  });

  //for each variable in celcius array, add to celcius total
  all_celcius.forEach((celcius) => (celcius_total += celcius));

  // add converted_total and celcius_total to get total temp_in celcius

  let total_in_celcius = converted_total + celcius_total;

  // check value is returned

  console.log("This is the total in celcius:", total_in_celcius);
  // return result
  return total_in_celcius;
};

//calculate average temp in farenheit

const get_average_temp_farenheit = (totalFarenheit) => {
  let tempLength = all_celcius.length + all_farenheight.length;
  let average = totalFarenheit / tempLength;

  //log result for testing
  console.log("This is the average in farenheit: ", average);

  //return average
  return average;
};

//calculate average temp in celcius

const get_average_temp_celcius = (totalCelcius) => {
  let tempLength = all_celcius.length + all_farenheight.length;
  let average = totalCelcius / tempLength;

  //log result for testing
  console.log("This is the average in celcius: ", average);

  //return average
  return average;
};

// assign tot_temperature_in_fahrenheit get_tototal_farenheit
tot_temperature_in_fahrenheit = get_totoal_farenheit();

// assign tot_temperature_in_celcius get_tototal_celcius
tot_temperature_in_celsius = get_totoal_celcius();

// assign avg_temperature_in_farenheit get_average_temp_farenheit
avg_temperature_in_fahrenheit = get_average_temp_farenheit(
  tot_temperature_in_fahrenheit,
);

// assign avg_temperature_in_celcius get_average_temp_celcius
avg_temperature_in_celsius = get_average_temp_celcius(
  tot_temperature_in_celsius,
);

module.exports = {
  tot_temperature_in_fahrenheit,
  tot_temperature_in_celsius,
  avg_temperature_in_fahrenheit,
  avg_temperature_in_celsius,
};
