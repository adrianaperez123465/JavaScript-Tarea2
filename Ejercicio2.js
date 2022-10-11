/*
Realiza un bucle el cual imprima los números del 1 al 50, 
Si el número es terminado en 3, que imprima “Queres un mate?”.
Si el número es terminado en 7, que imprima “No se toma con azúcar”.
Si no se cumplen ninguno de estos casos, imprimir el número.
 */

console.log("jjl");

let contador = 1;

while (contador <=50) {
    if (contador === 3 || contador === 13 || contador === 23 || contador === 33 || contador === 43) {
        console.log("¿Querés un mate?");
        contador ++;
    }

    if (contador === 7 || contador === 17 || contador === 27 || contador === 37 || contador === 47) {
        console.log("No se toma con azúcar");
        contador ++;

    }

    else (contador)
        console.log(contador);
        contador ++;

    }
