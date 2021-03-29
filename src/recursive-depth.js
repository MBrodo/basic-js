const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) ? 1 + arr.reduce((a, b) => {
      return Math.max(a, this.calculateDepth(b))
    }, 0) : 0;
  }
};
