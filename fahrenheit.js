const prompt = require('prompt-sync')();

let unidad = prompt("Escribe: F para Convertir Fahrenheit a Celsius y C para Convertir de Celsius a Fahrenheit ");
let valor = prompt("Escribe la temperatura ");


if (unidad == 'F' | unidad == 'f') {
    console.log(Fahrenheit(valor))
}
else if (unidad == 'C' | unidad ==  'c') {
    console.log(Celsius(valor))
}
else {
    console.log("Unidad Inválida")
}

function Fahrenheit(valor) {
    // (50°F - 32) x .5556 = 10°C
    fah = (valor - 32) * .5556
    return fah

} 

function Celsius(valor) {
    // (50°F - 32) x .5556 = 10°C
    cel = (valor * 1.8) + 32
    return cel
} 

