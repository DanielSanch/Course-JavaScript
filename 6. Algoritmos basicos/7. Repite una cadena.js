/**
 * Repite una cadena dada str (primer argumento) por un número (num) de veces (segundo argumento). 
 * Devuelve una cadena vacía si num no es un número positivo. Para este desafío, 
 * no utilices el método incorporado .repeat().
 */

 function repeatStringNumTimes(str, num) {
    let arrRepeat = "";
    for (let i=0; i < num;i++){
      arrRepeat += str;
    }
    return arrRepeat;
  }
  
  console.log(repeatStringNumTimes("abc", 3));