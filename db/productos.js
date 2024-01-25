export const productos = [
    {
      id: 1,
      nombre: "Mouse",
      precio: 27000,
      imagen:"https://th.bing.com/th/id/OIP.869ILPhR9wrmclvt5Gay0gHaHa?w=177&h=180&c=7&r=0&o=5&pid=1.7",
      categoria:"perisfericos"
    },
    {
      id: 2,
      nombre: "Teclado mecanico",
      precio: 40000,
      imagen:"https://th.bing.com/th?q=Teclado+Mecanico+Bluetooth&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=es-AR&cc=AR&setlang=es&adlt=moderate&t=1&mw=247",
      categoria:"perisfericos"
    },
    {
      id: 3,
      nombre: "Auriculares gamer",
      precio: 50000,
      image:"https://th.bing.com/th/id/OIP.2IRz7IGX9pv15KQjbf95mgHaHa?w=219&h=219&c=7&r=0&o=5&pid=1.7",
      categoria:"perisfericos"
    },
    {
      id: 4,
      nombre: "monitor 240hz",
      precio: 800000,
      imagen:"https://th.bing.com/th/id/OIP.AMBgxQkYbxYvL4OUAIsONQHaHa?w=202&h=202&c=7&r=0&o=5&pid=1.7",
      categoria:"monitores"
    },
    {
      id: 5,
      nombre: "goma de borrar blanca",
      precio: 50,
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYUTI-H3XP-vCd-6v90jROYKlBW3IYK2k7t21whwU&s",
      categoria:"gomas"
    },
    {
      id: 6,
      nombre: "Cartuchera Spiderman",
      precio: 350,
      imagen:"https://www.coopehogar.coop/media/ch/publico/articulos/a/8/2/a821d9b7fd2a671d2f3652cb2dae33da",
      categoria:"cartucheras"
    },
    {
      id: 7,
      nombre: "Cartuchera Cars",
      precio: 350,
      imagen:"https://www.oxfordlibreria.com.ar/media/catalog/product/cache/5a38f6614905178fa07804facc7b33a0/9/2/92626374160_20211005140012.jpg",
      categoria:"cartuchera"
    },
    {
      id: 8,
      nombre: "Regla 30cm",
      precio: 150,
      imagen:"https://www.paitis.ar/ps/1921-large_default/regla-30-cm.jpg",
      categoria:"reglas"
    }
  ];
  
  
  JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));
  