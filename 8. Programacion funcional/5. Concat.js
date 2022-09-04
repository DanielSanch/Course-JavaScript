//------------------------------------------------------------------------
// ** Combina dos arreglos utilizando el metodo "concat" **

[1, 2, 3].concat([4, 5, 6]);


// Usar concat en ves de push

function nonMutatingPush(original, newItem) {
    // Cambia solo el código debajo de esta línea
    return original.concat(newItem);
  
    // Cambia solo el código encima de esta línea
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingPush(first, second);