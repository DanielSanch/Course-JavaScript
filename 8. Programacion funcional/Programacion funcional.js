//------------------------------------------------------------------------
// ** Aprende sobre programacino funcional **

/**
 * La programacion funcional es un estilo de programacion donde las soluciones son simples, funciones aisladas, sin
 * ningun efecto secundario fuera del ambito de la funcion: INPUT => PROCESS => OUTPUT
 * 
 * 1. Funciones ailadas: sin deoendencia alguna del estado del programa, el cual incluye variabls globales
 * sujetas a cambios.
 * 
 * 2. Funciones puras: una misma entrada siempre da la misma salida
 * 
 * 3. Funciones con efectos secundarios limitados: culaquier cambio o mutacion en el estado del programa fuera de
 * funcion son cuidadodamente controlados
*/




//------------------------------------------------------------------------
// ** Comporende la terminologia de la programacion funcional **

/**
 * Terminologia de la programacion funciona
 * 
 * Callbacks: son las funciones que se deslizan o pasan a otra funcion para decidir la invocacion de esa 
 * funcion. Es posible que las hayas visto pasar a otros metodos, por ejemplo en filter, la funcion callback
 * le dice a JavaScript los criterios para filtrar un arreglo.
 * 
 * Las funciones que pueden ser asignadas a una variable, pasadas a otra funcion o devueltas desde otra funcion
 * como cualquier otro valor normal, se llaman funciones de primera clase. En JavaScript, todas las funciones
 * son funciones de primera clase.
 * 
 * Las funciones que toman una funcion como argumento o devuelven una funcion como valor de retorno se llaman
 * funciones de orden superior.
 * 
 * Cuando las funciones se pasan o se devuelven desde otra funcion, las funciones que se pasaron o devolvieron se
 * pueden llamar lambda.
*/




//------------------------------------------------------------------------
// ** Comprende los peligros de unsar el codigo imperativo **

// tabs es un arreglo de títulos de cada sitio abierto dentro de la ventana
const Window = function(tabs) {
    this.tabs = tabs; // Mantenemos un registro del arreglo dentro del objeto
  };
  
  // Cuando unes dos ventanas en una
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // Cuando abres una nueva pestaña al final
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Abramos una nueva pestaña por ahora
    return this;
  };
  
  // Cuando cierras una pestaña
  Window.prototype.tabClose = function(index) {
  
    // Cambia solo el código debajo de esta línea
  
    const tabsBeforeIndex = this.tabs.slice(0, index); // Obtiene las pestañas antes de la pestaña
    const tabsAfterIndex = this.tabs.slice(index + 1, index.length); // Obtiene las pestañas después de la pestaña
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Únelos juntos
  
    // Cambia solo el código encima de esta línea
  
    return this;
   };
  
  // Vamos a crear tres ventanas del navegador
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Tu casilla de correo, drive y otros sitios de trabajo
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Sitios sociales
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Sitios de entretenimiento
  
  // Ahora completa la apertura de la pestaña, cierre, y otras operaciones
  const finalTabs = socialWindow
    .tabOpen() // Abre una nueva pestaña para memes de gatos
    .join(videoWindow.tabClose(2)) // Cierra la tercera pestaña en videoWindow y une
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);





//------------------------------------------------------------------------
// ** Evita mutaciones y efectos secundatios utilizando programacion funcional **

/**
 * En la programacion funcinal, cambiar o alterar cosas se denomina mutacion, y el resultado es conocido como
 * efecti secudario. Una funcion, idealmente, debe ser una funcion pura, lo que significa que no provoca ningun
 * efecfto secundario.
 */