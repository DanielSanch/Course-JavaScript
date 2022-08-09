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
// ** Muta un arreflo declarado con const **

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
// ** Usa funciones fleca para escribir funciones anonimas de manera breve **

// Antes
const myFunc = function() {
    const myVar = "value";
    return myVar;
}

// Ahora 
const myFunc = () => {
    const myVar = "value";
    return myVar;
}

//Aun mejor
const myFunc = () => "value";

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
    ES6 indtroduce parametros por defecto para funciones
*/

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));  // Hello John
console.log(greeting());        // Hello Anonymous