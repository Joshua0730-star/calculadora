const array = [1, 3, 5, 6, 10];

function suma(array){
    array.reduce((acum, valor) => acum + valor, 0); // sumando todos los valores del array

    return array;
}

console.log(suma(array));