const repeatString = function (string, num) {
  if (num < 0) return "ERROR"; //more of an edge case situation here IMO
  let words = ""; //I wasn't letting it = an empty string
  for (let i = 0; i < num; i++) {
    //I also wasn't using let i
    words += string;
  }
  return words;
};

// Do not edit below this line
module.exports = repeatString;
