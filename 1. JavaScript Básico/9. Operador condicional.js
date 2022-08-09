//------------------------------------------------------------------------
// ** Usa el operador condicional (ternario) **

function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater or equal";
}//    Condicion   true           false

//------------------------------------------------------------------------
// ** Usar multiples ternarios **

function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" 
      : (a > b) ? "a is greater" 
      : "b is greater";
}

// Ver si un numero es mayor, menor o igual a 0

function checkSign(num) {
  return num > 0 ? "positive"
    : num < 0 ? "negative"
    : "zero";
}

checkSign(10);

//------------------------------------------------------------------------
// ** PROBLEMA RECURSION Utiliza recursión para crear una cuenta regresiva **

/*
   El caso base le dice a la función recursiva cuando no necesita llamarse 
   a sí misma. Es un caso simple donde el valor de retorno ya se conoce. 
   También habrá una llamada recursiva la cual ejecuta la función original 
   con argumentos diferentes. Si la función se escribe correctamente, 
   eventualmente el caso base será alcanzado.

  Por ejemplo, digamos que quieres escribir una función recursiva que 
  devuelva un arreglo conteniendo los números 1 hasta n. Esta función 
  necesitará aceptar un argumento, n que representa el número final. Entonces 
  necesitará llamarse a sí misma con valores progresivamente más pequeños de 
  n hasta que alcance 1. Podrías escribir la función de la siguiente manera:
*/

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));

/*
  El valor [1, 2, 3, 4, 5] se mostrará en la consola.

Al principio, esto parece contraintuitivo ya que el valor de n disminuye, pero 
los valores en el arreglo final se están incrementando. Esto sucede porque la 
inserción ocurre al último, después de la llamada recursiva. En el punto donde 
n es empujado en el arreglo, countup(n - 1) ya ha sido evaluada y devuelto 
[1, 2, ..., n - 1].
*/

//----------------------------------------------------------------------------
/*
  Hemos definido una función llamada countdown con un parámetro (n). La función 
  debe usar recursión para devolver un arreglo conteniendo los n enteros hasta 1 
  basado en el parámetro n. Si la función es llamada con un número menor a 1, la 
  función debe devolver un arreglo vacío. Por ejemplo, llamar esta función con 
  n = 5 debe devolver el arreglo [5, 4, 3, 2, 1]. Tu función debe usar recursión 
  llamándose a sí misma y no debe usar bucles de ningún tipo.
*/

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n); //Agrega al inicio de arr
    return arr;
  }
}

function countdown(n){
  return n < 1 ? [] : [n].concat(countdown(n - 1)); // Concatenar
}

function countdown(n){
  return n < 1 ? [] : [n, ...countdown(n - 1)]; // Los ... repiden el llamado en la
  // funcion y concatenan.
}


//------------------------------------------------------------------------
// ** PROBLEMA Uso recursion para crear un rango de numeros **

/*
  Hemos definido una función llamada rangeOfNumbers con dos parámetros. La 
  función debe devolver un arreglo de enteros que comienza con el número 
  representado por el parámetro startNum y termina con el número representado 
  por el parámetro endNum. El número inicial será siempre menor o igual que el 
  número final. Tu función debe utilizar recursión, llamándose a sí misma, y 
  no utilizar bucles de ningún tipo. También debe funcionar en el caso que 
  startNum y endNum sean iguales.
*/

function rangeOfNumbers(startNum, endNum) {
  return startNum > endNum ? [] : [startNum, ...rangeOfNumbers(startNum + 1, endNum)]
};

console.log(rangeOfNumbers(1,20));



function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum){
    return [];
  } else {
    const array = rangeOfNumbers(startNum + 1, endNum);
    array.unshift(startNum);
    return array;
  }
};

console.log(rangeOfNumbers(1,20));