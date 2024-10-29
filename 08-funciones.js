/*  -- ¿ QUE SON LAS FUNCIONES ? --
Es un listado de procedimientos */



// -- creando una funcion 
/*palabra Function + nombre de la funcion + () + {}; */
function saludar(){
    console.log('hola mundo');

}

// llamando una funcion, si no lo hacemos nada de ese codigo se ejecutara
saludar();

// parametros
function suma(a){
    return a + 2;
}




// let resultado= suma();

console.log(suma(5)); // forma de a traves de una variable mostrar el resultado de una funcion
console.log(suma(2)) // forma de llamar una funcion en la consola

// array de prueba

let materias = ['matematicas', 'fisica', 'quimica'];

console.log(materias);
console.log(materias.length);
console.log(typeof materias);

materias[4] = 'calculo';
console.log(materias[4]);





// objeto de prueba
let user = {
    nombre:'josue' ,
    edad:16,
    genero: 'masculino',
    peso: 60 + 'Kg',
}  

console.log(user)
console.log(user.peso);
