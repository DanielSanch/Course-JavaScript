/**
 * Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas. 
 * Asegúrate de que el resto de la palabra esté en minúsculas.
 * 
 * Como propósito de este ejercicio, debes también usar mayúsculas conectando palabras 
 * como the y of.
*/

function titleCase(str) {
    str = str.toLowerCase();
    str = str.replace(/(^|\s)\S/g, x => x.toUpperCase());
    return str;
  }
  
  console.log(titleCase("I'm a little tea pot".toLowerCase()));
  console.log(titleCase("I'm a little tea pot".toUpperCase()));