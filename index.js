// Función para calcular el precio del seguro
function calcularPrecioDelSeguro(edad, modeloDeAuto, cobertura) {
    let precioBase; // Variable para almacenar el precio base del seguro
    let precioCobertura; // Variable para almacenar el precio de la cobertura elegida

    // Obtener el precio base según el modelo de vehiculo
    if (modeloDeAuto === "Auto") {
        precioBase = 3000;
    } else if (modeloDeAuto === "Camioneta") {
        precioBase = 4000;
    } else if (modeloDeAuto === "Deportivo") {
        precioBase = 5500;
    } else if(modeloDeAuto === "Moto"){
        precioBase = 2500;
    }

    // Obtener el precio de la cobertura elegida
    if (cobertura === "básica") {
        precioCobertura = 500;
    } else if (cobertura === "intermedia") {
        precioCobertura = 1300;
    } else if (cobertura === "premium") {
        precioCobertura = 1900;
    }

    // Calcular el precio total del seguro
    let precioTotal;
    if (edad < 25) {
        precioTotal = precioBase * 1.5 + precioCobertura;
    } else {
        precioTotal = precioBase + precioCobertura;
    }

    return precioTotal;
}

// Pedir al usuario la edad
let edad = parseInt(prompt("¿Cuál es tu edad?"));

// Pedir al usuario el modelo de su auto
let modeloDeAuto;
let seleccionDeModelo;
while (true) {
    console.log("Estos son los modelos disponibles:");
    console.log("1. Auto");
    console.log("2. Camioneta");
    console.log("3. Deportivo");
    console.log("4. Moto");
    seleccionDeModelo = parseInt(prompt("Selecciona el número del modelo de tu vehiculo (1-4)"));
    if (seleccionDeModelo === 1) {
        modeloDeAuto = "Auto";
        break;
    } else if (seleccionDeModelo === 2) {
        modeloDeAuto = "Camioneta";
        break;
    } else if (seleccionDeModelo === 3) {
        modeloDeAuto = "Deportivo";
        break;
    } else if (seleccionDeModelo === 4) {
        modeloDeAuto = "Moto";
        break;
} else {
        console.log("Selección no válida. Por favor, selecciona un número entre 1 y 4.");
    }
}

// Pedir al usuario el tipo de cobertura
let cobertura;
let seleccionDeCobertura;
while (true) {
    console.log("Estas son las opciones de cobertura disponibles:");
    console.log("1. Básica");
    console.log("2. Intermedia");
    console.log("3. Premium");
    seleccionDeCobertura = parseInt(prompt("Selecciona el número de la opción de cobertura que deseas (1-3)"));
    if (seleccionDeCobertura === 1) {
        cobertura = "básica";
        break;
    } else if (seleccionDeCobertura === 2) {
        cobertura = "intermedia";
        break;
    } else if (seleccionDeCobertura === 3) {
        cobertura = "premium";
        break;
    } else {
        console.log("Selección no válida. Por favor, selecciona un número entre 1 y 3.");
    }
}
// Calcular el precio del seguro
let precioDelSeguro = calcularPrecioDelSeguro(edad, modeloDeAuto, cobertura);

// Mostrar el precio del seguro al usuario
console.log("El precio del seguro para un/a conductor/a de " + edad + " años con un modelo tipo " + modeloDeAuto + " y una cobertura " + cobertura + " es de $" + precioDelSeguro);
