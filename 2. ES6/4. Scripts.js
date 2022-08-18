//------------------------------------------------------------------------
// ** Crea un modulo para scripts **

// Conectar JS con HTML

<script type="module" src="filename.js"></script>

/**
 * Un script que utilice este modulo ahora podra utilizar las caracteristicas
 * import y export.
*/





//------------------------------------------------------------------------
// ** Utiliza la exportacion para compartir un bloque de codigo **

// De un archivo JS no se va a exportar todo solo las funciones que se desean
// La mejor forma es asi.

const add = (x, y) => {
    return x + y;
}

export { add }; // Aca pueden ir todas las funciones que se desean exportar.





//------------------------------------------------------------------------
// ** Reutiliza codigo de JavaScript utilizando import **

// Usado en el archivo donde se desean utilizar las funciones exportadas
// anteriormente

import { add, subtract } from './math_functions.js';





//------------------------------------------------------------------------
// ** Usa * para importar todo de un archivo **

import * as myMatgModule from "./math_functions.js";





//------------------------------------------------------------------------
// ** Crear un fallback de exportacion con export default **

/**
 * Se usa esta sintaxis, si es solo un valor el que esta siendo exportado
 * desde un archivo. Tambien es utilizado para crear valores fallback para
 * un archivo o modulo.
 */

export default function add(x, y){ // Funcion nombrada
    return x + y;
}

export default function(x, y){  // Funcion anonima
    return x + y;
}

/**
 * Solo se puede tener un valor que sea exportacion por defecto en cada modulo.
 * No se puede usar export default con var, let o const.
*/





//------------------------------------------------------------------------
// ** Importa una exportacion por defecto **

/**
 * Hay un cambio en la forma de importar por defecto y son los {}
 */

import add from "./math_functions.js";





//------------------------------------------------------------------------
// ** Crea una promesa de JavaScript **

/**
 * Se utiliza para hacer una promesa de que haras algo, habitualmente
 */