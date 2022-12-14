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
 * Dado que numLegs probablemente tendr??n el mismo valor para todas las instancias de Bird, esencialmente tienes 
 * una variable duplicada numLegs dentro de cada instancia de Bird.
 * 
 * Esto puede que no sea un problema cuando s??lo hay dos instancias, pero imagina si hay millones de instancias. 
 * Eso ser??a un mont??n de variables duplicadas.
 * 
 * Una mejor forma es utilizar el prototype de Bird. Las propiedades del prototype se comparten entre TODAS las 
 * instancias de Bird. A continuaci??n se explica c??mo a??adir numLegs al prototipo Bird prototype:
*/

Bird.prototype.numLegs = 2;

/**
 * Ahora todas las instancias de Bird tienen la propiedad numLegs.
*/

console.log(duck.numLegs);
console.log(canary.numLegs);

/** 
 * Dado que todas las instancias tienen autom??ticamente las propiedades en el prototype, piensa en prototype como 
 * una "receta" para crear objetos. Ten en cuenta que el prototype de duck y canary es parte del constructor Bird 
 * como Bird.prototype. Casi todos los objetos en JavaScript tienen una propiedad prototype que es parte de la 
 * funci??n constructora que lo cre??.
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
 * Hay un efecto secundario crucial de ajustar manualmente el prototipo a un nuevo objeto. ??Elimina la 
 * propiedad constructor! Esta propiedad puede ser usada para verificar cu??l funci??n de constructor cre?? 
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
 * Todos los objetos en JavaScript (con algunas excepciones) tienen un prototype. Adem??s, el prototype de un 
 * objeto en s?? mismo es un objeto.
*/

function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;

/**
Debido a que prototype es un objeto, ??unprototype puede tener su propio prototype! En este caso, el prototype 
de Bird.prototype es Object.prototype:
*/

Object.prototype.isPrototypeOf(Bird.prototype);

/*
??Por qu?? ser??a ??til? Quiz??s recuerdes el m??todo hasOwnProperty del desaf??o pasado:
*/

let duckg = new Bird("Donald");
duckg.hasOwnProperty("name");

/*
El m??todo hasOwnProperty se define en Object.prototype al cual se puede acceder con Bird.prototype, al que se 
puede acceder con duck. Este es un ejemplo de la cadena prototype. En esta cadena prototype, Bird es el 
supertype de duck mientras que duck es el subtype. Object es un supertype de Bird y duck. Object es un 
supertype de todos los objetos en JavaScript. Por lo tanto, cualquier objeto puede utilizar el m??todo 
hasOwnProperty.
*/





//------------------------------------------------------------------------
// ** Usa herencia para que no te repitas **

/**
 * Hay un principio en la programacion llamado No te repitas (Don't Repeat Yourself "DRY"). La razon por la que
 * el codigo repetido es un problmea es porque cualquier tipo de cambio requiere corregir en multiples lugares.
 * Esto suelle significar mas trabajo para los programadores y mas espacio para errores.
*/

Bird.prototype = {
    constructor: Bird,
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
  
  Dog.prototype = {
    constructor: Dog,
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

/**
 * El metodo describe se repite en dos lugares. El codigo se puede editar para seguir el principio DRY creando un
 * supertype (o padre) llamado Animal: 
*/

function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};





//------------------------------------------------------------------------
// ** Hereda commportamientos de un supertipo (supertype) **

/**
 * Para poder usar los supertypes o la tecnica mejor conocida como herencia, se deben realizar dos pasos. 
 * Primero crear una instancia con el operador new
 */

let animal = new Animal(); // Tiene algunas desventajas

animal = Object.create(Animal.prototype); // La mejor opcion

// Segundo paso es establecer el prototipo 

Bird.prototype = Object.create(Animal.prototype);





//------------------------------------------------------------------------
// ** Restablece una propiedad "constructor" heredada **

/**
 * Cuando un objeto hereda el prototype de otro objeto, tambien hereda la propiedad del constructor del
 * supertipo.
 * 
 * Solucion manual para cambiar el constructor
 */

duck.constructor; // supertype Animal

Bird.prototype.constructor = Bird;
duck.constructor; // Bird





//------------------------------------------------------------------------
// ** A??ade metodos despues de la herencia **

/**
 * Una funcion constructor que hereda su objeto prototype de una funcion constructor "supertype" puede seguir
 * teniendo sus propios metodos ademas de los heredados. 
*/




//------------------------------------------------------------------------
// ** Sobreescribir metodos heredados **

/**
 * Es posible sobreescribir un metodo heredado. Se hace de la misma manera: agregando un metodo a ChildObject.
 * prototype usando el mismo nombre de metodo que el que se va a sobreescribir.
 */

/**
 * duck => Esta eat() definido aqui? No
 * Bird => Esta eat() definido aqui? Si, ejecyta y detiene la busqueda
 * Animal => 
 */





//------------------------------------------------------------------------
// ** Utiliza un mixin oara a??adir un comportamiento comun entre objetos no relacionados **

/**
 * Un mixin permite a otros objetos utilizar una coleccion de funciones 
 */

let flyMixin = function(obj){
    obj.fly = function(){
        console.log("Flying, wooosh!");
    }
}

// El flyMixin toma a cualquier objeto y le da el metodo fly\

let plane = {
    model: "777",
    numPassengers: 524
};

flyMixin(duck);
flyMixin(plane);

/**
 * Aqui duck y plane son pasados a flyMixin el cual despues asigna la funcion fly acada objeto.
 * Ahora duck y placne pueden volar.
 */

plane.fly();





//------------------------------------------------------------------------
// ** Utiliza closures para evitar que las propiedades de un objeto se puedan modificar desde afuera **

/**
 * Para evitar que se modifiquen las variables de un objeto, se puede hacer asi
 */

function Birdd(){
    let hatchedEgg = 10;

    this.getHatchedEggCount = function(){
        return hatchedEgg;
    };
}

let ducky = new Birdd();
ducky.getHatchedEggCount();





//------------------------------------------------------------------------
// ** Comprende las funcinoes que son invocadas inmediatamente (IIFE) **

(function () {
    console.log("Chirp, chirp!");
})();

/**
 * Esta es una expresi??n de funci??n an??nima que se ejecuta de inmediato y produce Chirp, chirp! 
 * inmediatamente.
 * 
 * Ten en cuenta que la funci??n no tiene nombre y que no se almacena en un valor. Los dos par??ntesis () 
 * al final de la expresi??n de la funci??n hacen que se ejecute o invoque de forma inmediata. Este patr??n 
 * se conoce como una expresi??n de funci??n inmediatamente invocada o IIFE (por sus siglas en ingl??s).
 */





//------------------------------------------------------------------------
// ** Utiliza una IIFE para crear un modulo **

/**
 * Una expresion de funcion inmediatamente invocada se uliza para agrupar la funcinoalidad relacionada en un
 * solo objeto o modulo.
 */

function glideMixin(obj) {
    obj.glide = function() {
      console.log("Gliding on the water");
    };
}
function flyMixin(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    };
}

// Podemos agrupar estos misins en un modulo

let motionModule = (function (){
    return {
        glideMixin: function(obj) {
            obj.glide = function() {
                console.log("Gliding on the water");
            };
        },
        flyMixin: function(obj) {
            obj.fly = function() {
                console.log("Flying, wooosh!");
            };
        }
    }
})();
