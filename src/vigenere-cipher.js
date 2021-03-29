const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag = true) {
    this.flag = flag
  }
  encrypt(message, key) {
    if (message == undefined || key == undefined) throw Error();
    message = message.toUpperCase();
    key = key.toUpperCase();

    const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let result = [];
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      if (alpha.indexOf(message[i]) == -1) {
        result.push(message[i]);
      } else {
        const count = (alpha.indexOf(message[i]) + alpha.indexOf(key[j])) % 26;
        result.push(alpha[count]);

        if ((j + 1) == key.length) j = 0;
        else j += 1;
      }
    }
    return (this.flag == true) ? result.join('') : result.reverse().join('');
  }    
  decrypt(encryptedMessage, key) {
    if (encryptedMessage == undefined || key == undefined) throw Error();
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let result = [];
    let j = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (alpha.indexOf(encryptedMessage[i]) == -1) {
        result.push(encryptedMessage[i]);
      } else {
        const count = (alpha.indexOf(encryptedMessage[i]) - alpha.indexOf(key[j]) + 26) % 26;
        result.push(alpha[count]);

        if ((j + 1) == key.length) j = 0;
        else j += 1;
      }
    }
    return (this.flag == true) ? result.join('') : result.reverse().join('');
  }
}
module.exports = VigenereCipheringMachine;
