const array = [1, 3, 5, 6, 10]; // array de numeros

function suma(array){
    array.reduce((acum, valor) => acum + valor, 0); // sumando todos los valores del array

    return array;
}

console.log(suma(array));


/*


(array) ----> representa el array que se va a recibir como parametro

reduce ----> funcion que reduce un array a un solo valor, se le puede aplicar cualquier operacion!

acum ----> acumulador
valor ----> valor que se va a sumar
0 ------> valor inicial
 */