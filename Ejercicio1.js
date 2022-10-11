/*	Realiza un bucle While el cual genere un contador de mates, hasta 4 mates, al momento de generar el 4to mate nos mande un mensaje “Para que queres tantos mates?” de esta manera:
-Mate 1.
-Mate 2.
-Mate 3.
-Para que queres tantos mates?
 */
let contador = 1;

while (contador <=3) {
    console.log("-Mate",contador + ".");
    contador++;

if (contador == 4) {
    console.log("-¿Para qué queres tantos mates?");
}
    }

