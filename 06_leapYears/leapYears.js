const leapYears = function (year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else return false;
};
/* could also code it like this 

const leapYears = function(year) {
  return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
};
 
this would automatically return false if the criteria were not met
instead of using the else statement to do so as I did above.
*/
// Do not edit below this line
module.exports = leapYears;
