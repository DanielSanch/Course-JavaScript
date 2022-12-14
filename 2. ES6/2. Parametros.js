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





//------------------------------------------------------------------------
// ** Usa sintaxis de desestructuracion para asignar variables desde objetos anidados **

const user1 = {
    johnDoe: {
        age1: 34,
        email: 'johnDoe@freeCodeCamp.com'
    }
};

// Con el mismo nombre
const { johnDoe: { age1, email }} = user1;

// Con nombre diferente
const { johnDoe: {age: userAge1, email: userEmail}} = user1;





//------------------------------------------------------------------------
// ** Usa sintaxis de desestructuracion para asignar variables desde arreglos **

const [a, b,,, c] = [1,2,3,4,5,6];
console.log(a, b, c); // 1, 2, 5





//------------------------------------------------------------------------
// ** Utiliza la sistanxis de desestructuracion con el parametro rest para reasignar
//                          elementos de un arreglo **

/**
 * Usando desestructuracion y rest
 */

const [x, y, ...arreglo] = [ 1, 2, 3, 4, 5, 7];
console.log( x, y);     // 1, 2
console.log(arreglo);   // 3, 4, 5, 7

// Es el mismo resultado con Array.prototype.slice()
// Rest solo funciona como el ultimo parametro





//------------------------------------------------------------------------
// ** Utiliza sintaxis de desestructuracion para pasar un objeto como parametro
//                              de funcion **

/**
 * Podemos hacer el llamado de un objeto en una funcion como parametro y requerir
 * algunos datos de este objeto especificamente, si es asi, podemos desestructurar
 * desde el mismo llamado del parametro
 */

const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
    // Codigo de la funcion
}

// Forma reducida
const profileUpdates = ({ name, age, nationality, location }) => {
    // Codigo de la funcion 
}