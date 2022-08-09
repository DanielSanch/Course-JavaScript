//------------------------------------------------------------------------
// ** Construye objetos en JavaScript **

/*
    Los objetos son similarea a los arreglos, excepto que en lugar de
    usar indices para acceder y modificar sus datos, accedes a los objetos
    a traves de propiedades.

    Los objetos son utiles para almacenar datos de forma estructurada y
    pueden representar objetos del mundo real.
*/

const cat = {
    "name": "Hannah",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
};

/*
    Se pueden tambien utilizar numeros como propiedades. Incluso se pueden
    omitir las comillas en las propiedades de cadenas de una sola palabra.
    Sin embargo, si el objeto tiene propiedades que no son cadenas, JS las
    convertira automaticamente en cadenas.
*/

const anotherObject = {
    make: "Ford",
    5: "five",
    "model": "focus"
};

//------------------------------------------------------------------------
// ** Accede a propiedades de objetos con notacion de puntos **

/*
    Hay tres formas de llamar a una propiedad de un objeto:
        myObj.propiedad1;
        myObj["propiedad1"];

        Por medio de una variable con el nombre de la propiedad
        let prop = "propiedad1";
        myVar.[prop]
*/

const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj["shirt"];

const zapato = "shirt";
const shoesValue = testObj[zapato];