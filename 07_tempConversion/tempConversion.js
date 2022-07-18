const ftoc = function (ftemp) {
  let celsius = (ftemp - 32) * (5 / 9);
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

const ctof = function (ctemp) {
  let fahrenheit = ctemp * (9 / 5) + 32;
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit;
};
/* I learned how the Math.round function works and how to use
it to round to the desired level of accuracy. I feel my way is more
easily readable but I could have coded it more concisely as below:

const ftoc = function(f) {
 return Math.round((f - 32) * (5/9) * 10) / 10;
};

const ctof = function(c) {
  return Math.round(((c * 9/5) + 32) * 10) / 10;
};

*/

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
