const abc = require('lodash')
const number = [1, [3, [[3, [4]]]]];
const count = abc.flattenDeep(number)

console.log(count);
console.log("hello")