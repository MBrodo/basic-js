const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if(arguments.length === 0) this.arr.push(`( )`);
   else this.arr.push(`( ${(value)} )`);
    return this;
  },
  removeLink(position) {
    if(!Number.isInteger(position) || position<1 || position>this.arr.length){
     this.arr = [];
      throw new Error();
    }
    this.arr.splice(position-1,1);
    return this;
  },
  reverseChain() {
this.arr=this.arr.reverse();
return this;
  },
  finishChain() {
    const en = this.arr.join('~~');
    this.arr = [];
    return en;
  }
};
module.exports = chainMaker;
