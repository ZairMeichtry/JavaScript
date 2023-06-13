const productos = [
    {
        id: "1",
        titulo: "Ensalada N°1",
        imagen:"../assets/img/Ensalada.jpg",
        precio:"450",
        detalle: "zanahoria, remolacha, repollo, lechuga, tomate, huevo, queso",
    },
    {
        id: "2",
        titulo: "Ensalada N°2",
        imagen:"../assets/img/Ensalada.jpg",
        precio:"450",
        detalle: "zanahoria, remolacha, repollo, huevo, queso",
    },
    {
        id: "3",
        titulo: "Ensalada N°3",
        imagen:"../assets/img/Ensalada.jpg",
        precio:"450",
        detalle: "zanahoria, remolacha, lechuga, tomate, rucula, huevo, queso",
    },
    {
        id: "4",
        titulo: "Ensalada N°4",
        imagen:"../assets/img/Ensalada.jpg",
        precio:"450",
        detalle:"zanahoria, remolacha, lechuga, tomate, rucula, pollo",
    },
    {
        id: "5",
        titulo: "Ensalada N°5",
        imagen:"../assets/img/Ensalada.jpg",
        precio:"450",
        detalle: "zanahoria, remolacha, repollo, lechuga, tomate, pollo",
    },
    {
        id: "6",
        titulo: "Ensalada N°6",
        imagen:"../assets/img/Ensalada.jpg",
        precio:"450",
        detalle:"lechuga, tomate, pollo, jamon, queso, crocantitos",
    },
    {
        id: "7",
        titulo: "Ensalada N°7",
        imagen:"../assets/img/Ensalada.jpg",
        precio:"450",
        detalle: "lechuga, tomate, jamon, queso, huevo",
    },
    {
        id: "8",
        titulo: "Ensalada N°8",
        imagen:"../assets/img/Ensalada.jpg",
        precio:"450",
        detalle: "zanahoria, remolacha, tomate, lechuga o rucula, arroz yamani, huevo",
    },
    {
        id: "9",
        titulo: "Ensalada N°9",
        imagen:"../assets/img/Ensalada.jpg",
        precio:"450",
        detalle: "zanahoria, tomate, lechuga o rucula, lentejas , huevo",
    },
    {
        id: "10",
        titulo: "Ensalada N°10",
        imagen:"../assets/img/Ensalada.jpg",
        precio:"450",
        detalle: "zanahoria, remolacha, lechuga o rucula, lentejas, huevo",
    },
    {
        id: "11",
        titulo: "Ensalada N°11",
        imagen:"../assets/img/Ensalada.jpg",
        precio:"450",
        detalle: "zanahoria, jamon, queso, tomate, choclo",
    },
    {
        id: "12",
        titulo: "Ensalada N°12",
        imagen:"../assets/img/Ensalada.jpg",
        precio:"450",
        detalle:"lechuga, zanahoria, jamon, queso, tomate",
    },
    {
        id: "13",
        titulo: "Ensalada N°13",
        imagen:"../assets/img/Ensalada.jpg",
        precio:"450",
        detalle: "lechuga, zanahoria, remolacha, rucula, tomate",
    },
    {
        id: "14",
        titulo: "Ensalada N°14",
        imagen:"../assets/img/Ensalada.jpg",
        precio:"450",
        detalle:"lechuga, repollo colorado, repollo blanco, tomate, rucula",
    },
    {
        id: "15",
        titulo: "Ensalada N°15",
        imagen:"../assets/img/Ensalada.jpg",
        precio:"450",
        detalle: "zanahoria, jamon, queso, tomate, choclo",
    },
    {
        id: "16",
        titulo: "Ensalada N°16",
        imagen:"../assets/img/Ensalada.jpg",
        precio:"450",
        detalle: "zanahoria, lentejas, repollo, tomate, rucula",
    },
    {
        id: "17",
        titulo: "Ensalada N°17",
        imagen:"../assets/img/Ensalada.jpg",
        precio:"450",
        detalle: "zanahoria, arroz yamani, chaucha, huevo, tomate",
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito")


function cargarProdutos() {
    contenedorProductos.innerHTML = "";
    productos.forEach(producto=>{
        const div= document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">$${producto.precio}</p>
                    <p class="producto-detail">${producto.detalle}</p>
                    <button class="producto-agregar" id="${producto.id}">Agregar</button>
                </div>`;
                contenedorProductos.append(div);

                
        
    })
    actualizarBotonesAgregar()
}
cargarProdutos();

botonesCategorias.forEach(boton =>{
    boton.addEventListener("click", (e) =>{

        botonesCategorias.forEach(boton => boton.classList.remove("active"))

        e.currentTarget.classList.add("active")

            cargarProductos(productos);

    })
})

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    });
}
let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito")
if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS)
    actualizarNumerito()
} else{
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    if(productosEnCarrito.some(producto => producto.id ===idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
        productosEnCarrito[index].cantidad++;
        console.log()
    } else{
        productoAgregado.cantidad =1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))

   }

   function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    numerito.innerText = nuevoNumerito;
   }