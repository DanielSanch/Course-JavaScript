//------------------------------------------------------------------------
// ** OBJETOS

// Objetos => Clave - Valor

// Agregar propiedad
// tekt.origin = 'Sur'
// tekt['origin'] = 'Sur'

// Eliminar una propiedad
// delete foods.apples;

// Evaluar existencia
// hasOwnProperty()     users.hasOwnProperty('Alan')
// in                   'Alan' in users

// Iterar con for in
for (let user in users){
    console.log(user);
}

// Arreglo con las propiedades de un objeto
Object.keys(obj);