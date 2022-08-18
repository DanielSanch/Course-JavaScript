//------------------------------------------------------------------------
// ** Crea una promesa de JavaScript **

/**
 * Se utiliza para hacer una promesa de que haras algo, habitualmente de
 * forma asincrona. Cuando la tarea se completa, o cumples tu promesa o no
 * la cumples. Promise es una funcion constructora, asi que tu necesitas usar
 * la palabra clave new para crear una. Recibe una funcion como su argumento,
 * con dos parametros: resolve y reject.
 */

 const myPromise = new Promise((resolve, reject) => {

});

// Tiene 3 estados posiles
/**
 * pending      pendiente
 * fulfilled    resuelta
 * rejected     fallida
 */

 const myPromise2 = new Promise((resolve, reject) => {
    if("condition here"){
        resolve("Promise was fulfilled");
    } else {
        reject("Promise was rejected");
    }
});





//------------------------------------------------------------------------
// ** Maneja una promesa cumplida usando then **

/**
 * El metodo then, se ejecuta inmediatamente despues de que tu promesa se 
 * cumple con resolve
 */

myPromise.then(result => { // result viene con el argumento al metodo resolve

});





//------------------------------------------------------------------------
// ** Maneja una promesa rechazada usando catch **

/**
 * Es el metodo utilizado cuando la promesa ha sido rechazada. Se ejecuta
 * inmediatamente, despues de que se llama al metodo reject de una promesa.
 */

myPromise.catch(error => { // error es el argumento pasado al metodo reject

});

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer es establecido a false para representar una respuesta no satisfactoria del servidor
    let responseFromServer = false;
  
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
});
  
makeServerRequest.then(result => {
    console.log(result);
});
  
makeServerRequest.catch(error => {
    console.log(error);
})