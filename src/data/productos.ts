import { Milk, Bird, PiggyBank } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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
  comboItems?: number[];
}

export interface CategoriaInfo {
  categoria: string;
  nombre: string;
  icon: LucideIcon;
  color: string;
  beneficios: string[];
  descripcion: string;
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
    imagen: "/images/producto1.webp",
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
    imagen: "/images/producto1.webp",
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
    imagen: "/images/producto2.webp",
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
    imagen: "/images/producto2.webp",
      precio: 8000
    },
    {
      id: 7,
      nombre: "Combo Engorde + Suplemento",
      categoria: "Porcinos",
      descripcion: "Combo: Alimento Porcinos Engorde + Suplemento Vitamínico",
      caracteristicas: ["Ahorro por combo", "Mejor rendimiento"],
    imagen: "/images/producto2.webp",
      precio: 0,
      descuento: 10,
      esCombo: true,
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
    imagen: "/images/producto2.webp",
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
    imagen: "/images/producto3.webp",
    precio: 40000,
    descuento: 8
  },
];

export const categoriasInfo: CategoriaInfo[] = [
  {
    categoria: "Bovinos",
    nombre: "Alimento para Vacas",
    icon: Milk,
    color: "bg-blue-600", // Azul
    beneficios: [
      "Aumenta producción de leche",
      "Mejora calidad nutricional",
      "Promueve crecimiento muscular",
      "Sistema digestivo óptimo",
      "Fortalece sistema inmunológico",
    ],
    descripcion:
      "Fórmula balanceada especialmente desarrollada para maximizar la producción lechera y el crecimiento de ganado bovino.",
  },
  {
    categoria: "Aves",
    nombre: "Alimento para Gallinas",
    icon: Bird,
    color: "bg-red-600", // Rojo
    beneficios: [
      "Aumenta producción de huevos",
      "Fortalece cáscara de huevo",
      "Plumaje más brillante",
      "Mayor vitalidad y salud",
      "Nutrientes esenciales equilibrados",
    ],
    descripcion: "Nutrición completa para gallinas ponedoras con todos los elementos necesarios para postura óptima.",
  },
  {
    categoria: "Porcinos",
    nombre: "Alimento para Cerdos",
    icon: PiggyBank,
    color: "bg-green-700", // Verde
    beneficios: [
      "Crecimiento acelerado",
      "Mejora calidad de carne",
      "Eficiencia alimentaria superior",
      "Digestibilidad mejorada",
      "Desarrollo óseo óptimo",
    ],
    descripcion: "Combinación de ingredientes premium para obtener cerdos saludables con excelente ganancia de peso.",
  },
];

// Orden de las categorías en los filtros (TODOS + las categorías de las tarjetas).
const categoriasOrden = ["Bovinos", "Porcinos", "Aves"];

export const categorias = [
  "Todos",
  ...categoriasOrden.flatMap((categoria) =>
    categoriasInfo
      .filter((info) => info.categoria === categoria)
      .map((info) => info.categoria),
  ),
];
