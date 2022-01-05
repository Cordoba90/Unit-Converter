//Kelvin Value
//const kelvin = 294;
const kelvin = prompt("Write your Kelvin Degrees")
let celcius = kelvin - 273;
console.log(celcius + " c ");
//alert(`The Temperature is ${Math.floor (celcius)} degrees Celcius`)
let fahrenheit = Math.round(celcius * (9/5) + 32) ;
console.log(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celcius * (33/100);
console.log(Math.floor (newton));
console.log(`The Temperature is ${Math.floor (newton)} degrees Newton`)
alert(`The Temperature is ${Math.floor (newton)} degrees Newton`)