console.log('Hello Node.JS!');

const mathF = require('./math');
const stringUtil = require('./stringUtils');
const dateU = require('./dateUtils');

let addResult = mathF.addition(5,4);
console.log(addResult);

let subResult = mathF.subtraction(10,3);
console.log(subResult);

let StringUpp = stringUtil.StringUppercase('a test string');
console.log(StringUpp);

let ReversedString = stringUtil.StringReverse('ReVerSe STrInG');
console.log(ReversedString);

let getDate = dateU.currentDate();
console.log(getDate);

const date = new Date();
let FormatDate = dateU.dateFormat(date, 'short');
console.log(FormatDate);

