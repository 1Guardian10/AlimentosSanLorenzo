import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { productos, categorias } from "../data/productos";

const Promociones = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  // Filtrar productos con descuento o combo
  const productosEnPromocion = productos.filter(
    (producto) => producto.descuento || producto.esCombo
  );

  // Filtrar por categoría si está seleccionada
  const productosFiltrados =
    categoriaSeleccionada === "Todos"
      ? productosEnPromocion
      : productosEnPromocion.filter(
          (producto) => producto.categoria === categoriaSeleccionada
        );

  return (
    <>
      <Navbar />

      {/* Header */}
      <div className="pt-24 bg-linear-to-b from-blue-900 to-blue-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Promociones y Combos</h1>
          <p className="text-blue-100">
            Aprovecha nuestras ofertas especiales y combos exclusivos
          </p>
        </div>
      </div>

      {/* Contenedor principal (estilo igual a Productos) */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Filtros (dentro del contenedor, mismo estilo que Productos) */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Filtrar por categoría:
          </h2>
          <div className="flex flex-wrap gap-2">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaSeleccionada(categoria)}
                className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${
                  categoriaSeleccionada === categoria
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>

        {/* Contenido Principal */}
        {productosFiltrados.length > 0 ? (
          <>
            <div className="mb-6 text-gray-600">
              <p className="text-lg">
                Mostrando <strong>{productosFiltrados.length}</strong> producto
                {productosFiltrados.length !== 1 ? "s" : ""} en promoción
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productosFiltrados.map((producto) => (
                <ProductCard key={producto.id} producto={producto} />
              ))}
            </div>

            {/* Información adicional */}
            <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                💡 Información de promociones
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Los descuentos se aplican automáticamente al precio final</li>
                <li>✓ Los combos incluyen múltiples productos a mejor precio</li>
                <li>✓ Las promociones son válidas mientras duren las existencias</li>
                <li>✓ Contáctanos para consultas sobre ofertas por volumen</li>
              </ul>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No se encontraron promociones en esta categoría
            </p>
            <div className="mt-6">
              <button
                onClick={() => setCategoriaSeleccionada("Todos")}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
              >
                Ver todas las promociones
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Promociones;