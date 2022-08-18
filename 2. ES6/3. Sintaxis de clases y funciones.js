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


