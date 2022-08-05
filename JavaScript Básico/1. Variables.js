//------------------------------------------------------------------------
// ** Comenta tu codigo de JavaScript **

// Hola Mundo

/* Hola multiversos 
Hola multiversos 
Hola multiversos */

//------------------------------------------------------------------------
// ** Declara variables de JavaScript **

// Se pueden almacenar 8 tipos de variables
// undefined, null, boolean, string, symbol, bigint, number, object
var outName;

/* 
Los nombres de las variables pueden contener
~ Numeros
~ Letras
~ $ y _
~ No pueden contener espacios 
~ No empezar con numero
*/

//------------------------------------------------------------------------
// ** Almacenar valores con el opedaror de asignacion **

var a;
a = 7;

//------------------------------------------------------------------------
// ** Asigna el valor de una variable a otra variable **

var a;
a = 7;
var b;
b = a;

//------------------------------------------------------------------------
// ** Iniciliza variables con el operador de asignacion **

// Podemos darle un valor a la variable en la misma linea que la inicializamos

var a = 9;

//------------------------------------------------------------------------
// ** Declara variables de cadena **

// Declaracion de una cadena o String se hace con "Name"

var myFirstName = "Daniel"
var myLastName = "Sanchez"

//------------------------------------------------------------------------
// ** Comprendiendo las variables no inicializadas

/* Si se inicializan variables sin indicarles en tipo de valor
el computador nos va a indicar al momento de hacer una operacion 
matematica, que el resultado es NaN (Not a Number).
Si concatenamos undefined, obtendemos una cadena de undefined */

var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

//------------------------------------------------------------------------
// ** Comprendiendo la sensibilidad de mayusculas en las variables **

// Los nombres en JS se deben escribir en camelCase
// Declaración de variables
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Asignación de variables
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//------------------------------------------------------------------------
// ** Explora las diferencias entre las palabras claves var y let **

// var => Variable
// let => Fija

let carName = "Oliver";
let carSound = "Meow!";

//------------------------------------------------------------------------
// ** Declara una variable de solo lectura con la palabra clave const **

/* const es otra forma de declarar variables que solo son de lectura
es decir, son constantes.

Se recomienda usar MAYUSCULA para valores inmutables y camelCase para
valores mutables*/

const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);
// console.log para imprimir en consola


//------------------------------------------------------------------------
// ** Suma dos numeros con JavaScript **

const sum = 10 + 10;

//------------------------------------------------------------------------
// ** Resta un numero de otro con JavaScript **

const difference = 45 - 33;

//------------------------------------------------------------------------
// ** Multiplica dos numeros con JavaScript **

const product = 8 * 10;

//------------------------------------------------------------------------
// ** Divide un numero entre otro con JavaScript **

const quotient = 66 / 33;

//------------------------------------------------------------------------
// ** Incrementa un numero con JavaScript **

let myVar = 87;

myVar++; 
// Igual a
myVar = myVar + 1;

//------------------------------------------------------------------------
// ** Decrementa un numero con JavaScript **

let myVar2 = 11;

myVar2--;
myVar2 = myVar2 - 1;

//------------------------------------------------------------------------
// ** Crea numeros decimales con JavaScript **

let myDecimal = 5.7;

//------------------------------------------------------------------------
// ** Multiplca dos numeros decimales con JavaScript **

const product2 = 2.0 * 2.5;

//------------------------------------------------------------------------
// ** Divide un decimal entre otro con JavaScript **

const quotient2 = 4.4 / 2.2;

//------------------------------------------------------------------------
// ** Encuentra un resto en JavaScript **

// Conocido habitualmente como el modulo, pero no lo es realmente
// No funciona igual con los numeros negativos

const remainder = 11 % 3; // 2

//------------------------------------------------------------------------
// ** Asignacion compuesta con adicion aumentada **

let myVar3 = 1;
myVar3 += 5;
console.log(myVar3); //6

//------------------------------------------------------------------------
// ** Asignacion compuesta con resta aumentada **

let a = 11;

a -= 6; //a = 11-6 = 5

//------------------------------------------------------------------------
// ** Asignacion compuesta con multiplicacion aumentada **

let b = 12;

b *= 5; //b = 12 * 5

//------------------------------------------------------------------------
// ** Asignacion compuesta con division aumentada **

let c = 33;

c /= 11; // c = 33 / 11

//------------------------------------------------------------------------
// ** Escapa comillas literales en cadena **

// Para colocar comillas en cadenas ' o " usar \ antes

const sampleStr = "Alan said, \"Peter is learning JavaScript\".";

//------------------------------------------------------------------------
// ** Cita cadenas con comillas simples **

// Podemos usar '' o "" de la misma manera con el fin de usar la opuesta
// dentro del codigo tal y asi

const myStr = '<a href="http://www.example/com" target="_black">Link</a>';

//------------------------------------------------------------------------
// ** Escapa secuencias en cadenas **

/*
    Podemos necesitar escape en dos razones
        1. Para permitir el uso de caracteres que de otra manera no te seria
           posible escribir, como un retorno de carro.
        2. Para permitirte representar multiples comillas en una cadena sin
           JavaScript malinterprete lo que quieres decir.
*/

/*  Codigo  Resultado
    \'      Comilla simple
    \"      Comilla doble
    \\      Barra invertida
    \n      Linea nueva
    \r      Retorno de carro
    \t      Tabulacion
    \b      Limite de palabra
    \f      Fuente de formulario

*/

const myStr2 = "FirstLine\n\t\\SecondLine\nThirdLine";
/*  
    FirstLine
        \SecondLine
    ThirdLine
*/

//------------------------------------------------------------------------
// ** Concatena cadenas con el operador "mas" **

const myStr3 = "This is the start" + "This is the end";

//------------------------------------------------------------------------
// ** Concatena cadenas con el operador "mas igual" **

let myStr4 = "This is the first sentence.";
myStr4 += "This is the second sentence.";

//------------------------------------------------------------------------
// ** Construye cadenas con variables ** 

const myName = "Daniel Sanchez";
const myStr5 = "My name is " + myName + " and I am well!";

//------------------------------------------------------------------------
// ** Encuentra la logitud de una cadena **

let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length; // 8

//------------------------------------------------------------------------
// ** Utiliza la notacion de corchetes para encontrar el primer caracter
//      de una cadena **

let fisrtLetterOfLastName = "";
const lastName1 = "Lovelace";

fisrtLetterOfLastName = lastName1[0]; //L

//------------------------------------------------------------------------
// ** Comprende la inmutabilidad de las cadenas **

/* Los valores de las cadenas de string no pueden ser cambiados por
    separado, es decir no podemos cambiar el primer caracter last[0] = "L"
    si no que tenemos que cambiar toda la cadena completa. 
*/

