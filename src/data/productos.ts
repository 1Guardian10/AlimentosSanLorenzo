export interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  caracteristicas: string[];
  imagen: string;
  precio: number;
  descuento?: number;
  esCombo?: boolean;
  productoCombo?: string[];
  comboItems?: number[];
}

export const productos: Producto[] = [
  {
    id: 1,
    nombre: "Alimento Balanceado Premium Vacas",
    categoria: "Bovinos",
    descripcion: "Fórmula completa para máxima producción",
    caracteristicas: [
      "Proteína 16%",
      "Mayor producción",
      "Costo-beneficio óptimo"
    ],
    imagen: "images/producto1.png",
    precio: 45000,
    descuento: 10
  },
  {
    id: 2,
    nombre: "Crecimiento Terneras 20-40kg",
    categoria: "Bovinos",
    descripcion: "Nutrición especializada para terneras en desarrollo",
    caracteristicas: [
      "Desarrollo muscular",
      "Vitaminas B12",
      "Digestibilidad alta"
    ],
    imagen: "images/producto1.png",
    precio: 38000,
    descuento: 5
  },
  {
    id: 3,
    nombre: "Alimento Porcinos Engorde",
    categoria: "Porcinos",
    descripcion: "Optimizado para crecimiento rápido en fase de engorde",
    caracteristicas: [
      "Conversión 3.2:1",
      "Ganancias 950g/día",
      "Carne de calidad"
    ],
    imagen: "images/producto2.png",
      precio: 42000,
      descuento: 15
  },
    {
      id: 6,
      nombre: "Suplemento Vitamínico",
      categoria: "Porcinos",
      descripcion: "Suplemento concentrado para soporte nutricional",
      caracteristicas: [
        "Vitaminas A, D, E",
        "Mejora apetito",
        "Fácil de mezclar"
      ],
    imagen: "images/producto2.png",
      precio: 8000
    },
    {
      id: 7,
      nombre: "Combo Engorde + Suplemento",
      categoria: "Porcinos",
      descripcion: "Combo: Alimento Porcinos Engorde + Suplemento Vitamínico",
      caracteristicas: ["Ahorro por combo", "Mejor rendimiento"],
    imagen: "images/producto2.png",
      precio: 0,
      descuento: 10,
      esCombo: true,
      productoCombo: ["Alimento Porcinos Engorde", "Suplemento Vitamínico"],
      comboItems: [3, 6]
    },
  {
    id: 4,
    nombre: "Iniciador Porcinos Post-Destete",
    categoria: "Porcinos",
    descripcion: "Transición perfecta después del destete",
    caracteristicas: [
      "Menor mortalidad",
      "Adaptación suave",
      "Salud intestinal"
    ],
    imagen: "images/producto2.png",
    precio: 35000
  },
  {
    id: 5,
    nombre: "Alimento Aves Postura",
    categoria: "Aves",
    descripcion: "Nutrición completa para óptima producción de huevos",
    caracteristicas: [
      "Calcio concentrado",
      "Pigmentantes naturales",
      "Huevos de calidad premium"
    ],
    imagen: "images/producto3.png",
    precio: 40000,
    descuento: 8
  },
];

export const categorias = [
  "Todos",
  "Bovinos",
  "Porcinos",
  "Aves",
];
