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

// Otra forma de uso de acceder a objetos con variables es
const someObj = {
    propName: "John"
};

function propPrefix(str){
    const s = "prop";
    return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);

//------------------------------------------------------------------------
// **  Añade nuevas propiedades a un objeto de JavaScript **

/*
    Se pueden añadir propiedades de la misma forma que se actualiza el valor
    de una propiedad, solo llamandolo.
*/

ourDog.bark = "bow-wow";
ourDog["bark"] = "bow-wow";

//------------------------------------------------------------------------
// ** Elimina propiedades en un objeto de JavaScript **

/*
    Usando la propiedad delete
*/

delete ourDog.bark;

//------------------------------------------------------------------------
// ** Usa objetos para hacer busquedas **

/*
    Los objetos puedes ser considerados como un almacenamiento de 
    clave/valor como un diccionario. Reemplazando una declaracion switch 
    o if/else
*/

function phoneticLookup(val) {
    let result = "";

    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }

    result = lookup[val];
    return result;
}

console.log(phoneticLookup("charlie"));

//------------------------------------------------------------------------
// ** Verificar las pripiedades de un objeto **

/*
    A veces es util comprobar si existe o no la propiedad de un objeto dado.
    Podemos utilizar el metodo .hasOwnProperty(propname) para determinar
    si un objeto tiene una propiedad con ese nombre. Este devuelve
    true o false.
*/

const myObj2 = {
    top: "hat",
    bottom: "pants"
};

myObj2.hasOwnProperty("top"); // true
myObj2.hasOwnProperty("middle") // false

//------------------------------------------------------------------------
// ** Manipulando objetos complejos **

const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "Cristian Nodal", 
      "title": "Botella tras botella",
      "release_year": 2021,
      "formats": [
        "mp3",
        "AV"
      ]
    }
  ];

//------------------------------------------------------------------------
// ** Accede a objetos anidados **

const ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };
  
  ourStorage.cabinet["top drawer"].folder2;
  ourStorage.desk.drawer;

//------------------------------------------------------------------------
// ** Accede a arreglos anidados **

const ourPets = [
    {
      animalType: "cat",
      names: [
        "Meowzer",
        "Fluffy",
        "Kit-Cat"
      ]
    },
    {
      animalType: "dog",
      names: [
        "Spot",
        "Bowser",
        "Frankie"
      ]
    }
  ];
  
  ourPets[0].names[1];
  ourPets[1].names[0];

//------------------------------------------------------------------------
// ** PROBLEMA Colecicon de discos **

/*
  Se te da un objeto literal que representa una parte de tu colección de 
  álbumes musicales. Cada álbum tiene un número de id único como clave y 
  varias otras propiedades. No todos los álbumes tienen una información 
  completa.

    Empiezas con una función updateRecords la cual toma un objeto literal, 
    records, que contiene el álbum musical de la colección, un id, prop 
    (como artist o tracks), y value. Completa la función usando las reglas 
    siguientes para modificar el objeto pasado a la función.

    ~   Tu función siempre debe devolver el objeto de colección de registros 
        completo.
    ~   Si prop no es tracks y value no es una cadena vacía, actualiza o 
        establece la propiedad prop del album a value.
    ~   Si prop es tracks pero el álbum no tiene una propiedad tracks, crea 
        un arreglo vacío y agrégale value a él.
    ~   Si prop es tracks y value no es una cadena vacía, agrega value al 
        final del arreglo de tracks existentes del álbum.
    ~   Si value es una cadena vacía, elimina esa propiedad prop del álbum.

    Nota: Se usa una copia del objeto recordCollection para las pruebas.
*/


// Configuración
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Cambia solo el código debajo de esta línea
  function updateRecords(records, id, prop, value) {
    if (prop != "tracks" && value != ""){
      records[id][prop] = value;
    } else if(prop == "tracks" && records[id].hasOwnProperty("tracks") == false){
      records[id][prop] = [];
      records[id][prop].push(value);
    } else if(prop == "tracks" && value != ""){
      records[id][prop].push(value);
    } else if(value == ""){
      delete records[id][prop];
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
  updateRecords(recordCollection, 2548, "artist", "");
  updateRecords(recordCollection, 2468, "tracks", "Free");
  updateRecords(recordCollection, 2548, "tracks", "");
  updateRecords(recordCollection, 1245, "albumTitle", "Riptide");