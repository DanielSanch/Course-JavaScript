//------------------------------------------------------------------------
// ** Usa el operador condicional (ternario) **

function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater or equal";
}//    Condicion   true           false

//------------------------------------------------------------------------
// ** Usar multiples ternarios **

function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" 
      : (a > b) ? "a is greater" 
      : "b is greater";
}

// Ver si un numero es mayor, menor o igual a 0

function checkSign(num) {
  return num > 0 ? "positive"
    : num < 0 ? "negative"
    : "zero";
}

checkSign(10);