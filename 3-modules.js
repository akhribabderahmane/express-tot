const operations = require('./3-modules-functions.js');
const sayHi = require('./3-utils.js');
const names = require('./3-names.js');
const {cars,singlePerson} = require('./3-multitype.js');

console.log(' 2 + 8 =',operations.add(2,8));
// console.log(operations);

sayHi(names.celia);
sayHi(names.akhrib);

console.log(`i\'m ${singlePerson.name} ... i'm ${singlePerson.age} ... I study ${singlePerson.degree}`);
console.log('i\'m gonna buy this cars ');
for (let index = 0; index <cars.length; index++) {
    const car =cars[index];
     console.log(` ******* ${car} *******`); 
}

console.log('------# architecture des ordinateur #----------------------------------------');
require('./3-mind-grenade.js')
