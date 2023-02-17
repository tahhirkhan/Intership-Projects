const kelvin = 0;
const celsius = kelvin - 273;

let fahrenheit = Math.floor((celsius * (9 / 5) + 32));
let newton = Math.floor(celsius*(33/100));

console.log(`The temprature is ${fahrenheit} degrees Fahrenhiet`);
console.log(`The temprature is ${newton} Newton`);