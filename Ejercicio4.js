/*Realiza una función la cual, recibe el modelo de un auto, su marca y su valor. Imprime el resultado de la siguiente manera:
Tu auto es de la marca {Marca}, su modelo es {modelo} y tiene un costo de {valor}. 
 */

let modelo = "Ford";
let marca = "Ford1.0";
let valor = 1000;

function información(Modelo, Marca, Valor) {
    modelo = Modelo;
    marca = Marca;
    valor = Valor;
    console.log("Tu auto es de la marca " +"{"+ Modelo + "}," + " su modelo es "+"{"+ Marca + "} y tiene un costo de {" +Valor + "}");
}

información(modelo, marca, valor)