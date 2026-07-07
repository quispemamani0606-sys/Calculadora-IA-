let operacion = "";
let operadores = ["+", "-", "*", "/", "="];

while (true) {

    let entrada = prompt();

    if (!isNaN(entrada) || operadores.includes(entrada)) {

        if (entrada === "=") {
            break;
        }

        operacion += entrada;

    } else {

        console.log("Entrada no válida");

    }

}

console.log("Operación:", operacion);

let resultado = eval(operacion);

console.log("Resultado:", resultado);

