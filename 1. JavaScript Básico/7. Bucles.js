//------------------------------------------------------------------------
// ** Itera con el buble "while" de JavaScript **

const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}

//------------------------------------------------------------------------
// ** Itera con los bubles "for" de JavaScript **

const ourArray2 = [];

for (let i = 0; i < 5; i++) {
  ourArray2.push(i);
}

//------------------------------------------------------------------------
// ** Itera a traves de un arreglo con un bucle "for" **

const myArr = [2, 3, 4, 5, 6];

let total = 0;
for (let i = 0; i < myArr.length; i++){
  total += myArr[i];
}

//------------------------------------------------------------------------
// ** Itera con el bucle "do...while" de JavaScript **

const myArray = [];
let j = 10;

do {
  myArray.push(j);
  j++;
}
while (j < 10);

//------------------------------------------------------------------------
// ** Reemplaza bucles usando recursion **

/*
  La recursion es cambiar un buque por llamar a una funcion dentro de la 
  misma funcion hasta que esta tenga una condicion que tenga como retorno
  un valor que no modifique el resultado y sea este el que se retorne
  finalmente de dicha funcion.
*/

function sum(arr, n) {
  if (n <= 0){
    return 0; 
  } else {
    return sum(arr, n-1) + arr[n-1]; //Suma en valor de n-1 con el valor de
    //n-2 que es indirectamente llamado sum(arr, n-1) y dentro de este se 
    //repite el ciclo hasta que n sea 0 y entre en el primer ciclo y la suma
    //de Resultado + 0;
  }
}

console.log(sum([2, 3, 4], 2)); // Retorna 2 + 3, dado que solo toma los 2
// primeros elementos.

//------------------------------------------------------------------------
// ** PROBLEMA Busqueda de perfiles **

/*
  Tenemos un arreglo de objetos que representan a diferentes personas en 
  nuestras listas de contactos.

  Una función lookUpProfile que recibe nombre (name) y una propiedad (prop) 
  como argumentos preescritos para ti.

  La función debe verificar si el nombre (name) es el nombre de pila del 
  contacto (firstName) y la propiedad (prop) dada es una propiedad de ese 
  contacto.

  Si ambos son verdaderos, entonces devolver el "valor" de esa propiedad.

  Si name no corresponde a ningún contacto, entonces devuelve la cadena 
  No such contact.

  Si prop no corresponde a ninguna propiedad válida de un contacto encontrado 
  que coincida con name entonces devuelve la cadena No such property.
*/

// Configuración
const contacts = [
  {
  firstName: "Akira",
  lastName: "Laine",
  number: "0543236543",
  likes: ["Pizza", "Coding", "Brownie Points"],
},
{
  firstName: "Harry",
  lastName: "Potter",
  number: "0994372684",
  likes: ["Hogwarts", "Magic", "Hagrid"],
},
{
  firstName: "Sherlock",
  lastName: "Holmes",
  number: "0487345643",
  likes: ["Intriguing Cases", "Violin"],
},
{
  firstName: "Kristian",
  lastName: "Vos",
  number: "unknown",
  likes: ["JavaScript", "Gaming", "Foxes"],
},
];

function lookUpProfile(name, prop) {
// Cambia solo el código debajo de esta línea
for (let i = 0; i < contacts.length; i++){
  if (contacts[i].firstName == name && contacts[i].hasOwnProperty(prop) == true){
    return contacts[i][prop];
  } else if(contacts[i].firstName == name){
    return "No such property";
  } else if(i == contacts.length -1 && contacts[i].firstName != name){
    return "No such contact";
  }
}
// Cambia solo el código encima de esta línea
}

console.log(lookUpProfile("Akira", "address"));