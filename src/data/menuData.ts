import { Category } from "@/types/menu";

export const menuData: Category[] = [
  {
    id: "bebidas",
    name: "Bebidas",
    icon: "🍹",
    subcategories: [
      {
        id: "cervezas",
        name: "Cervezas",
        items: [
          {
            id: "quilmes",
            name: "Quilmes",
            description: "Cerveza rubia argentina",
            price: 1800,
          },
          {
            id: "stella",
            name: "Stella Artois",
            description: "Cerveza premium lager",
            price: 2000,
          },
          {
            id: "corona",
            name: "Corona",
            description: "Cerveza mexicana",
            price: 2200,
          },
          {
            id: "patagonia",
            name: "Patagonia Amber Lager",
            description: "Cerveza roja patagónica",
            price: 2300,
          },
          {
            id: "heineken",
            name: "Heineken",
            description: "Cerveza holandesa premium",
            price: 2100,
          },
        ],
      },
      {
        id: "tragos",
        name: "Tragos",
        items: [
          {
            id: "fernet",
            name: "Fernet con Cola",
            description: "Fernet Branca con Coca-Cola",
            price: 2200,
          },
          {
            id: "gintonic",
            name: "Gin Tonic",
            description: "Gin Beefeater con agua tónica",
            price: 2500,
          },
          {
            id: "mojito",
            name: "Mojito",
            description: "Ron, menta, lima, azúcar y soda",
            price: 2400,
          },
          {
            id: "aperol",
            name: "Aperol Spritz",
            description: "Aperol, prosecco y soda",
            price: 2600,
          },
          {
            id: "caipirinha",
            name: "Caipirinha",
            description: "Cachaça, lima y azúcar",
            price: 2300,
          },
          {
            id: "negroni",
            name: "Negroni",
            description: "Gin, Campari y vermut rojo",
            price: 2700,
          },
        ],
      },
      {
        id: "vinos",
        name: "Vinos",
        items: [
          {
            id: "malbec",
            name: "Malbec Reserva",
            description: "Vino tinto Rutini",
            price: 8500,
          },
          {
            id: "chardonnay",
            name: "Chardonnay",
            description: "Vino blanco Catena Zapata",
            price: 7500,
          },
          {
            id: "cabernet",
            name: "Cabernet Sauvignon",
            description: "Vino tinto Luigi Bosca",
            price: 6800,
          },
          {
            id: "rose",
            name: "Rosé",
            description: "Vino rosado Chandon",
            price: 5500,
          },
        ],
      },
      {
        id: "sin-alcohol",
        name: "Sin Alcohol",
        items: [
          {
            id: "limonada",
            name: "Limonada",
            description: "Limonada casera con menta y jengibre",
            price: 1500,
          },
          {
            id: "agua-saborizada",
            name: "Agua Saborizada",
            description: "Agua con gas y frutas naturales",
            price: 1200,
          },
          {
            id: "gaseosas",
            name: "Gaseosas",
            description: "Coca-Cola, Sprite, Fanta (500ml)",
            price: 1300,
          },
          {
            id: "jugo-natural",
            name: "Jugo Natural",
            description: "Naranja, manzana o mix de frutas",
            price: 1800,
          },
          {
            id: "agua-mineral",
            name: "Agua Mineral",
            description: "Con o sin gas (500ml)",
            price: 1000,
          },
        ],
      },
    ],
  },
  {
    id: "entradas",
    name: "Entradas",
    icon: "🥗",
    subcategories: [
      {
        id: "para-compartir",
        name: "Para Compartir",
        items: [
          {
            id: "nachos",
            name: "Nachos con Guacamole",
            description: "Tortillas de maíz, guacamole fresco, pico de gallo y crema",
            price: 3500,
          },
          {
            id: "papas-bravas",
            name: "Papas Bravas",
            description: "Papas crocantes con salsa picante y alioli",
            price: 2800,
          },
          {
            id: "tabla-de-quesos",
            name: "Tabla de Quesos",
            description: "Selección de quesos, frutos secos y mermeladas",
            price: 5500,
          },
          {
            id: "rabas",
            name: "Rabas",
            description: "Aros de calamar fritos con limón y alioli",
            price: 4200,
          },
        ],
      },
      {
        id: "ensaladas",
        name: "Ensaladas",
        items: [
          {
            id: "cesar",
            name: "César",
            description: "Lechuga romana, pollo grillado, crutones, parmesano y aderezo césar",
            price: 3200,
          },
          {
            id: "mediterranea",
            name: "Mediterránea",
            description: "Mix de hojas verdes, tomates cherry, aceitunas, queso feta y vinagreta",
            price: 2900,
          },
          {
            id: "quinoa",
            name: "Quinoa",
            description: "Quinoa, vegetales asados, aguacate y vinagreta de cítricos",
            price: 3400,
          },
        ],
      },
    ],
  },
  {
    id: "platos-principales",
    name: "Platos",
    icon: "🍖",
    subcategories: [
      {
        id: "carnes",
        name: "Carnes",
        items: [
          {
            id: "bife-de-chorizo",
            name: "Bife de Chorizo",
            description: "300g de bife de chorizo con guarnición",
            price: 6500,
          },
          {
            id: "costillas-bbq",
            name: "Costillas BBQ",
            description: "Costillas de cerdo con salsa barbacoa y papas rústicas",
            price: 7200,
          },
          {
            id: "lomo-al-malbec",
            name: "Lomo al Malbec",
            description: "Medallón de lomo con reducción de vino tinto y puré",
            price: 7500,
          },
        ],
      },
      {
        id: "pastas",
        name: "Pastas",
        items: [
          {
            id: "sorrentinos",
            name: "Sorrentinos",
            description: "Rellenos de jamón y mozzarella con salsa rosa",
            price: 4200,
          },
          {
            id: "fetuccini-alfredo",
            name: "Fetuccini Alfredo",
            description: "Pasta fresca con salsa de crema y parmesano",
            price: 3800,
          },
          {
            id: "ñoquis-de-papa",
            name: "Ñoquis de Papa",
            description: "Con salsa bolognesa o filetto",
            price: 3500,
          },
        ],
      },
      {
        id: "pescados",
        name: "Pescados",
        items: [
          {
            id: "salmón-grillado",
            name: "Salmón Grillado",
            description: "Con vegetales salteados y salsa de limón",
            price: 8200,
          },
          {
            id: "merluza-al-roquefort",
            name: "Merluza al Roquefort",
            description: "Filet de merluza con salsa de queso azul y papas",
            price: 6800,
          },
          {
            id: "atún-sellado",
            name: "Atún Sellado",
            description: "Con costra de sésamo y wok de vegetales",
            price: 7500,
          },
        ],
      },
    ],
  },
  {
    id: "pizzas",
    name: "Pizzas",
    icon: "🍕",
    subcategories: [
      {
        id: "clasicas",
        name: "Clásicas",
        items: [
          {
            id: "mozzarella",
            name: "Mozzarella",
            description: "Salsa de tomate, mozzarella y orégano",
            price: 3500,
          },
          {
            id: "napolitana",
            name: "Napolitana",
            description: "Mozzarella, tomates frescos, ajo y albahaca",
            price: 3800,
          },
          {
            id: "jamón-y-morrones",
            name: "Jamón y Morrones",
            description: "Mozzarella, jamón y pimientos asados",
            price: 4200,
          },
        ],
      },
      {
        id: "especiales",
        name: "Especiales",
        items: [
          {
            id: "cuatro-quesos",
            name: "Cuatro Quesos",
            description: "Mozzarella, roquefort, parmesano y fontina",
            price: 4500,
          },
          {
            id: "rúcula-y-crudo",
            name: "Rúcula y Crudo",
            description: "Mozzarella, jamón crudo, rúcula y parmesano",
            price: 4800,
          },
          {
            id: "calabresa",
            name: "Calabresa",
            description: "Mozzarella, salame, aceitunas y orégano",
            price: 4300,
          },
        ],
      },
    ],
  },
  {
    id: "postres",
    name: "Postres",
    icon: "🍰",
    subcategories: [
      {
        id: "clasicos",
        name: "Clásicos",
        items: [
          {
            id: "flan-casero",
            name: "Flan Casero",
            description: "Con dulce de leche y crema",
            price: 1800,
          },
          {
            id: "tiramisú",
            name: "Tiramisú",
            description: "Postre italiano con café y mascarpone",
            price: 2200,
          },
          {
            id: "brownie",
            name: "Brownie",
            description: "Con helado de vainilla y salsa de chocolate",
            price: 2000,
          },
        ],
      },
      {
        id: "helados",
        name: "Helados",
        items: [
          {
            id: "copa-almendrado",
            name: "Copa Almendrado",
            description: "Helado de almendras con chocolate caliente",
            price: 1900,
          },
          {
            id: "sundae-de-frutos-rojos",
            name: "Sundae de Frutos Rojos",
            description: "Helado de crema con frutos rojos y crema",
            price: 2100,
          },
          {
            id: "copa-black",
            name: "Copa Black",
            description: "Helado de chocolate con salsa y chips",
            price: 2000,
          },
        ],
      },
    ],
  },
  {
    id: "cafeteria",
    name: "Cafetería",
    icon: "☕",
    subcategories: [
      {
        id: "cafe",
        name: "Café",
        items: [
          {
            id: "espresso",
            name: "Espresso",
            description: "Café concentrado",
            price: 800,
          },
          {
            id: "cappuccino",
            name: "Cappuccino",
            description: "Café con leche espumada y cacao",
            price: 1200,
          },
          {
            id: "latte",
            name: "Latte",
            description: "Café con leche cremosa",
            price: 1100,
          },
          {
            id: "flat-white",
            name: "Flat White",
            description: "Café con microespuma de leche",
            price: 1300,
          },
        ],
      },
      {
        id: "te",
        name: "Té",
        items: [
          {
            id: "té-negro",
            name: "Té Negro",
            description: "Clásico té negro en hebras",
            price: 800,
          },
          {
            id: "té-verde",
            name: "Té Verde",
            description: "Té verde con notas cítricas",
            price: 800,
          },
          {
            id: "té-rojo",
            name: "Té Rojo",
            description: "Té rojo con propiedades digestivas",
            price: 900,
          },
        ],
      },
      {
        id: "pasteleria",
        name: "Pastelería",
        items: [
          {
            id: "medialunas",
            name: "Medialunas",
            description: "Dulces o saladas (3 unidades)",
            price: 1200,
          },
          {
            id: "tostado-completo",
            name: "Tostado Completo",
            description: "Jamón y queso en pan de miga",
            price: 1800,
          },
          {
            id: "torta-del-día",
            name: "Torta del Día",
            description: "Porción de torta casera",
            price: 1500,
          },
        ],
      },
    ],
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    icon: "🥪",
    subcategories: [
      {
        id: "clasicos",
        name: "Clásicos",
        items: [
          {
            id: "club-sandwich",
            name: "Club Sandwich",
            description: "Triple con pollo, lechuga, tomate, huevo y bacon",
            price: 3200,
          },
          {
            id: "lomito-completo",
            name: "Lomito Completo",
            description: "Lomo, lechuga, tomate, jamón, queso y huevo",
            price: 3800,
          },
          {
            id: "milanesa-completa",
            name: "Milanesa Completa",
            description: "Milanesa de ternera, lechuga, tomate y mayonesa",
            price: 3500,
          },
        ],
      },
      {
        id: "vegetarianos",
        name: "Vegetarianos",
        items: [
          {
            id: "veggie-deluxe",
            name: "Veggie Deluxe",
            description: "Vegetales grillados, hummus y rúcula",
            price: 2800,
          },
          {
            id: "caprese",
            name: "Caprese",
            description: "Mozzarella, tomate, albahaca y oliva",
            price: 2500,
          },
        ],
      },
      {
        id: "calientes",
        name: "Calientes",
        items: [
          {
            id: "philly-steak",
            name: "Philly Steak",
            description: "Carne, cebolla, morrón y queso cheddar",
            price: 3900,
          },
          {
            id: "pulled-pork",
            name: "Pulled Pork",
            description: "Cerdo desmenuzado BBQ con coleslaw",
            price: 3600,
          },
        ],
      },
    ],
  },
  {
    id: "hamburguesas",
    name: "Hamburguesas",
    icon: "🍔",
    subcategories: [
      {
        id: "clasicas",
        name: "Clásicas",
        items: [
          {
            id: "classic-burger",
            name: "Classic Burger",
            description: "Carne, lechuga, tomate, cebolla y queso",
            price: 3200,
          },
          {
            id: "cheeseburger",
            name: "Cheeseburger",
            description: "Doble carne, doble cheddar y bacon",
            price: 3800,
          },
          {
            id: "criolla",
            name: "Criolla",
            description: "Carne, chimichurri, lechuga y tomate",
            price: 3500,
          },
        ],
      },
      {
        id: "especiales",
        name: "Especiales",
        items: [
          {
            id: "blue-cheese",
            name: "Blue Cheese",
            description: "Carne, queso azul, cebolla caramelizada",
            price: 4200,
          },
          {
            id: "mexican",
            name: "Mexican",
            description: "Carne, guacamole, jalapeños y nachos",
            price: 4000,
          },
        ],
      },
      {
        id: "vegetarianas",
        name: "Vegetarianas",
        items: [
          {
            id: "beyond-meat",
            name: "Beyond Meat",
            description: "Medallón plant-based, lechuga y tomate",
            price: 3800,
          },
          {
            id: "portobello",
            name: "Portobello",
            description: "Hongo portobello grillado y vegetales",
            price: 3500,
          },
        ],
      },
    ],
  },
];
