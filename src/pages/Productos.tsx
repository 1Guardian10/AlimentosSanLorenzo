import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import PageHeader from "../components/PageHeader";
import CategoryFilter from "../components/CategoryFilter";
import { productos, categorias } from "../data/productos";

const Productos = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoriaParam = searchParams.get("categoria");
  const categoriaSeleccionada =
    categoriaParam && categorias.includes(categoriaParam)
      ? categoriaParam
      : "Todos";
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
      <PageHeader
        title="Catálogo de Productos"
        subtitle="Explora nuestra completa línea de alimentos balanceados"
      />

      {/* Contenedor principal */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Barra de búsqueda y filtros */}
        <div className="mb-8">
          {/* Búsqueda */}
          <div className="mb-6">
            <input
              type="text"
              aria-label="Buscar producto"
              placeholder="Buscar producto..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Filtro de categorías */}
          <CategoryFilter
            categorias={categorias}
            selected={categoriaSeleccionada}
            onSelect={(categoria) =>
              setSearchParams(categoria === "Todos" ? {} : { categoria })
            }
          />
        </div>

        {/* Grid de productos */}
        {productosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productosFiltrados.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12" role="status">
            <p className="text-gray-500 text-lg">
              No se encontraron productos que coincidan con tu búsqueda o
              categoría.
            </p>
          </div>
        )}
        </div>
    </>
  );
};

export default Productos;