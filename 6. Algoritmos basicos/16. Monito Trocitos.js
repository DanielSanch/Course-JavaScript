/**
 * Escribe una función que divida un arreglo (primer argumento) en grupos de la 
 * longitud size (segundo argumento) y los devuelva como un arreglo bidimensional.
*/

function chunkArrayInGroups(arr, size) {
    let newArr = [];
    let start = 0;
    for (let i = 0; i < arr.length/size; i++){
      newArr.push(arr.slice(start, start + size));
      start = size + start;
    }
    return newArr;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d", "e"], 2));


// Otra forma resumida
function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }
    return newArr;
  }