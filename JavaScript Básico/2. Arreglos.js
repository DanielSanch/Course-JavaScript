//------------------------------------------------------------------------
// ** Utiliza la notacion de corchetes para encontrar el ultimmo caracter
//      en una cadena **

const lastName2 = "Lovelace";

const lastLetterOfLastName = lastName2[lastName2.length - 1];

//------------------------------------------------------------------------
// ** Almacena multiples valores en una variable utilizando los arreglos
//      de JavaScript **

const myArray = ["String", 2];

//------------------------------------------------------------------------
// ** Anida un arreglo dentro de otro arreglo **

// Arreglos multidimensionales

const teams = [["Bulls", 23], ["White Sox", 45]];

//------------------------------------------------------------------------
// ** Accede a los datos de un arreglo con indices **\

const myArray2 = [50, 60, 70];
let myData = myArray2[0];

//------------------------------------------------------------------------
// ** Modifica los datos de un arreglo con indices **

/* A diferencia de las cadenas, las entradas de los arreglos son mutables
    y pueden cambiarse libremente, incluso si el arreglo fue declarado
    con const 
*/

const myArray3 = [18, 64, 99];
myArray3[0] = 45;

//------------------------------------------------------------------------
// ** Accede a arreglos multidimensionales con indices **

const myArray4 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

const myData2 = myArray[2][1]; // 8

//------------------------------------------------------------------------
// ** Manipula arreglos con push() **

// Agrega el contenido al final del arreglo

const myArray5 = [["John", 23], ["cat", 2]];
myArray5.push(["dog", 3]);

//------------------------------------------------------------------------
// ** Manipula arreglos con pop() **

// Se utiliza para sacar un valor del final de un arreglo
// Elimina el ultimo elemento de un arreglo y devuelve ese elemento

const myArray6 = [["John", 23], ["cat", 2]];

let removedFromArray = myArray6.pop(); 

// myArray6 = [John, 23]
// removedFromArray = [cat, 2]

//------------------------------------------------------------------------
// ** Manipula arreglos con shift() **

// Funciona para elimminar el primer elemento del arreglo

const myArray7 = [["John", 23], ["cat", 2]];

let removedFromArray2 = myArray7.pop(); 

// myArray6 = [cat, 2]
// removedFromArray = [John, 23]

//------------------------------------------------------------------------
// ** Manipula arreglos con unshift() **

// Es lo contrario a push(), agrega elementos, pero al inicio del arreglo

const myArray8 = [["John", 23], ["dog", 3]];
myArray8.shift();
myArray8.unshift(["Paul", 35]);

//------------------------------------------------------------------------
// ** Lista de compras **

/* Crea una lista de compras en la variable myList. La lista debe ser un 
arreglo multidimensional que contenga varios sub-arreglos. */

const myList = [
    ["Agua 1L", 10],
    ["Galletas", 5],
    ["Leche deslactosada", 5],
    ["Panckes", 1],
    ["Galletas de vainilla", 2],
  ];

