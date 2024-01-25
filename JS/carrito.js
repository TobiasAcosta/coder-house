import { productosDisponibles } from "./inicio.js"
//parseo y tomo del sessionStorage el carrito,  si este es null se crea un arreglo vacio(carrito)
JSON.parse(sessionStorage.getItem('carrito')) === null && sessionStorage.setItem('carrito', JSON.stringify([]));
document.addEventListener('DOMContentLoaded', () => {
    mostrarCarrito();
});

// let total =  carrito.reduce((acum, i) => acum + i.precio, 0);
// let totalIva = (total / 100) * 21 + total; //iva 21%

let carrito = JSON.parse(sessionStorage.getItem('carrito'));
const listaCarrito = document.getElementById('items');
const footCarrito = document.getElementById('totales');
const btnCarrito = document.getElementById('btnCarrito');

const carritoTable = document.getElementById('carrito');

//visualizacion del carrito
btnCarrito.addEventListener('click', () => { 
    
    if(carritoTable.style.display === 'block'){
        carritoTable.style.display = 'none';
    }else {
        carritoTable.style.display = 'block';
        mostrarCarrito();
    }
})

export const comprar =  (idProducto) => {
    
const producto = productosDisponibles.find((producto) => producto.id === idProducto);
const {nombre, categoria, id, precio, imagen} = producto;//destructuring
const productoCarrito = carrito.find((producto) => producto.id === idProducto)

if(productoCarrito == undefined){
    const nuevoProducto = {
        id: id,
        nombre: nombre,
        categoria: categoria,
        precio: precio,
        imagen: imagen,
        cantidad: 1
    }
    carrito.push(nuevoProducto);
    sessionStorage.setItem('carrito', JSON.stringify(carrito)); //se sube
    }else {
        const indexNuevoProducto = carrito.findIndex((producto) => producto.id === idProducto);//se conoce el index de donde se encuentra el producto

        carrito[indexNuevoProducto].cantidad++;//se le suma 1 a la cantidad  
        carrito[indexNuevoProducto].precio = precio * carrito[indexNuevoProducto].cantidad ; //se multiplica el precio

        sessionStorage.setItem('carrito', JSON.stringify(carrito));// se sube al carrito
    }
    carrito = JSON.parse(sessionStorage.getItem('carrito')); //actualiza
    alert(`!Usted compro el producto ${nombre} con exito¡`);
}

const mostrarCarrito = () => {

    listaCarrito.innerHTML = '';

    carrito.forEach(producto => {
        const {imagen, nombre, precio, categoria, cantidad,id} = producto;
        let body = document.createElement('tr');
        body.className = 'producto__carrito';
        body.innerHTML = `
        <th>
            <img id =" fotoProductoCarrito" src = "${imagen}" class = "card-img-top">
        </th>
        <td>${nombre}</td>        
        <td>${cantidad}</td>        
        <td>${precio/cantidad}</td>        
        <td>${precio}</td>        
        <td>
            <button id="+${id}" class = "btn btn-success">+</button>
            <button id="-${id}" class="btn btn-danger">-</button>
        </td>        
        `
        listaCarrito.append(body);

        const btnAgregar = document.getElementById(`+${id}`);
        const btnEliminar = document.getElementById(`-${id}`);
        btnAgregar.addEventListener('click', () => agregar(id));
        btnEliminar.addEventListener('click', () => eliminar(id));
    });

    mostrarFooter();
} 

const mostrarFooter = () => {

    if(carrito.length > 0){
        footCarrito.innerHTML = " ";
        let footer = document.createElement('tr');
        footer.innerHTML = `
            <th><b> Totales:</b> </th>
            <td></td>
            <td>${generarTotales().cantidadTotal}</td>
            <td></td>
            <td>${generarTotales().costoTotal}</td>
        `
        footCarrito.append(footer);
    }else {
        footCarrito.innerHTML = '<h3>El carrito se encuentra vacio</h3>'
    }
}

const generarTotales = () => {
    const costoTotal = carrito.reduce((acum, {precio}) => acum + precio,0);
    const cantidadTotal = carrito.reduce((acum, {cantidad}) => acum + cantidad,0);

    return{
        costoTotal: costoTotal,
        cantidadTotal: cantidadTotal
    }
    
}
const agregar = (id) => {
    const indexProductoCarrito = carrito.findIndex((producto) => producto.id === id)
    const precio = carrito[indexProductoCarrito].precio / carrito[indexProductoCarrito].cantidad

    carrito[indexProductoCarrito].cantidad++
    carrito[indexProductoCarrito].precio = precio*carrito[indexProductoCarrito].cantidad

    sessionStorage.setItem("carrito", JSON.stringify(carrito))
    mostrarCarrito();

}

const eliminar = (id) => {
    const indexProductoCarrito = carrito.findIndex((producto) => producto.id === id)
    const precio = carrito[indexProductoCarrito].precio / carrito[indexProductoCarrito].cantidad

    carrito[indexProductoCarrito].cantidad--
    carrito[indexProductoCarrito].precio = precio*carrito[indexProductoCarrito].cantidad

    if(carrito[indexProductoCarrito].cantidad === 0){
        carrito.splice(indexProductoCarrito, 1)
    }

    sessionStorage.setItem("carrito", JSON.stringify(carrito))
    mostrarCarrito();

}