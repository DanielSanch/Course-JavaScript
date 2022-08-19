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
// ** Haz coincidir caracteres que aparecen una o mas veces **

// Caracter +
// /a+/g
// abc => "a"
// aabc => "aa"
// abab => "a", "a"




//------------------------------------------------------------------------
// ** Haz coincidir caracteres que aparecen cero o mas veces **

// Caracter *
// /go*/
// "gooooooal!" => gooooooo
// "gut" => g
// "over" => null




//------------------------------------------------------------------------
// ** Encuentra caracteres con una coincidencia perezosa **

// Expresion normal
// /t[a-z]*i/ en titanic => "titani"

// Expresion perezosa ?
// /t[a-z]*?i/ => "ti"





//------------------------------------------------------------------------
// ** PROBLEMA Encuentra uno o mas criminales en una caceria **

/*
    Es hora de hacer una pausa y probar tus nuevas habilidades para escribir 
    expresiones regulares. Un grupo de criminales se han escapado de la 
    cárcel, pero no sabes cuántos. Sin embargo, sabes que permanecen unidos 
    cuando están alrededor de otras personas. Eres responsable de encontrar 
    a todos los criminales a la vez.

    Este es un ejemplo para revisar cómo hacer esto:

    La expresión regular /z+/ coincide con la letra z cuando aparece una o 
    más veces seguidas. Encontrará coincidencias en las siguientes cadenas:

    "z"
    "zzzzzz"
    "ABCzzzz"
    "zzzzABC"
    "abczzzzzzzzzzzzzzzzzzzzzabc"
    Pero no encuentra coincidencias en las siguientes cadenas, ya que no 
    hay letras z:

    ""
    "ABC"
    "abcabc"
    Escribe una expresión regular codiciosa que encuentre uno o más 
    criminales dentro de un grupo de personas. Un criminal está 
    representado por la letra mayúscula C.
*/

let reCriminals = /C+/g;





//------------------------------------------------------------------------
// ** Haz coincidir patrones de cadena de inicio **

// ^ funciona para negar cuando esta [^ ] pero por fuera como de [ ] indica
// la busqueda de patrones al principio de las cadenas.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString); // true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);  // false




//------------------------------------------------------------------------
// ** Haz coincidir patrones de cadena final **

// Caracter $ al final de la expresion

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding); // true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding); // false





//------------------------------------------------------------------------
// ** Coincide todas las letras y numeros **

// Clases de caracteres abreviados
// [A-Za-z0-9_] === \w

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);     // true
shortHand.test(numbers);    // true
longHand.test(varNames);    // true
shortHand.test(varNames);   // true





//------------------------------------------------------------------------
// ** Haz coincidir todo menos letras y numeros **

// \W en mayuscula es [^A-Za-z0-9_]





//------------------------------------------------------------------------
// ** Coincide con todos los numeros **

// [0-9] === \d





//------------------------------------------------------------------------
// ** Coincide con todos los caracteres no numericos **

// [^0-9] === \D





//------------------------------------------------------------------------
// ** Restringe posibles nombres de usuario **

/*
    Los nombres de usuario se utilizan en todas partes en Internet. Son los
    que dan a los usuarios una identidad única en tus sitios favoritos.

    Se necesita comprobar todos los nombres de usuario en una base de datos. 
    Estas son algunas reglas simples que los usuarios deben seguir al crear 
    su nombre de usuario.

    Los nombres de usuario sólo pueden utilizar caracteres alfanuméricos.

    Los únicos números del nombre de usuario tienen que estar al final. Puede 
    tener un cero o más al final. El nombre de usuario no puede iniciar con 
    un número.

    Las letras del nombre de usuario pueden ser minúsculas y mayúsculas.

    Los nombres de usuario deben tener al menos dos caracteres. Un nombre de 
    usuario de dos caracteres sólo puede utilizar letras del alfabeto como 
    caracteres.
*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; 
let result1 = userCheck.test(username);





//------------------------------------------------------------------------
// ** Haz coincidir espacios en blanco **

// \s === [ \r\t\f\n\v]
// espacios en blanco y caracteres como \r \t \n \f \v





//------------------------------------------------------------------------
// ** Haz coincidir caracteres que no sean espacios en blanco **

// \S === [^ \r\t\f\n\v]
// Todo menos espacios en blanco





//------------------------------------------------------------------------
// ** Especifica el menor y mayor numero de coincidencias **

/**
 * {minimo, maximo} cantidad de caracteres que deben coincidir  
 */

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/;
let result3 = ohRegex.test(ohStr);

// Solo el numero minimo
// /ha{3,}h/





//------------------------------------------------------------------------
// ** Especifica el numero exacto de coincidencias **

// /ha{3}h/ deben ser 3 a





//------------------------------------------------------------------------
// ** Comprueba todos o ninguno **

// ? indica que el elemento anterior es opcional

let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);





//------------------------------------------------------------------------
// ** Lookahead positivo y negativo **

/**
 * lookahead positivo: (?=...) buscara que el elemento del patron de busqueda este alli
 * lookahead negativo: (?!...) buscara que el elemento del patron no este alli
*/

//Vetificar que la contraseña tiene de 3 a 6 caracteres y al menos un numero
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);





//------------------------------------------------------------------------
// ** Comprueba agrupaciones mixtas de caracteres **

/**
 * Comprobar grupos de caracteres con parentesis
 * Penguin o Pumpkin
*/
let testStr2 = "Pumpkin";
let testRegex2 = /P(engu|umpk)in/;
testRegex2.test(testStr2);





//------------------------------------------------------------------------
// ** Reutiliza patrones usando grupos de captura **

// Grupos de captura /(\w+)/
let repeatStr = "row row row your boat";
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]





//------------------------------------------------------------------------
// ** usa grupos de captura para buscar y reemplazar **

/**
 * Puedes buscar y reemplazar tectos en una cadena usando .replace() en una
 * cadena. Las entradas para .replace() son primero el patron de expresiones
 * regulares que deseas buscar. El segundo parametro es la cadena para
 * reemplazar la coincidencia o una funcion para hacer algo.
 */

 let wrongText = "The sky is silver.";
 let silverRegex = /silver/;
 wrongText.replace(silverRegex, "blue");

 // The sky is blue

 /**
  * Tambien se puede acceder a grupos de captura en la cadena de reemplazo con
  * sihnos de dolar ($)
  */

 "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');





//------------------------------------------------------------------------
// ** PROBLEMA Elimina espacio en blanco del inicio y final **

/**
 * A veces no se quieren caracteres en espacios en blanco alrededor de las 
 * cadenas, pero están ahí. El proceso típico de las cadenas de texto es 
 * eliminar el espacio en blanco al inicio y al final del mismo.
 */

 let hello = "   Hello, World!  ";
 let wsRegex = /^(\s*)(.*\S)(\s*)/; 
 let result5 = hello.replace(wsRegex,'$2'); 
 
 console.log(result5);

 /**
  * Nota: El método String.prototype.trim() funcionará aquí, pero necesitarás 
  * completar este desafío usando expresiones regulares.
  */