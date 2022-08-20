/**
 * Devuelve la longitud de la palabra más larga en la oración proporcionada.

    Tu respuesta debe ser un número.
 */

    function findLongestWordLength(str) {
        let numberStr = 0;
        let words = str.split(' ');
      
        for (let i = 0; i < words.length; i++){
          if (words[i].length > numberStr){
            numberStr = words[i].length;
          }
        }
        return numberStr;
      }
      
      console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
      