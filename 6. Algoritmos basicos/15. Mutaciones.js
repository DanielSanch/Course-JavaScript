/**
 * Devuelve true si la cadena de caracteres en el primer elemento del arreglo 
 * contiene todas las letras de la cadena en el segundo elemento del arreglo.
 * 
 * Por ejemplo, ["hello", "Hello"], debe devolver true porque todas las letras 
 * de la segunda cadena están presentes en la primera, ignorando mayúsculas o 
 * minúsculas.
 * 
 * Los argumentos ["hello", "hey"] deben devolver false porque la cadena hello 
 * no contiene y.
 * 
 * Finalmente, ["Alien", "line"], debe devolver true porque todas las letras 
 * de line están presentes en Alien.
*/

function mutation(arr) {
    arr = [arr[0].toLowerCase(), arr[1].toLowerCase()];
    let validator = true;
    let arr2 = arr[1].split('');
    console.log(arr2);
    for (let i in arr2){
      if (arr[0].indexOf(arr2[i]) == -1){
        return validator = false;
      }
    }
    return validator;
  }
  
  console.log(mutation(["hello", "Hello"]));