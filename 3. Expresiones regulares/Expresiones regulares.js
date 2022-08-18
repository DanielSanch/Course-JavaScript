//------------------------------------------------------------------------
// ** Usa el metodo "test" **

/**
 * Las expresiones regulares se utilizan en lenguajes de programacion para
 * coincidir con partes de cadenas. Crear patrones para ayudar a hacer una
 * coincidencia.
 */

/**
 * JavaScrit tiene multiples formas de usar expresiones regulares. Una forma
 * de probar una expresion regular es usando el metodo .test(). Este toma la
 * expresion regular, la aplica a una cadena y devuelve true o false.
 */

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);





//------------------------------------------------------------------------
// ** Coincide una cadena literal con diferentes posibilidades **

/**
 * Se pueden usar multiples patrones usando el operador alternation o OR : |
 * /yes|no/
*/




//------------------------------------------------------------------------
// ** Ignota la capitalizacion al coincidir **

/**
 * Se pueden usar las llamadas banderas. Para la capitalizacion o mayusculas
 * la bandera es i.
 * 
 * 
 *      /ignorecase/i  => coincide con ignorecase, igNoreCase o IgnoreCase
*/





//------------------------------------------------------------------------
// ** Extrae coincidencias **

/**
 * Se pueden extraer las coincidencias encontradas con el metodo .match()
 * 
 * La sintaxis es lo opuesto al metodo .test
 */

"Hello, World".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);

// Son opuestos
/**
 * 'string'.match(/regex/);
    /regex/.test('string');
*/





//------------------------------------------------------------------------
// ** Encuentra mas que la primera coincidencia **

/**
 * Para obtener mas que el primer valor, se debe usar la bandera g
 */

testStr = "Repeat, Repear, Repeat";
ourRegex = /Repeat/g;
testStr.match(ourRegex); // Repeat, Repeat, Repeat
 
// Se pueden usar multiples banderas asi /search/gi





//------------------------------------------------------------------------
// ** Haz coincidir cualquier cosa con el comodin punto **

/**
 * El caracter de comodin . coincidira con cualquier caracter unico. El 
 * comodin tambien es llamado dot y period. Se puede utilizar el caracter 
 * de comodin como cualquier otro caracter en la expresion regular.
 * Por ejemplo, si quieres hacer coincidir hug, huh, hut y hum, puedes usar
 * la expresion regular /hu./ para que coincida con las cuatro palabras.
*/

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);





//------------------------------------------------------------------------
// ** Haz coincidir un solo caracter con multiples posibilidades **

/**
 * Si quieres hacer coincidir bag, big y bug pero no bog. Puedes crear la
 * expresion regular /b[aiu]g/ para hacer esto.
*/

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result = quoteSample.match(vowelRegex); 
 
console.log(result);





//------------------------------------------------------------------------
// ** Haz coincidir las letras del alfabeto **

// Hacer coincidir las letras del abecedario desde la a a la e
// /[a-e]/




//------------------------------------------------------------------------
// ** Haz coincidir los numeros y las letras del  alfabeto **

// Hacer coincidir las letras y/o numeros
// /[0-5]/
// /[a-z0-9]/ig





//------------------------------------------------------------------------
// ** Haz coincidir caracteres individuales no especificados **

// Conjunto de caracteres negados
// /[^aeiou]/gi coincide con todos los caracteres que no son una vocal.





//------------------------------------------------------------------------
// ** Haz coincidir los numeros y las letras del  alfabeto **

// Hacer coincidir las letras y/o numeros
// /[0-5]/
// /[a-z0-9]/ig