//------------------------------------------------------------------------
// ** Crea un metodo en un objeto **

/**
 * Los metodos son propiedades que son funciones. Estos agregan diferentes
 * comportamientos a los objetos.
 */

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return `This dog has ${dog.numLegs} legs.`;}
};

console.log(dog.sayLegs());





//------------------------------------------------------------------------
// ** Palabra clave "this"

let duck = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return `This dog has ${this.numLegs} legs.`;}
};

console.log(duck.sayLegs());

// De esta forma si se cambia el nombre del objeto, las referencias que se hagan de este no deben ser cambiadas,
// si no por contrario el this toma la referencia directa.




//------------------------------------------------------------------------
// ** Funcion constructor **

/**
 * Las funciones constructors crean nuevos objetos. Definen propiedades y comportamientos que perteneceran al
 * nuevo objeto.
 * 
 * "Son el modelo para la creacion de nuevos objetos"
*/

function Dog(){
    this.name = "Hannah";
    this.color = "White with orange";
    this.numLegs = 4;
}

/**
 * Estan definidos con un nombre en mayuscula para distinguirlos de otras funciones que no son constructors.
 * 
 * Utilizan la palablra clave this para establecer propiedades del objeto que crearan. Dentro del constructor,
 * this se refiere al nuevo objeto que creara.
 * 
 * Los constructors definen propiedades y comportamientos en vez de devolveros como un valor como lo harian 
 * otras funciones.
*/





//------------------------------------------------------------------------
// ** Utiliza un constructor para crear objetos **

/**
 * Se utiliza el operador new cuando llamamos a un constructor. Esto crea una nueva instancia del metodo con 
 * un nombre diferente.
 */

let blueBird = new Dog();

/**
 * De esta forma las propiedades y metodos de Dog se pasan a blueBird
 * blueBird.name;
 * blueBird.name = "Berlin"; Modificando 
 * blueBird.color; ...
*/





//------------------------------------------------------------------------
// ** Extender constructores para recibir argumentos **

function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

/**
 * Es mejor de esta forma indicarle desde la creacion el valor de los argumentos necesarios, para el nuevo 
 * objeto.
*/

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
  
let terrier = new Dog("Berlin", "White");




//------------------------------------------------------------------------
// ** Verifica el constructor de un objeto con "instanceof" **

/**
 * Cada vez que una funcion constructora crea un nuevo objeto, se dice que ese objeto es una instancia de su
 * constructor.
 * 
 * Se puede verificar esto con el operador instanceof.
 *  Devuelve true o false
*/
  
let crow = new Bird("Alexis", "black");
  
crow instanceof Bird; // Devuelve true





//------------------------------------------------------------------------
// ** Propiedades directas **

/**
 * Se llaman propiedades directas porque estan definidas directamente en la instancia del objeto. Eso significa
 * que las instancias tiene su prpia copia separada de estas propiedades.
*/

let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // ["name", "numLegs"]




//------------------------------------------------------------------------
// ** Utilizar propiedades "prototype" para reducir codigo duplicado **

/**
 * Dado que numLegs probablemente tendrán el mismo valor para todas las instancias de Bird, esencialmente tienes 
 * una variable duplicada numLegs dentro de cada instancia de Bird.
 * 
 * Esto puede que no sea un problema cuando sólo hay dos instancias, pero imagina si hay millones de instancias. 
 * Eso sería un montón de variables duplicadas.
 * 
 * Una mejor forma es utilizar el prototype de Bird. Las propiedades del prototype se comparten entre TODAS las 
 * instancias de Bird. A continuación se explica cómo añadir numLegs al prototipo Bird prototype:
*/

Bird.prototype.numLegs = 2;

/**
 * Ahora todas las instancias de Bird tienen la propiedad numLegs.
*/

console.log(duck.numLegs);
console.log(canary.numLegs);

/** 
 * Dado que todas las instancias tienen automáticamente las propiedades en el prototype, piensa en prototype como 
 * una "receta" para crear objetos. Ten en cuenta que el prototype de duck y canary es parte del constructor Bird 
 * como Bird.prototype. Casi todos los objetos en JavaScript tienen una propiedad prototype que es parte de la 
 * función constructora que lo creó.
*/





//------------------------------------------------------------------------
// ** Itera sobre todas las propiedades **

/**
 * Podemos iretar sobre las propiedades, separando las que son propiedades directas y propiedades prototype 
*/

function Bird(name){
    this.name = name;
}

Bird.prototype.numLegs = 2;

let cat = new Bird("Donald");

/**
 * A continuacion, se explica como se agregan las propiedades directas de cat al arreglo ownProps y las propiedades
 * prototype al arreglo prototypeProps 
*/

let ownPropss = [];
let prototypePropss = [];

for (let property in cat){
    if(cat.hasOwnProperty(property)){
        ownPropss.push(property);
    } else {
        prototypePropss.push(property);
    }
}

console.log(ownProps); // ["name"]
console.log(prototypePropss); // ["numLegs"]





//------------------------------------------------------------------------
// ** Entiende la propiedad constructor **

let duckf = new Bird();
let beagle = new Dog();

console.log(duckf.constructor === Bird); 
console.log(beagle.constructor === Dog);




//------------------------------------------------------------------------
// ** Cambia el prototipo a un nuevo objeto **

Bird.prototype.eat = function() {
    console.log("nom nom nom");
}
  
Bird.prototype.describe = function() {
    console.log("My name is " + this.name);
}

// Forma resumida
Bird.prototype = {
    numLegs: 2, 
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
};




//------------------------------------------------------------------------
// ** Recuerda establecer la propiedad "constructor" al cambiar el prototipo **

/**
 * Hay un efecto secundario crucial de ajustar manualmente el prototipo a un nuevo objeto. ¡Elimina la 
 * propiedad constructor! Esta propiedad puede ser usada para verificar cuál función de constructor creó 
 * la instancia. Sin embargo, dado que la propiedad ha sido sobrescrita, ahora devuelve resultados falsos.
 * 
 * Para solucionar esto, cada vez que un prototipo se establece de forma manual a un nuevo objeto, 
 * recuerda definir la propiedad constructor:
*/

Bird.prototype = {
    constructor: Bird,
    numLegs: 2,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name); 
    }
};





//------------------------------------------------------------------------
// ** Entendiendo de donde viene el prototipo de un objeto **

/**
 * Los objteos tambien heredan su prototype directamente de la funcion constructor que lo creo. Por ejemplo.
 *  
*/

function Bird(name){
    this.name = name;
}

let duckt = new Bird("Donald");

// duckt hereda su prototype de la funcion constructor Bird. Puedes mostrar esta relacion con el metodo
// isPrototypeOf

Bird.prototype.isPrototypeOf(duckt); // true




//------------------------------------------------------------------------
// ** Comprende la cadena "prototype" **

/**
 * Todos los objetos en JavaScript (con algunas excepciones) tienen un prototype. Además, el prototype de un 
 * objeto en sí mismo es un objeto.
*/

function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;

/**
Debido a que prototype es un objeto, ¡unprototype puede tener su propio prototype! En este caso, el prototype 
de Bird.prototype es Object.prototype:
*/

Object.prototype.isPrototypeOf(Bird.prototype);

/*
¿Por qué sería útil? Quizás recuerdes el método hasOwnProperty del desafío pasado:
*/

let duckg = new Bird("Donald");
duckg.hasOwnProperty("name");

/*
El método hasOwnProperty se define en Object.prototype al cual se puede acceder con Bird.prototype, al que se 
puede acceder con duck. Este es un ejemplo de la cadena prototype. En esta cadena prototype, Bird es el 
supertype de duck mientras que duck es el subtype. Object es un supertype de Bird y duck. Object es un 
supertype de todos los objetos en JavaScript. Por lo tanto, cualquier objeto puede utilizar el método 
hasOwnProperty.
*/





//------------------------------------------------------------------------
// **