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





//------------------------------------------------------------------------
// ** Crea cadenas usando plantillas literales **

/**
 * Las plantillas literales te permiten crear cadenas multilinea y usar 
 * caracteristicas de interpolacion, para crealas.
 */

const person = {
    name: "Daniel",
    age: 23
};

const greetings = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greetings);
/*
    Hello, my name is Daniel!
    I am 23 years old.
*/

/**
 * Se utiliza backticks (`), no comillas ' o ", para envolver la cadena.
 * La cadena es multilinea, tomando automaticamente un \n dentro de la cadena.
 * La sintaxis ${variable} es un marco de posicion.
 * Se puede usar tambien como ${a + b}.
 */

const result = {
    success: ["maz-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    const failureItems = [];
    for (let i = 0; i < arr.length; i++){
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return failureItems;
}

const failuresList = makeList(result.failure);





//------------------------------------------------------------------------
// ** Escribe declaraciones concisas de objetos literales usando la abreviatura
//                      de propiedades de objetos **

// Antes
const getMousesPosition = (x, y) => ({
    x: x,
    y: y
});

// Ahora evitando redundancias
const getMousesPosition1 = (x, y) => ({ x, y});





//------------------------------------------------------------------------
// ** Escribe funciones breves y declarativas con ES6 **

// Antes en ES5
const person2 = {
    name: "Taylor",
    sayHello: function(){
        return `Hello! My name is ${this.name}.`;
    }
};

// Ahora con ES6 podemos resumir esto sin la palabra function
const person3 = {
    name: "Taylor",
    sayHello() {
        return `Hello! My name is ${this.name}.`;
    }
};





//------------------------------------------------------------------------
// ** Usa sintaxis de clases para definir una funcion constructora **

/**
 * ES6 proporcioa una nueva sintaxis para crear objetos, usando la palabra
 * clave class.
 * 
 * Class es solo sintaxis, no una implementacion basada en clases de un 
 * paradigma orientado a objetos. Como otros lenguajes.
 */

// En ES5 se definia un constructor usando la palabra new
var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

// Ahora en ES6 usamos class
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}

const zeus = new SpaceShuttle('Jupiter');





//------------------------------------------------------------------------
// ** Utiliza getters (accesores) y setters (mutadores) para controlar el
//                          acceso a un objeto **

// Codigo de objeto usando get y set
class Book {
    constructor(author) {
        this._author = author;
    }

    get writer(){
        return this._author;
    }

    set writer(updateAuthor){
        this._author = updateAuthor;
    }
}

const novel = new Book("Marco");
console.log(novel.writer);
novel.writer = "Antonio";
console.log(novel.writer);

/**
 * Es convencion preceder el nombre de una variable privada con un guion 
 * bajo (_)
 */





//------------------------------------------------------------------------
// ** PROBLEMA Objeto de temperatura C y F **

/**
 * Utiliza la palabra clave class para crear una clase Thermostat. El 
 * constructor acepta una temperatura Fahrenheit.
 * 
 * En la clase, crea un getter para obtener la temperatura en Celsius y un 
 * setter para ajustar la temperatura en Celsius.
 * 
 * Recuerda que C = 5/9 * (F - 32) y F = C * 9.0 / 5 + 32 donde F es el valor 
 * de la temperatura en Fahrenheit y C es el valor de la misma temperatura en 
 * Celsius.
 * 
 * Nota: Cuando implementes esto, rastrearás la temperatura dentro de la clase 
 * en una escala, ya sea Fahrenheit o Celsius.
 * 
 * Este es el poder de un getter y un setter. Estás creando una API para otro 
 * usuario, que puede obtener el resultado correcto independientemente de cuál 
 * estés rastreando.
 * 
 * En otras palabras, estás abstrayendo los detalles de la implementación del 
 * usuario.
 */

class Thermostat {
    constructor(tempF){
      this._tempF = tempF;
    }
    
    get temperature(){
      return ((5/9)*(this._tempF - 32));
    }
  
    set temperature(updateTemp){
      this._tempF = ((updateTemp * 9.0)/5) + 32;
    }
  }
  
  const thermos = new Thermostat(76); // Ajuste en escala Farenheit
  let temp = thermos.temperature; // 24.44 en Celsius
  console.log(temp);
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 en Celsius
  console.log(temp);


  