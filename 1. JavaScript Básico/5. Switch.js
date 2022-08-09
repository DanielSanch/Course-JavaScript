//------------------------------------------------------------------------
// ** Seleccionando entre muchas opciones con declarador switch **

/*
    Si tienes muchas opciones para elegir, usa una declaración switch.
    Una sentencia switch prueba un valor y puede tener muchas
    sentencias case que definen varios posibles. Las sentencias se
    ejecutan desde el primer valor case coincidente hasta que se
    encuentre un break.
*/

// Los valores en las sentencias case se prueban con igualdad estricta ===

function caseInSwitch(val){
 let answer = "";
 
 switch (val) {
    case 1:
        answer = "alpha";
        break;
    case 2:
        answer = "beta";
        break;
    case 3:
        answer = "gamma";
        break;
    case 4: 
        answer = "delta";
        break;
    default:
        break;
 }

 return answer;
}

caseInSwitch(1);

//------------------------------------------------------------------------
// ** Multiples opciones identicas en las declaraciones "switch" **

// Si se omite la sentencia break se ejecutara el siguiente case y asi
// continuamente. Esto es util en algunos casos.

function sequentialSizes(val){
    let answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7: 
        case 8:
        case 9:
            answer = "High";
        default:
            break;
    }
    return answer;
}

sequentialSizes(1);


//------------------------------------------------------------------------
// ** Comparaciones directas **

// Se pueden realizar operaciones logicas en una unica linea

let variable = (3 === 3);

// 3 === 3  true
// 3 < 2    false

//------------------------------------------------------------------------
// ** PROBLEMA Conteo de cartas **

/*
    En el juego de casino Blackjack, un jugador puede determinar si tiene 
    una ventaja en la siguiente mano sobre la casa llevando la cuenta del 
    número relativo de cartas altas y bajas que quedan en la baraja. 
    Esto se llama cuenta de tarjetas.

    Tener más cartas altas en la baraja es una ventaja para el jugador. 
    Se le asigna un valor a cada carta de acuerdo a la siguiente tabla. 
    Cuando el conteo es positivo, el jugador debería apostar alto. Cuando 
    el conteo da 0 o negativo, el jugador debería apostar bajo.

    Cambios del conteo	Cartas
    +1	                2, 3, 4, 5, 6
    0	                7, 8, 9
    -1	                10, 'J', 'Q', 'K', 'A'

    Escribirás una función para contar cartas. Recibirá un parámetro card 
    (carta) que puede ser un número o una cadena y aumentar o reducir la 
    variable global count (conteo) de acuerdo al valor de la carta 
    (observa la tabla). La función devolverá una cadena con el conteo actual 
    y la cadena Bet (Apuesta) si el conteo es positivo, o Hold (Espera) si 
    el conteo es cero o negativo. El conteo actual y la decisión del jugador 
    (Bet o Hold) deben estar separados por un solo espacio.

    Resultados de ejemplo: -3 Hold o 5 Bet

Sugerencia
NO reinicies count a 0 cuando el valor sea 7, 8 o 9. NO devuelvas un arreglo.
NO incluyas comillas (individuales o dobles) en el resultado.
*/

let count = 0;

function cc(card) {
  // Cambia solo el código debajo de esta línea
  switch (card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
    default:
      break;
  }

  if (count > 0){
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Cambia solo el código encima de esta línea
}

cc(2) + cc(3) + cc(7) + cc('K') + cc('A');