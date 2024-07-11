// Función principal del simulador
function simuladorJuego() {
    alert("Bienvenido al juego!. Ingresa 0 en cualquier momento para salir.");

    // Generar un número aleatorio entre 1 y 10
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    console.log("Número aleatorio generado:", numeroAleatorio);

    let intentos = 4; // Número de intentos permitidos
    let mensaje = "Tienes 4 intentos para adivinarlo";

    // Bucle para permitir hasta 4 intentos o salir con 0
    while (intentos > 0) {
        // Pedir al usuario que ingrese un número
        let inputUsuario = prompt(`Intentos restantes: ${intentos}. Adivina el número (entre 1 y 10), o ingresa 0 para salir:`);

        // Validar si se ingresó un número válido o 0 para salir
        if (inputUsuario === null) {
            break; // Salir del bucle si se cancela el prompt
        } else if (inputUsuario === "0") {
            mensaje = "Has salido del juego, vuelvas pronto!";
            break; // Salir del bucle si se ingresa 0 para salir
        } else if (isNaN(inputUsuario)) {
            alert("Ingreso inválido. Inténtalo de nuevo.");
            continue;
        }

        // Convertir el número ingresado a entero
        let numeroUsuario = parseInt(inputUsuario);

        // Comparar el número ingresado con el número aleatorio
        if (numeroUsuario === numeroAleatorio) {
            mensaje = "¡Felicitaciones! ¡Adivinaste el número!";
            break; // Salir del bucle while si adivina
        } else {
            mensaje = "Número incorrecto. Inténtalo de nuevo.";
            intentos--;
        }
    }

    // Mostrar resultado al usuario
    alert(mensaje);
    if (mensaje !== "¡Felicitaciones! ¡Adivinaste el número!" && mensaje !== "Has salido del juego.") {
        alert(`¡Se acabaron los intentos! El número era ${numeroAleatorio}.`);
    }
    // Mensaje de despedida
    alert("¡Gracias por jugar! Espero que lo hayas disfrutado.");
}

// Iniciar el simulador al cargar la página o cuando se llame la función
simuladorJuego();
