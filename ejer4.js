/*(Ejercicio 5: Imprimir un triángulo de asteriscos
Descripción: Pide un número N y dibuja un triángulo de asteriscos con N filas)*/
// Solicitar al usuario el número de filas
const N = parseInt(prompt("Introduce el número de filas para el triángulo:"));

// Validar que el valor introducido es un número positivo
if (N > 0) {
    // Generar el triángulo
    for (let i = 1; i <= N; i++) {
        console.log("*".repeat(i));
    }
} else {
    console.log("Por favor, introduce un número válido.");
}
