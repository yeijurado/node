//Muestra los números del 660 al 360, contando de 20 en 20 hacia atrás utilizando un bucle FOR

function numeros() {

    let numero = 660;

    for (let i = 0; i <  16; i++) {
        console.log(numero - (20 * i));
    }
}

numeros();