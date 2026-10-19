    import { Link } from "react-router-dom"
    import { categoriasInfo } from "../data/productos"

    export default function InfoProductos() {
    return (
        <section id="productos" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-700">
            Importancia del Alimento Balanceado
            </h2>
            <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            La nutrición es fundamental para la salud, productividad y rentabilidad de tu ganadería. Cada especie tiene
            necesidades específicas que nuestros productos satisfacen perfectamente.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
            {categoriasInfo.map((categoria) => {
                const Icon = categoria.icon
                const colorClass = categoria.color

                return (
                <div
                    key={categoria.categoria}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden border-t-4 border-amber-50"
                >
                    <div className={`${colorClass} text-white p-6 flex items-center justify-center`}>
                    <Icon size={48} />
                    </div>

                    <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{categoria.nombre}</h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{categoria.descripcion}</p>

                    <h4 className="font-bold text-blue-600 mb-4">Beneficios Principales:</h4>
                    <ul className="space-y-2">
                        {categoria.beneficios.map((beneficio, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                            <span
                            className={`${colorClass} text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5`}
                            >
                            ✓
                            </span>
                            <span className="text-gray-700 text-sm">{beneficio}</span>
                        </li>
                        ))}
                    </ul>
                    </div>

                    <div className="px-8 pb-8">
                    <Link
                        to="/contactanos"
                        className={`block w-full text-center ${colorClass} text-white py-2 rounded-lg hover:opacity-90 transition font-semibold`}
                    >
                        Solicitar Información
                    </Link>
                    </div>
                </div>
                )
            })}
            </div>

            {/* Beneficios Generales */}
            <div className="mt-16 bg-gradient-to-r from-blue-50 via-red-50 to-green-50 p-8 md:p-12 rounded-2xl border border-gray-200">
            <h3 className="text-3xl font-bold text-blue-700 mb-8 text-center">¿Por Qué Elegir Alimentos Balanceados?</h3>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                    1
                </div>
                <div>
                    <h4 className="font-bold text-gray-800 mb-2">Nutrición Precisa</h4>
                    <p className="text-gray-600">
                    Cada fórmula contiene los nutrientes exactos que necesita cada especie en proporción correcta.
                    </p>
                </div>
                </div>
                <div className="flex gap-4">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                    2
                </div>
                <div>
                    <h4 className="font-bold text-gray-800 mb-2">Mayor Rentabilidad</h4>
                    <p className="text-gray-600">
                    Inversión en nutrición que se traduce en mayor productividad y mejores resultados económicos.
                    </p>
                </div>
                </div>
                <div className="flex gap-4">
                <div className="bg-green-700 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                    3
                </div>
                <div>
                    <h4 className="font-bold text-gray-800 mb-2">Salud Óptima</h4>
                    <p className="text-gray-600">
                    Sistema inmunológico fortalecido, menos enfermedades y animales más saludables.
                    </p>
                </div>
                </div>
                <div className="flex gap-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                    4
                </div>
                <div>
                    <h4 className="font-bold text-gray-800 mb-2">Sostenibilidad</h4>
                    <p className="text-gray-600">
                    Ingredientes responsables y producción que respeta el medio ambiente para generaciones futuras.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
    }
