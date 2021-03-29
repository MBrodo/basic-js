const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let retValue = false;
  if (members && members instanceof Array){
    retValue = members.reduce((accum, curVal) => {
        if (curVal && typeof curVal == 'string'){
          accum.push(curVal.trim()[0].toUpperCase());
        }
        return accum;
      }, []).sort().join('');
  }
  return retValue ? retValue : false;
};
