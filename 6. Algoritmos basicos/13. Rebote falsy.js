/**
 * Quita todos los valores falsos de un arreglo.
 * 
 * Los valores falsos en JavaScript son false, null, 0, "", undefined y NaN.

    Sugerencia: Intenta convertir cada valor a booleano.
 */

    function bouncer(arr) {
        let newArr = [];
        for (let i in arr){
          if (arr[i]){
            newArr.push(arr[i]);
          }
        }
        return newArr;
      }
      
      console.log(bouncer([false, null, 0, NaN, undefined, "", 23]));
      console.log(typeof undefined == "undefined");