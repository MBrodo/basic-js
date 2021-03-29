const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let coefficient = 0.693 / HALF_LIFE_PERIOD;
  if (parseFloat(sampleActivity) <= 0) return false;
  else if (typeof sampleActivity === "string" && parseFloat(sampleActivity) <= MODERN_ACTIVITY) return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / coefficient);
  else return false;
};
