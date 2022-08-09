//------------------------------------------------------------------------
// ** Usa logica condicional con las sentencias "If" **

function trueOrFalse(wasThatTrue) {

    if (wasThatTrue) {
      return "Yes, that was true";
    }
    return "No, that was false";
  
  }

//------------------------------------------------------------------------
// ** Comparacion con el operador de igualdad **

/* El operador mas basico es de igualdad == */

if(1 == 1){
    return "Yes";
};

//Si los tipos de datos son diferentes, estos se convierten
// Coercion de tipo

    1   ==  1  // true
    1   ==  2  // false
    1   == '1' // true
    "3" ==  3  // true

//------------------------------------------------------------------------
// ** Comparación con el operador de estricta igualdad **

/*
    La estricta igualdad (===) es la contraparte del operador de igualdad (==).
    Sin embargo, a diferencia del operador de igualdad, el cual intenta
    convertir ambos valores comparados a un tipo comun, el operador de estricta
    igualdad no realiza una conversion de tipo.

    Si los valores que se compraran tiene diferentes tipos, se consideran
    desiguales, y el operador de estricta igualdad devolvera falso.
*/

3 === 3   // true
3 === '3' // false

//------------------------------------------------------------------------
// ** Operadores **

// ==       Igualdad
// ===      Estricta igualdad
// !=       Desigualdad
// !===     Estricta desigualdad
// >        Mayor que
// >=       Mayor o igual que
// <        Menor que
// <=       Menor o igual que

//------------------------------------------------------------------------
// ** Operadores logicos **

// &&       And
// ||       Or

//------------------------------------------------------------------------
// ** PROBLEMA Codigo de golf **

/* 
  En el juego de Golf, cada agujero tiene un par, que significa, el número 
  promedio de strokes que se espera que haga un golfista para hundir la 
  pelota en el agujero para completar el juego. Dependiendo de qué tan por 
  encima o por debajo del par estén tus strokes, hay un nombre diferente.

  Tu función recibirá los argumentos par y strokes. Devuelve la cadena 
  correcta según esta tabla que muestra los golpes en orden de prioridad; 
  superior (más alto) a inferior (más bajo):

  Strokes (golpes)	Devuelve
        1	         "Hole-in-one!"
    <= par - 2	    "Eagle"
      par - 1	      "Birdie"
      par	          "Par"
      par + 1	      "Bogey"
      par + 2	      "Double Bogey"
    >= par + 3	    "Go Home!"

  par y strokes siempre serán numéricos y positivos. Hemos añadido un 
  arreglo de todos los nombres para tu conveniencia.
*/

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Cambia solo el código debajo de esta línea
  if (strokes == 1){
    return names[0];
  } else if(strokes <= (par - 2)){
    return names[1];
  } else if(strokes == (par -1)){
    return names[2];
  } else if(strokes == par){
    return names[3];
  } else if(strokes == (par + 1)){
    return names[4];
  } else if(strokes == (par + 2)){
    return names[5];
  } else if(strokes >= (par + 3)){
    return names[6];
  } else {
    return "Change Me";
  }
  // Cambia solo el código encima de esta línea
}

golfScore(5, 4);


