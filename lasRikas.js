alert("Bienvenido a Ensaladas las Rik°s");

// Definir lista de ensaladas predefinidas
const ensaladasPredefinidas = {
  1: "zanahoria, remolacha, repollo, lechuga, tomate, huevo y queso",
  2: "zanahoria, remolacha, repollo, huevo y queso",
  3: "zanahoria, remolacha, lechuga, tomate, rucula, huevo y queso",
  4: "zanahoria, remolacha, lechuga, tomate, rucula y pollo",
  5: "zanahoria, remolacha, repollo, lechuga, tomate y pollo",
  6: "lechuga, tomate, pollo, jamon, queso y crocantitos",
  7: "lechuga, tomate, jamon, queso y huevo",
  8: "zanahoria, remolacha, tomate, lechuga o rucula, arroz yamani y huevo",
  9: "zanahoria, tomate, lechuga o rucula, lentejas y huevo",
  10: "zanahoria, remolacha, lechuga o rucula, lentejas y huevo",
  11: "zanahoria, jamon, queso, tomate y choclo",
  12: "lechuga, zanahoria, jamon, queso y tomate",
   13: "lechuga, zanahoria, remolacha, rucula y tomate",
  14: "lechuga, repollo colorado, repollo blanco, tomate y rucula",
  15: "zanahoria, jamon, queso, tomate y choclo",
  16: "zanahoria, lentejas, repollo, tomate y rucula",
  17: "zanahoria, arroz yamani, chaucha, huevo y tomate",
};

// Función para tomar pedido
function tomarPedido() {
  let nombre = prompt("Ingrese su nombre:");
  let direccion = prompt("Ingrese su dirección:");

  let opcion = "";

  while (opcion !== "1" && opcion !== "2") {
    opcion = prompt("¿Desea 1. Armar ensalada | 2. Elegir de nuestra lista?");
    if (opcion !== "1" && opcion !== "2") {
      alert("Opción no válida. Por favor, ingrese 1 o 2");
    }
  }

  if (opcion === "1") {
    armarEnsalada(nombre, direccion);
  } else if (opcion === "2") {
    elegirEnsaladaPredefinida(nombre, direccion);
  }
}

// Función para armar ensalada
function armarEnsalada(nombre, direccion) {
  let ingredientesDisponibles = [
    "lechuga crespa",
    "lechuga repollada",
    "lechuga morada",
    "zanahoria",
    "remolacha",
    "repollo morado/blanco",
    "huevo",
    "rucula/radicheta",
    "tomate",
    "chauchas",
    "lentejas",
    "arroz blanco/yamani",
    "arbejas",
    "aceitunas",
    "crocantitos",
    "choclo",
    "pepino",
    "rabanito",
    "garbanzo",
    "jamon",
    "queso",
    "pollo",
  ];

  let ensalada = [];

  while (ensalada.length < 5) {
    console.log("Ingredientes disponibles:");
    console.log(ingredientesDisponibles.join(", "));

    let ingrediente = prompt(
      "Ingrese un ingrediente para la ensalada (o 'salir' para finalizar):"
    );

    if (ingrediente.toLowerCase() === "salir") {
      break;
    }

    if (!ingredientesDisponibles.includes(ingrediente)) {
      alert("El ingrediente no está disponible");
    } else if (ensalada.includes(ingrediente)) {
      alert("El ingrediente ya está en la ensalada");
    } else {
      ensalada.push(ingrediente);
      console.log("Ingrediente agregado: " + ingrediente);
    }
  }

  detallePedido(nombre, direccion, ensalada);
}

// Función para elegir una ensalada de la lista predefinida
function elegirEnsaladaPredefinida(nombre, direccion) {
  console.log("Ensaladas predefinidas disponibles:");
  for (let id in ensaladasPredefinidas) {
    console.log(`${id}: ${ensaladasPredefinidas[id]}`);
  }

  let ensaladaId = prompt("Ingrese el número de la ensalada predefinida que desea:");
  let ensalada = ensaladasPredefinidas[ensaladaId];

  if (ensalada) {
    console.log("Ensalada elegida: " + ensalada);
    detallePedido(nombre, direccion, ensalada.split(", "));
  } else {
    console.log("Ensalada predefinida no válida.");
  }
}

// Función para mostrar detalles del pedido
function detallePedido(nombre, direccion, ensalada) {
  console.log("Detalles del pedido:");
  console.log("Nombre: " + nombre);
  console.log("Dirección: " + direccion);
  console.log("Ensalada: " + ensalada.join(", "));
  let eliminarIngrediente = confirm("¿Desea eliminar un ingrediente de la ensalada?");
  if (eliminarIngrediente) {
    let ingredienteEliminar = prompt("Ingrese el ingrediente que desea eliminar:");
    ensalada = eliminarIngredienteEnsalada(ensalada, ingredienteEliminar);
    console.log("Ensalada actualizada: " + ensalada.join(", "));
  }
}

//funcion para eliminar un ingrediente de la ensalada

function eliminarIngredienteEnsalada(ensalada, ingredienteEliminar) {
    let indiceIngrediente = ensalada.indexOf(ingredienteEliminar);
    if (indiceIngrediente !== -1) {
      ensalada.splice(indiceIngrediente, 1);
      console.log("Ingrediente eliminado: " + ingredienteEliminar);
    } else {
      console.log("El ingrediente no se encontró en la ensalada.");
    }
    return ensalada;
  }

// Llamar a la función para tomar pedido
tomarPedido();
