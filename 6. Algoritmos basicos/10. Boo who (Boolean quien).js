/**
 * Comprueba si el valor está clasificado como booleano primitivo. 
 * Devuelve true o false.
 * 
 * Booleanos primitivos son true y false.
 */

 function booWho(bool) {
    return typeof bool == "boolean" ? true : false; 
  }
  
  console.log(booWho(true));