import type { Producto } from "../data/productos";

interface ProductCardProps {
  producto: Producto;
}

const ProductCard = ({ producto }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
      {/* Imagen */}
      <div className="relative h-64 bg-gray-200 overflow-hidden">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        {/* Badge de categoría */}
        <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 opacity-90 hover:opacity-100 hover:bg-green-700">
          {producto.categoria}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-4">
        {/* Nombre */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 transition-colors duration-300 group-hover:text-blue-600">
          {producto.nombre}
        </h3>

        {/* Descripción */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {producto.descripcion}
        </p>

        {/* Características */}
        <div className="mb-4">
          <ul className="text-sm text-gray-700 space-y-1">
            {producto.caracteristicas.map((caracteristica, index) => (
              <li key={index} className="flex items-center">
                <span className="text-red-600 mr-2">●</span>
                {caracteristica}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
