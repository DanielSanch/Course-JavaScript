/**
 *  Invierte la cadena proporcionada.

    Es posible que necesites convertir la cadena en un arreglo antes de poder invertirla.

    Tu resultado debe ser una cadena.
 */

    function reverseString(str) {
        let newStr = "";
        for (let x = str.length - 1; x >= 0; x--){
          newStr += str[x];
        }
        return newStr;
    }
      
      console.log(reverseString("hello"));



      
    function reverseString(str) {
        return str
          .split("")
          .reverse()
          .join("");
    }