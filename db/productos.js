export const productos = [
    {
      id: 1,
      nombre: "Mouse",
      precio: 27.000,
      imagen:"https://th.bing.com/th/id/OIP.869ILPhR9wrmclvt5Gay0gHaHa?w=177&h=180&c=7&r=0&o=5&pid=1.7",
      categoria:"perisfericos"
    },
    {
      id: 2,
      nombre: "Teclado mecanico",
      precio: 40.000,
      imagen:"https://th.bing.com/th?q=Teclado+Mecanico+Bluetooth&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=es-AR&cc=AR&setlang=es&adlt=moderate&t=1&mw=247",
      categoria:"perisfericos"
    },
    {
      id: 3,
      nombre: "Auriculares gamer",
      precio: 50.000,
      image:"https://th.bing.com/th/id/OIP.uhTlKrXJ9jEY3QULcQhXTAHaHU?w=208&h=206&c=7&r=0&o=5&pid=1.7",
      categoria:"perisfericos"
    },
    {
      id: 4,
      nombre: "monitor 240hz",
      precio: 800.000,
      imagen:"https://th.bing.com/th/id/OIP.AMBgxQkYbxYvL4OUAIsONQHaHa?w=202&h=202&c=7&r=0&o=5&pid=1.7",
      categoria:"monitores"
    },
    {
      id: 5,
      nombre: "Procesador AMD Ryzen 5 5600X 4.6GHz Turbo AM4 + Wraith Stealth Cooler",
      precio: 299.900,
      imagen:"https://th.bing.com/th/id/OIP.HGbNQK4xQeXF_uikQcvvdwHaFk?w=249&h=187&c=7&r=0&o=5&pid=1.7",
      categoria:"componentes"
    },
    {
      id: 6,
      nombre: "Mother ASUS PRIME A520M-K DDR4 AM4",
      precio: 104.000,
      imagen:"https://th.bing.com/th/id/OIP.hy6vYrKRoCsir_5A7Uc4agHaHa?w=208&h=208&c=7&r=0&o=5&pid=1.7",
      categoria:"componentes"
    },
    {
      id: 7,
      nombre: "Placa de Video XFX Radeon RX 6650 XT 8GB GDDR6 Speedster SWFT 210",
      precio: 440.000,
      imagen:"https://th.bing.com/th/id/OIP.adFc-0hQHkBt6JeI_GxnNAHaHZ?w=172&h=180&c=7&r=0&o=5&pid=1.7",
      categoria:"componentes"
    },
    {
      id: 8,
      nombre: "Silla Gamer HHGears SM-115 Negro y Azul (Peso MAX. 90kg) ",
      precio: 115.850,
      imagen:"https://th.bing.com/th/id/OIP.0Rwqjuau_NP_96YOnLN48gHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7",
      categoria:"sillas"
    }
  ];
  
  
  JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));
  