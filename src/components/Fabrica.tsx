    "use client"

    import { CheckCircle, ShieldCheck, Package, Settings } from "lucide-react"
import Video from "./Video"

    export default function Fabrica() {
    return (
        <section id="fabrica" className="py-10 md:py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Título simple */}
            <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
                Nuestra Fábrica
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Instalaciones modernas con tecnología avanzada para la producción de alimentos balanceados de alta calidad
            </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">

            {/* VIDEO - Mantenido como estaba */}

            <Video/>

            {/* Texto simple */}
            <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-6">
                Tecnología y Calidad
                </h3>

                <p className="text-gray-700 mb-6">
                Nuestras instalaciones cuentan con equipamiento de última generación que garantiza la producción 
                de alimentos de máxima calidad y seguridad para tu ganadería.
                </p>

                <div className="space-y-4">
                {[
                    "Sistemas de procesamiento automatizado",
                    "Control de calidad en tiempo real",
                    "Laboratorio de análisis especializado",
                    "Certificaciones internacionales ISO"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-800">{item}</span>
                    </div>
                ))}
                </div>
            </div>
            </div>

            {/* Galería con fotos reales */}
            <h2 className="text-4xl font-bold text-blue-700 mb-10 text-center">
            Nuestras Instalaciones
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

            {/* Card 1 - Almacenamiento */}
            <div className="rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 transition hover:shadow-lg">
                <div className="h-64 relative overflow-hidden">
                <img 
                    src="/images/fabrica4.jpg" 
                    alt="Almacenamiento de granos"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                    Almacenamiento
                </div>
                </div>
                <div className="bg-white p-5">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Package className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-blue-700 text-lg">Almacenamiento Inteligente</h4>
                </div>
                <p className="text-sm text-gray-600">
                    Silos especializados con control de temperatura y humedad para preservar la calidad nutricional de cada grano.
                </p>
                </div>
            </div>

            {/* Card 2 - Procesamiento */}
            <div className="rounded-xl overflow-hidden border border-gray-200 hover:border-red-300 transition hover:shadow-lg">
                <div className="h-64 relative overflow-hidden">
                <img 
                    src="/images/fabrica3.jpg" 
                    alt="Proceso de mezcla y molienda"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                    Procesamiento
                </div>
                </div>
                <div className="bg-white p-5">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <Settings className="w-5 h-5 text-red-600" />
                    </div>
                    <h4 className="font-bold text-red-700 text-lg">Mezcla y Molienda</h4>
                </div>
                <p className="text-sm text-gray-600">
                    Equipos avanzados para mezcla, granulación y procesamiento con máxima precisión en cada fórmula.
                </p>
                </div>
            </div>

            {/* Card 3 - Control de Calidad */}
            <div className="rounded-xl overflow-hidden border border-gray-200 hover:border-green-300 transition hover:shadow-lg">
                <div className="h-64 relative overflow-hidden">
                <img 
                    src="/images/fabrica1.jpg" 
                    alt="Control de calidad en laboratorio"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                    Calidad
                </div>
                </div>
                <div className="bg-white p-5">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-green-600" />
                    </div>
                    <h4 className="font-bold text-green-700 text-lg">Control de Calidad</h4>
                </div>
                <p className="text-sm text-gray-600">
                    Laboratorio equipado para análisis nutricionales que garantizan la calidad y seguridad de cada lote producido.
                </p>
                </div>
            </div>
            </div>

            {/* Sección de capacidades */}
            <div className="mt-16 bg-blue-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-blue-700 mb-6 text-center">
                Capacidad Productiva
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                <div className="text-2xl font-bold text-blue-700 mb-1">500+</div>
                <div className="text-sm text-gray-600">Toneladas Mensuales</div>
                </div>
                <div className="text-center">
                <div className="text-2xl font-bold text-red-700 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Operación Continua</div>
                </div>
                <div className="text-center">
                <div className="text-2xl font-bold text-green-700 mb-1">99%</div>
                <div className="text-sm text-gray-600">Eficiencia</div>
                </div>
                <div className="text-center">
                <div className="text-2xl font-bold text-blue-700 mb-1">100%</div>
                <div className="text-sm text-gray-600">Calidad Certificada</div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
    }