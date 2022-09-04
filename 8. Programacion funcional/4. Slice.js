//------------------------------------------------------------------------
// ** Remueve elementos de un arreglo usando slice en lugar de splice **

/**
 * Reescribe la función nonMutatingSplice usando slice en lugar de splice. Debe limitar el arreglo 
 * proporcionado cities a una longitud de 3 y devolver un nuevo arreglo con solo los primeros tres 
 * elementos.
 * 
 * No modifiques el arreglo original proporcionado en la función.
 */

 function nonMutatingSplice(cities) {
    // Cambia solo el código debajo de esta línea
    return cities.slice(0,3);
  
    // Cambia solo el código encima de esta línea
  }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);