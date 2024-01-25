const productos = []; //almacena los productos
const carrito = []; //acumulador

class producto{ //construye los productos
  constructor(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
  vender(){
    if(this.stock > 0){
      this.stock -= 1;
    }else {
      alert('Agotado!!');
    }
  }
 
}
let producto1 = new producto('mouse', 38000, 3); //se declaran
let producto2 = new producto('teclado', 50000, 2);
let producto3 = new producto('auriculares', 35000, 4);

productos.push(producto1); //se agregan al array productos
productos.push(producto2);
productos.push(producto3);

let nombre = prompt('ingrese el producto que desea comprar', 'mouse, teclado, auriculares, etc...').toLowerCase();

 //encuentra el primer elemento que cumpla la condición dada
//find devuelve el valor del element que cumple la condicion

function comprar(){
  const validation = productos.find((i) => i.nombre === nombre && i.stock > 0);//permite que si no hay stock del mismo no se ejecute la funcion 
  if(validation){
    validation.vender(); 
    carrito.push(validation);//se agrega al carrito
    alert (`
    nombre del producto: ${validation.nombre}
    precio: ${validation.precio}
    ¡Se ha añadido al carrito!
    `)
  } else {
    alert('El producto no se encuentra disponible');
  }
}
comprar();

let confirmacion = confirm("¿Desea seguir comprando?");
let cantidad = 0;

while (confirmacion == true && cantidad < 5) {
  nombre =prompt('ingrese el producto que desea comprar', 'mouse, teclado, auriculares, etc...').toLowerCase();
  comprar();
  confirmacion = confirm("¿Desea seguir comprando?");
  if(confirmacion === true){
    cantidad++;
  } 
}

let total =  carrito.reduce((acum, i) => acum + i.precio, 0);
let totalIva = (total / 100) * 21 + total; //iva 21%

alert(`El total de la compra con iva incluido es de: $${totalIva} ARG`);

 console.log(validation);
 console.log(carrito);
 console.log(total);
