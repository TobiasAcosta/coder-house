// SUMA DE PRODUCTOS + 21%
// productos / 100 * 21 + productos


let producto = prompt("Ingrese el producto que desea comprar", 'teclado, mouse, auriculares').toLowerCase();
let cantidad = Number(prompt("Ingrese la cantidad a comprar"));
let sumaProductos = 0;

function carrito(cantidad, producto) {
  switch (producto) {
    case "mouse":
      producto = 38000; //value
      break;

    case "teclado":
      producto = 50000;
      break;

    case "auriculares":
      producto = 35000;
      break;

    default:
      alert("El producto ingresado no se encuentra disponible");
      return;
  }
  total = cantidad * producto;
  sumaProductos += total; //acumulador
  totalIva = (sumaProductos / 100) * 21 + sumaProductos; //iva 21%
}
carrito(cantidad, producto);

alert(`El total de la compra incluyendo iva es de $${totalIva}`);

let confirmacion = confirm("¿Desea seguir comprando?");
for (let i = 0; i < 5; i++) {
  if (confirmacion === true) {

    producto = prompt("Ingrese el producto que desea comprar").toLowerCase();
    cantidad = Number(prompt("Ingresa la cantidad a comprar"));

      carrito(cantidad, producto);
      alert(`El total de la compra incluyendo iva es de $${totalIva}`);

    confirmacion = confirm("¿Desea seguir comprando?");
  }
  //else if (confirmacion === true & i == 4) {
  //   alert("El carrito esta lleno!!");
  // } NO FUNCA!!
  else {
    alert("Gracias por su compra :)");
    break;
  }
}
