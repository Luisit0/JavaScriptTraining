

// function palindromoLargo(str) {
//     divString = str.split("");
//     alReves = divString.reverse();
//     unidas=alReves.join("");
//     if (unidas == str) {
//         respuesta = "Palíndromo";
//     } else {
//         respuesta = "No Es Palíndromo";
//     }
//     return respuesta
// }

//console.log(palindromoLargo(String("aerea")))

// dabalearrozalazorraelabad
// radar
// ojo
// orejero
// reconocer
// aerea
// 2002

function palindromo(str) {
    palabra = str.split("").reverse().join("");
    if (palabra == str) {
        respuesta = "Palíndromo";
    } else {
        respuesta = "No Es Palíndromo";
    }
    return respuesta
}
console.log(palindromo("anitalavalatina"));


