import type { Producto } from "../data/productos";
import { productos as allProductos } from "../data/productos";

interface ProductCardProps {
  producto: Producto;
}

const ProductCard = ({ producto }: ProductCardProps) => {
  // Calcular precio base: si es combo y tiene comboItems, sumar precios de los items
  const basePrecio = producto.comboItems
    ? producto.comboItems.reduce((s, id) => {
        const item = allProductos.find((p) => p.id === id);
        return s + (item?.precio ?? 0);
      }, 0)
    : producto.precio;

  const precioConDescuento = typeof producto.descuento === "number"
    ? Math.round(basePrecio * (1 - producto.descuento / 100))
    : basePrecio;

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

        {/* Badge de descuento */}
        {producto.descuento && (
          <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{producto.descuento}%
          </div>
        )}

        {/* Badge de combo */}
        {producto.esCombo && (
          <div className="absolute bottom-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
            COMBO
          </div>
        )}
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

        {/* Precios */}
        <div className="border-t pt-3 mt-3">
          {typeof producto.descuento === "number" ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 line-through">
                  ${basePrecio.toLocaleString("es-ES")}
                </span>
                <span className="text-xl font-bold text-green-600">
                  ${precioConDescuento.toLocaleString("es-ES")}
                </span>
              </div>

              {/* Para combos, listar items incluidos */}
              {producto.esCombo && producto.comboItems && (
                <div className="text-sm text-gray-600">
                  Incluye: {producto.comboItems.map((id, idx) => {
                    const item = allProductos.find((p) => p.id === id);
                    return (
                      <span key={id} className="mr-1">
                        {item ? item.nombre : `#${id}`}{idx < (producto.comboItems?.length ?? 0) - 1 ? ", " : ""}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <div className="text-right">
              <span className="text-xl font-bold text-blue-600">
                ${basePrecio.toLocaleString("es-ES")}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
