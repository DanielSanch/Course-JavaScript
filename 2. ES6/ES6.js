//------------------------------------------------------------------------
// ** Compara el alcance de las palabras clave "var" y "let" **

/*
    Cuando declaras una variable con la palabra clave var, esta es declarada
    globalmente o localmente si es declarada dentro de una funcion.

    La palabra clave let se comporta de forma similar, pero con algunas
    caracteristicas adicionales. Cuanto declaras una variable con la palabra
    clave let dentro de un bloque, una declaracion o expresion. Su alcance
    esta limitado a ese bloque, declaracion o expresion.
*/





//------------------------------------------------------------------------
// ** Muta un arreglo declarado con const **

// Los objetos incluyendo arreglos y funciones, asignados a una variable 
// usando const siguen siendo mutables.

const s = [5, 6, 7];
s = [1, 2, 3]; // Error porque no es mutable
s[2] = 45; // Mutable por posicion 
console.log(s); //[5, 6, 45]





//------------------------------------------------------------------------
// ** Prevenir la mutacion del objeto **

/*
    Para asegurar que tu informacion no cambie, JavaScript provee una funcion
    Object.freeze para prevenir la mutacion de datos.
*/

let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
  };
  Object.freeze(obj);
  obj.review = "bad"; //   Error
  obj.newProp = "Test"; // Error
  console.log(obj);





//------------------------------------------------------------------------
// ** Usa funciones flecha para escribir funciones anonimas de manera breve **

// Antes
const myFunc = function() {
    const myVar = "value";
    return myVar;
}

// Ahora 
const myFunc1 = () => {
    const myVar = "value";
    return myVar;
}

//Aun mejor
const myFunc2 = () => "value";

// Ejemplo
const magic = () => new Date();






//------------------------------------------------------------------------
// ** Escribe funciones flecha con parametros **

const double1 = (item) => item * 2;

// Si solo es un parametro se pueden omitir los parentesis
const double2 = item => item * 2;

const multiplier = (item, multi) => item * multi;
multiplier(4,2);





//------------------------------------------------------------------------
// ** Establece parametros por defecto para tus funciones **

/*
    ES6 introduce parametros por defecto para funciones
*/

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));  // Hello John
console.log(greeting());        // Hello Anonymous





//------------------------------------------------------------------------
// ** Utiliza el parametro rest con parametros de funcion **

/**
 * ES6 introduce el parametro rest para los parametros de funcion. Con el 
 * parametro res, puedes crear funciones que tomen un numero variable de
 * argumentos. Estos argumentos se almacenen en un arregloa al que se puede
 * acceder mas tarde desde dentro de la funcion.
 */

 function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2)); //3
  console.log(howMany("string", null, [1, 2, 3], { })); //4

/**
 * El parametro rest elimina la necesidad de comprobar el arreglo args y nos 
 * permite aplicar map(). filter(), reduce(). 
 */

const product = (...n) => {
    return n.reduce((a, b) => a * b, 1);
}
console.log(product(2, 4, 6)); //48





//------------------------------------------------------------------------
// ** Utiliza el operador de propagacion para evaluar los arreglos en el lugar **

/**
 * ES6 introduce el operador de propagacion, que nos permite expandir arreglos y 
 * otras expresiones en lugares donde se esperan multiples parametros o elementos.
 */

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // --> Arreglo desempacado (Propaga el arreglo)
// * Solo funciona en un argumento de funcion y en un arreglo literal

// Math.max espera normalemnte argumentos separados por comas, pero no un arreglo.
// Colocando ... el operador de propagacion hace que sea mas facil leer.





//------------------------------------------------------------------------
// ** Usa sintaxis de desestructuracion para extraer valores de objetos **

/**
 * La sintaxis de desestructuracion es una sintaxis especial introducida en ES6,
 * para asignar los valores directamente desde un objeto.
 */

// Codigo ES5
/*
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
*/

// Codigo ES6
const user = { name: 'John Doe', age: 34 };

const { name, age } = user;
// Deben mantener el mismo nombre, lo que hace es solo desestructuracion del objeto

// Para cambiar el nombre se usa el siguiente codigo
const { name: userName, age: userAge } = user;
