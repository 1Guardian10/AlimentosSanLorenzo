import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { productos, categorias } from "../data/productos";
import Footer from "../components/Footer";

const Productos = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  const productosFiltrados = productos.filter((producto) => {
    const cumpleCategoria =
      categoriaSeleccionada === "Todos" ||
      producto.categoria === categoriaSeleccionada;
    const cumpleBusqueda = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    // Excluir combos de la página de catálogo general
    const noEsCombo = !producto.esCombo;
    return cumpleCategoria && cumpleBusqueda && noEsCombo;
  });

  return (
    <>
      <Navbar />

      {/* Header */}
      <div className="pt-24 bg-linear-to-b from-blue-900 to-blue-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Catálogo de Productos</h1>
          <p className="text-blue-100">
            Explora nuestra completa línea de alimentos balanceados
          </p>
        </div>
      </div>

      {/* Contenedor principal */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Barra de búsqueda y filtros */}
        <div className="mb-8">
          {/* Búsqueda */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Buscar producto..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Filtro de categorías */}
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

        {/* Grid de productos */}
        {productosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productosFiltrados.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No se encontraron productos en esta categoría
            </p>
          </div>
        )}
        </div>
        <Footer />
    </>
  );
};

export default Productos;