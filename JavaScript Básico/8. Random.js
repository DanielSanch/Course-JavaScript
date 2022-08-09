//------------------------------------------------------------------------
// ** Generar numeros aleatorios **

let random = Math.random(); // 0.2332

// Math.random()    Devuelve un numero decimal de 0 a 1
// Math.floor()     Devuelve el numero entero inferior

//------------------------------------------------------------------------
// ** Generar numeros aleatorios entre un rango

Math.floor(Math.random() * (max - min + 1)) + min

//------------------------------------------------------------------------
// ** Utiliza la funcion "parseInt" **

// Convierte una cadena en entero.
// Si no contiene numeros su valor sera NaN

function convertToInteger(str) {
    return parseInt(str);
  }
  
  convertToInteger("56");

//------------------------------------------------------------------------
// ** Usar parseInt para convertir string de diferentes bases **

parseInt(string, radix);

const a = parseInt("1001", 2); //Binario a Entero = 9