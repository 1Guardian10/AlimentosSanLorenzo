export interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  caracteristicas: string[];
  imagen: string;
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
    imagen: "https://via.placeholder.com/300x300?text=Premium+Vacas"
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
    imagen: "https://via.placeholder.com/300x300?text=Terneras"
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
    imagen: "https://via.placeholder.com/300x300?text=Porcinos+Engorde"
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
    imagen: "https://via.placeholder.com/300x300?text=Post-Destete"
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
    imagen: "https://via.placeholder.com/300x300?text=Aves+Postura"
  },
  {
    id: 6,
    nombre: "Alimento Ovinos Engorde",
    categoria: "Ovinos",
    descripcion: "Fórmula especializada para ovinos en fase de engorde",
    caracteristicas: [
      "Proteína 14%",
      "Crecimiento rápido",
      "Rendimiento de carcasa"
    ],
    imagen: "https://via.placeholder.com/300x300?text=Ovinos+Engorde"
  },
  {
    id: 7,
    nombre: "Alimento Caprinos Lactancia",
    categoria: "Caprinos",
    descripcion: "Optimizado para máxima producción de leche",
    caracteristicas: [
      "Proteína 16%",
      "Energía concentrada",
      "Calidad de leche"
    ],
    imagen: "https://via.placeholder.com/300x300?text=Caprinos+Lactancia"
  }
];

export const categorias = [
  "Todos",
  "Bovinos",
  "Porcinos",
  "Aves",
  "Ovinos",
  "Caprinos"
];
