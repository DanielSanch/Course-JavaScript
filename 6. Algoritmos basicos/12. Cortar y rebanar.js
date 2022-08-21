/**
 * Tienes dos arreglos y un índice.
 * Copia cada elemento del primer arreglo en el segundo arreglo, en orden.
 * Comienza insertando elementos en el índice n del segundo arreglo.
 * Devuelve el arreglo resultante. Los arreglos de entrada deben permanecer iguales luego de que se ejecute la función.
*/

function frankenSplice(arr1, arr2, n) {
    return arr2 = [...arr2.slice(0,n), ...arr1.slice(0, arr1.length), ...arr2.slice(n, arr2.length)];
  }
  
  console.log(frankenSplice([1, 2], ["a", "b"], 1));