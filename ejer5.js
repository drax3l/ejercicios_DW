function convertirGrados(grados, tipo) {
    if (tipo === "C") {
      // Conversión de Celsius a Fahrenheit
      return (grados * 9/5) + 32;
    } else if (tipo === "F") {
      // Conversión de Fahrenheit a Celsius
      return (grados - 32) * 5/9;
    } else {
      // Si el tipo no es válido
      return "Tipo de conversión no válido. Usa 'C' para Celsius a Fahrenheit o 'F' para Fahrenheit a Celsius.";
    }
  }
  
  // Ejemplo de uso:
  console.log(convertirGrados(25, "C")); // 77°F
  console.log(convertirGrados(77, "F")); // 25°C