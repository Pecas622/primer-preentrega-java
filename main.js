// Función para generar un número aleatorio entre 1 y 10
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}

// Función para pedir al usuario que ingrese un número
function pedirNumeroUsuario(intentos) {
    return prompt(`Adivina el número (entre 1 y 10), o ingresa 0 para salir. Intentos restantes: ${intentos}.`);
}

// Función para validar la entrada del usuario
function validarEntradaUsuario(inputUsuario) {
    if (inputUsuario === null) {
        return "cancelar";
    } else if (inputUsuario === "0") {
        return "salir";
    } else if (isNaN(inputUsuario)) {
        return "invalido";
    } else {
        return parseInt(inputUsuario);
    }
}

// Función para manejar el juego
function jugarJuego(numeroAleatorio, intentos) {
    while (intentos > 0) {
        let inputUsuario = pedirNumeroUsuario(intentos);
        let resultadoValidacion = validarEntradaUsuario(inputUsuario);

        if (resultadoValidacion === "cancelar") {
            return "Has cancelado el juego.";
        } else if (resultadoValidacion === "salir") {
            return "Has salido del juego, ¡vuelve pronto!";
        } else if (resultadoValidacion === "invalido") {
            alert("Ingreso inválido. Inténtalo de nuevo.");
            continue;
        }

        let numeroUsuario = resultadoValidacion;

        if (numeroUsuario === numeroAleatorio) {
            return "¡Felicitaciones! ¡Adivinaste el número! ¡te ganaste un 0km!";
        } else {
            alert("Número incorrecto. Inténtalo de nuevo.");
            intentos--;
        }
    }

    return `¡Se acabaron los intentos! El número era ${numeroAleatorio}.`;
}

// Función principal del simulador
function simuladorJuego() {
    alert("Bienvenido/a a mi juego, el juego consiste en adivinar el número entre 1 y 10, tienes 4 intentos para hacerlo. Ingresa 0 en cualquier momento para salir.");

    const numeroAleatorio = generarNumeroAleatorio();
    console.log("Número aleatorio generado:", numeroAleatorio);

    let intentos = 4;
    let resultado = jugarJuego(numeroAleatorio, intentos);

    alert(resultado);
    alert("¡Gracias por jugar! Espero que lo hayas disfrutado.");
}

// Iniciar el simulador inmediatamente
simuladorJuego();





