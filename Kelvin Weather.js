// Temperature forecast today in Kelvin
const kelvin = 0;

// Temperature forecast today in Celsius
let celsius;
celsius = kelvin - 273;

// Temperature forecast today in Fahrenheit to the nearest whole number
let fahrenheit;
fahrenheit = Math.floor(celsius * (9/5) + 32);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

// Temperature forecast today to the Newton scale
let newton;
newton = Math.floor(celsius * (33/100))
console.log(`The temperature is ${newton} Newton.`)