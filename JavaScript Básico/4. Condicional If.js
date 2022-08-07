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

