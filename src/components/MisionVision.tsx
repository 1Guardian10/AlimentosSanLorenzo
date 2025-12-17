    "use client"

    import { Target, Eye, ShieldCheck, Leaf, Handshake } from "lucide-react"

    export default function MisionVision() {
    return (
        <section id="mision" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Título */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-700">
            Nuestra Mision y Vision
            </h2>

            {/* Misión y Visión */}
            <div className="grid md:grid-cols-2 gap-12">

            {/* --- Misión --- */}
            <div className="p-8 rounded-xl border border-blue-200 shadow-sm bg-white">
                <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-600 p-3 rounded-full">
                    <Target className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-blue-700">Misión</h3>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed">
                Proporcionar alimentos balanceados de alta calidad que garanticen la salud y productividad de vacas,
                gallinas y cerdos, con productos confiables respaldados por investigación y formulaciones precisas para
                cada especie.
                </p>
            </div>

            {/* --- Visión --- */}
            <div className="p-8 rounded-xl border border-red-200 shadow-sm bg-white">
                <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-600 p-3 rounded-full">
                    <Eye className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-red-600">Visión</h3>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed">
                Ser el referente regional en alimentos balanceados, reconocidos por calidad, responsabilidad y compromiso
                con el desarrollo sostenible del sector ganadero, promoviendo confianza en cada productor.
                </p>
            </div>
            </div>

            {/* Valores */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">

            {/* --- Calidad --- */}
            <div className="text-center">
                <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
                <ShieldCheck className="text-blue-700" size={40} />
                </div>
                <h4 className="text-xl font-bold text-blue-700">Calidad</h4>
                <p className="text-gray-600">Productos formulados con altos estándares y controles estrictos.</p>
            </div>

            {/* --- Sustentabilidad --- */}
            <div className="text-center">
                <div className="inline-block bg-green-100 p-4 rounded-full mb-4">
                <Leaf className="text-green-600" size={40} />
                </div>
                <h4 className="text-xl font-bold text-green-700">Sustentabilidad</h4>
                <p className="text-gray-600">Compromiso con el uso responsable de los recursos y el medio ambiente.</p>
            </div>

            {/* --- Confianza --- */}
            <div className="text-center">
                <div className="inline-block bg-red-100 p-4 rounded-full mb-4">
                <Handshake className="text-red-700" size={40} />
                </div>
                <h4 className="text-xl font-bold text-red-700">Confianza</h4>
                <p className="text-gray-600">Relaciones basadas en transparencia, responsabilidad y compromiso.</p>
            </div>
            </div>

        </div>
        </section>
    )
    }
