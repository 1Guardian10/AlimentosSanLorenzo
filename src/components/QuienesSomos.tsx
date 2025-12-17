    import { Award, Users, TrendingUp, Shield, Clock, Globe } from "lucide-react"

    export default function QuienesSomos() {
    return (
        <section id="quienes-somos" className="py-16 md:py-25 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">¿Quiénes Somos?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Más de 25 años siendo líderes en la producción de alimentos balanceados de alta calidad 
                para el sector ganadero y avícola en Bolivia y la región.
            </p>
            </div>

            {/* Main Content */}
            <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            {/* Historia */}
            <div className="space-y-8">
                <h3 className="text-3xl font-bold text-blue-700 border-l-4 border-blue-600 pl-4">
                Nuestra Historia
                </h3>
                
                <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                    <h4 className="font-bold text-gray-800 mb-1">1998 - Los Inicios</h4>
                    <p className="text-gray-600">
                        Fundada en San Lorenzo - Tarija, iniciamos con una visión clara: ofrecer nutrición de excelencia 
                        para impulsar el sector agropecuario regional.
                    </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                    <h4 className="font-bold text-gray-800 mb-1">Crecimiento y Expansión</h4>
                    <p className="text-gray-600">
                        Convertidos en referente de confianza, expandimos nuestras operaciones manteniendo el enfoque en 
                        calidad, innovación y servicio personalizado.
                    </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                    <h4 className="font-bold text-gray-800 mb-1">Hoy en Día</h4>
                    <p className="text-gray-600">
                        Con instalaciones modernas y tecnología de punta, desarrollamos fórmulas nutricionales que 
                        maximizan la productividad animal.
                    </p>
                    </div>
                </div>
                </div>
            </div>

            {/* Logo de la empresa */}
            <div className="relative flex items-center justify-center">
                <div className="relative w-full max-w-md">
                {/* Fondo decorativo */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full opacity-30"></div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-green-100 rounded-full opacity-30"></div>
                
                {/* Contenedor del logo */}
                <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl shadow-xl p-12 flex flex-col items-center justify-center border border-gray-200">
                    {/* Logo */}
                    <div className="w-48 h-48 md:w-56 md:h-56 mb-6 flex items-center justify-center">
                    <img 
                        src="/images/logoSINFONDO.PNG" 
                        alt="Logo Alimentos Balanceados San Lorenzo"
                        className="w-full h-full object-contain"
                    />
                    </div>
                    
                    {/* Texto bajo el logo */}
                    <div className="text-center">
                    <h3 className="text-2xl font-bold text-blue-800 mb-2">
                        Alimentos Balanceados
                    </h3>
                    <h4 className="text-xl font-semibold text-green-700 mb-3">
                        San Lorenzo
                    </h4>
                    <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                        <span className="text-blue-700 font-bold">25+</span>
                        <span className="text-gray-700 text-sm">Años de Excelencia</span>
                    </div>
                    </div>
                </div>
                
                {/* Elemento decorativo adicional */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-red-100 rounded-full opacity-20"></div>
                </div>
            </div>
            </div>

            {/* Values Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Calidad */}
            <div className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="text-blue-600" size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Calidad Certificada</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                Cumplimos con los más altos estándares internacionales de producción y control de calidad.
                </p>
            </div>

            {/* Equipo */}
            <div className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="text-red-600" size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Equipo Experto</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                Profesionales especializados en nutrición animal con años de experiencia en el sector.
                </p>
            </div>

            {/* Innovación */}
            <div className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="text-green-600" size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Innovación Constante</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                Investigamos continuamente para desarrollar fórmulas que optimicen los resultados productivos.
                </p>
            </div>

            {/* Confianza */}
            <div className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="text-blue-600" size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Confianza Garantizada</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                Miles de productores confían diariamente en la calidad y consistencia de nuestros productos.
                </p>
            </div>
            </div>

            {/* Call to Action simple */}
            <div className="mt-16 text-center">
            <a 
                href="/contactanos" 
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
                Contáctanos para Más Información
            </a>
            </div>
        </div>
        </section>
    )
    }