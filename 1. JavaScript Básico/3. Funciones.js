//------------------------------------------------------------------------
// ** Escribe JavaScript reutilizable utilizadno funciones **

function fuctionName(){
    console.log("Hello World");
}

fuctionName();

//------------------------------------------------------------------------
// ** Pasa valores a las funciones utilizando argumentos **

function functionWithArgs(param1, param2){
    console.log(param1 + param2);
}

functionWithArgs(3,2)

//------------------------------------------------------------------------
// ** Devuelve un valor de una funcion utilizando "Return" **

function plusThree(num) {
    return num + 3;
}

const answer = plusThree(5);

function timesFive(num) {
    return num * 5;
}

//------------------------------------------------------------------------
// ** Ambito global y funciones **

/*  Las variables se definen y funcionan segun el bloque en el que se
    crean, pero si se crea una variable sin indicar let o const, esta
    automaticamente se convierte como una variable global
*/

let myGlobal = 10;

function fun1(){
    oppsGlobal = 5;
}

function fun2(){
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    } 
    if (typeof oppsGlobal != "indefined") {
        output += " oopsGlobal: " + oppsGlobal;
    }
    console.log(output);
}

// En este ejemplo la funcion fun1 nunca se llamo, pero aun asi fun2 si 
// entregaria el valor de oopsGlobal, dado que es una variable global

//------------------------------------------------------------------------
// ** Ambito local y funciones **

/*  Las variables creadas dentro de una funcion, mantienen un ambito
    local, por lo cual si se usan por fuera de la funcion, mandaria error.
*/

function myLocalScope(){
    let myVar4 = "America";
    console.log('inside myLocalScope', myVar);
}

myLocalScope();

console.log('outside myLocalScope', myVar); // Da error porque no existe myVar

//------------------------------------------------------------------------
// ** Ambito global vs. local en funciones **

/*  Podemos tener variables locales y globales con el mismo nombre, cuando esto
ocurre la variable local sera la predominante. */

const outerWear = "T-Shirt";

function myOutfit(){
    const outerWear = "sweater"; 
    return outerWear; // Toma la variable local y no la global
}

myOutfit();

//------------------------------------------------------------------------
// ** Comprendiendo el valor indefinido devuelto por una funcion **

// Configuración
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive(){
  sum += 5;
}

addThree();
addFive();  //Modifican la variable global

//------------------------------------------------------------------------
// ** Asignacion con un valor devuelto **

let processed = 0;

function processArg(num) {
    return (num + 3) / 5; 
}

processed = processArg(7);

//------------------------------------------------------------------------
// ** Permanece en linea **

/*  Escribe una función nextInLine que tome un arreglo (arr) y un número (item) como argumentos.
    Agrega el número al final del arreglo, luego elimina el primer elemento del arreglo.
    La función nextInLine debe entonces devolver el elemento que fue removido.
*/

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();;
}

const testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//------------------------------------------------------------------------
// ** Comprende los valores booleanos **

function welcomeBooleans(){
    return true;
}
