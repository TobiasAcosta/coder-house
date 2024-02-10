import { comprar } from "./carrito.js";

const userLogin = document.getElementById('userLogin');
const filterInput = document.getElementById('search');
const filterList = document.getElementById('filter__list');
const divProductos = document.getElementById('productos');

let userLogueado = JSON.parse(sessionStorage.getItem('usuario'));

document.addEventListener('DOMContentLoaded', () =>{ //cada vez que se abre inicio.html ejecuta el elemento

    if(userLogueado === null){ //renderizado condicional
        const a = document.createElement('a');
        a.href = '../html/usuarios.html';
        a.innerHTML = 'Login';
        userLogin.appendChild(a);
    }else {
        const user = document.createElement('p');
        const close = document.createElement('button');
        user.className = 'welcomeUser';
        user.innerHTML = `Bienvenido ${userLogueado.user}`;
        close.id = 'cerrar__sesion';
        close.innerHTML = 'Cerrar sesión';
        close.addEventListener('click', () =>{
            alert(`Gracias por su compra ${userLogueado.user}... Cerrando sesión`);
            sessionStorage.removeItem('usuario');
            location.reload();
        });
        userLogin.appendChild(user);
        userLogin.appendChild(close);
    }
    

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
//NAV
filterInput.addEventListener('keyup', (e) => {
    const productosFilter = productosDisponibles.filter((producto) => producto.nombre.toLowerCase().includes(e.target.value));
    
    // Elimina las cartas existentes antes de generar las nuevas
    divProductos.innerHTML = '';

    if (e.target.value !== '') {
        generarCardsProductos(productosFilter);
    } else {
        generarCardsProductos(productosDisponibles);
    }
});

//filtros categoria
filterList.addEventListener('click', (e) => {
    e.preventDefault();

    const categoriaSeleccionada = e.target.innerHTML.toLowerCase();
      // Elimina las cartas existentes antes de generar las nuevas
      divProductos.innerHTML = '';

    // No hace falta filtrar si se selecciona 'Todos'
    if (categoriaSeleccionada === 'todos') {
        generarCardsProductos(productosDisponibles);
    } else {
        const productosFilter = productosDisponibles.filter((producto) => producto.categoria.toLowerCase().includes(categoriaSeleccionada));

        generarCardsProductos(productosFilter);
    }
});


