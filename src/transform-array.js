const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Not implemented');
  const transform = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
    case '--discard-next':
      if (i !== arr.length - 1) {
        i++;
      }
      break;
    case '--discard-prev':
      if (i !== 0 && arr[i - 2] !== '--discard-next') {
        transform.pop();
      }
      break;
    case '--double-next':
      if (i !== arr.length - 1) {
        transform.push(arr[i + 1]);
      }
      break;
    case '--double-prev':
      if (i !== 0 && arr[i - 2] !== '--discard-next') {
        transform.push(arr[i - 1]);
      }
      break;
    default:
      transform.push(arr[i]);
    }
  }
  return transform;
};
