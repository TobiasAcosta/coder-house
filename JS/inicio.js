import { comprar } from "./carrito.js";

const userLogin = document.getElementById('userLogin');
const divProductos = document.getElementById('productos');

document.addEventListener('DOMContentLoaded', () =>{ //cada vez que se abre inicio.html ejecuta el elemento
    generarCardsProductos(productosDisponibles);
})

export let productosDisponibles = JSON.parse(localStorage.getItem('productos')); //toma el item del local storage y lo parsea

const generarCardsProductos = (productos) => {
    productos.forEach(producto => {

        const {imagen, id, nombre, categoria, precio} = producto; //destructuring

        let card = document.createElement('div'); //creo el element
        card.className = 'producto';
        card.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">$${precio}</p>
                <p class="card-text">${categoria}</p>
                <button id="comprar${id}" class="btn btn-primary">Comprar</button>
            </div>
        </div>
        `;
        divProductos.appendChild(card); //se agrega

        const btnComprar = document.getElementById(`comprar${id}`); //se llama al btn
        btnComprar.addEventListener('click', () => comprar(id)); //event
        
    });
} 