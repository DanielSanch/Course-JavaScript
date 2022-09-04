//------------------------------------------------------------------------
// ** Usa el metodo map para extraer datos de un arreglo **

/**
 * El metodo map iterara sobre cada elemento de un arreglo y devuelve un nuevo arreglo que contiene los resultados
 * de llamar a la funcion callback en cada elemento. Esto lo hace sin mutar el arreglo original.
 * 
 * map(user => user.name);
 * 
 *  El primer argumento es el elemento actual que se está procesando. 
 *  El segundo es el índice de ese elemento.
 *  El tercero es el arreglo sobre el que se llamó al método
*/


const ratings = watchList.map(item =>
    ({
    title: item["Title"],
    rating: item["imdbRating"]
  })
  );
  
  console.log(JSON.stringify(ratings));
  
  
  /**
   * Escribe tu propio Array.prototype.myMap(), el cual debe comportarse exactamente como Array.prototype.map(). 
   * No debes utilizar el método incorporado map. Se puede acceder a la instancia de Array en el método myMap 
   * usando this.
   */
  
  // La variable global
  const s = [23, 65, 98, 5];
  
  Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Cambia solo el código debajo de esta línea
    for (let i = 0; i < this.length; i++){
      newArray.push(callback(this[i]));
    }
    // Cambia solo el código encima de esta línea
    return newArray;
  };
  
  const new_s = s.myMap(function(item) {
    return item * 2;
  });