"use client"

    import { useState } from "react"
    import { Phone, Mail, Clock, MessageCircle, Send, Building, User } from "lucide-react"
    import Footer from "../components/Footer"
    import Navbar from "../components/Navbar"

    export default function Contactanos() {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Formulario enviado:", formData)
        alert("¡Mensaje enviado! Te contactaremos pronto.")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        })
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white py-26">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
                <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-green-500 mx-auto mb-6"></div>
                <p className="text-xl max-w-2xl mx-auto">
                Estamos aquí para atenderte y resolver todas tus dudas sobre nutrición animal
                </p>
            </div>
            </section>

            {/* Contact Information */}
            <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12">
                
                {/* Contact Form */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-blue-700">Envíanos un Mensaje</h2>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                        <label className="block text-gray-700 mb-2 font-medium">Nombre *</label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 w-5 h-5 text-blue-500" />
                            <input
                            type="text"
                            name="nombre"
                            required
                            value={formData.nombre}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Tu nombre"
                            />
                        </div>
                        </div>
                        <div>
                        <label className="block text-gray-700 mb-2 font-medium">Apellido *</label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 w-5 h-5 text-blue-500" />
                            <input
                            type="text"
                            name="apellido"
                            required
                            value={formData.apellido}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Tu apellido"
                            />
                        </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Email *</label>
                        <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-blue-500" />
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="tu@email.com"
                        />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Teléfono</label>
                        <div className="relative">
                        <Phone className="absolute left-3 top-3 w-5 h-5 text-blue-500" />
                        <input
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="(+57) 300 123 4567"
                        />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Asunto *</label>
                        <div className="relative">
                        <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-blue-500 z-10" />
                        <select 
                            name="asunto"
                            required
                            value={formData.asunto}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                        >
                            <option value="">Selecciona un asunto</option>
                            <option value="cotizacion">Cotización de productos</option>
                            <option value="informacion">Información técnica</option>
                            <option value="soporte">Soporte post-venta</option>
                            <option value="distribuidor">Ser distribuidor</option>
                            <option value="otro">Otro</option>
                        </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Mensaje *</label>
                        <textarea
                        name="mensaje"
                        rows={5}
                        required
                        value={formData.mensaje}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    >
                        <Send className="w-5 h-5" />
                        Enviar Mensaje
                    </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <Building className="w-6 h-6 text-red-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-red-700">Información de Contacto</h2>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Phone className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800 mb-1">Teléfonos</h3>
                            <div className="space-y-2">
                            <a href="tel:+573001234567" className="text-gray-700 hover:text-red-600 block font-medium">
                                (+57) 300 123 4567
                            </a>
                            <a href="tel:+573002345678" className="text-gray-700 hover:text-red-600 block font-medium">
                                (+57) 300 234 5678
                            </a>
                            <span className="text-sm text-gray-500 block mt-1">Atención de lunes a sábado</span>
                            </div>
                        </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Mail className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                            <div className="space-y-2">
                            <a href="mailto:angoladiego5@gmail.com" className="text-gray-700 hover:text-red-600 block font-medium">
                                ventas@sanlorenzo.com
                            </a>
                            <a href="mailto:soporte@sanlorenzo.com" className="text-gray-700 hover:text-red-600 block font-medium">
                                soporte@sanlorenzo.com
                            </a>
                            <span className="text-sm text-gray-500 block mt-1">Respondemos en menos de 24h</span>
                            </div>
                        </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Clock className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800 mb-1">Horarios de Atención</h3>
                            <div className="space-y-1">
                            <p className="text-gray-700 font-medium">Lunes a Viernes</p>
                            <p className="text-gray-600">8:00 AM - 6:00 PM</p>
                            <p className="text-gray-700 font-medium mt-2">Sábados</p>
                            <p className="text-gray-600">9:00 AM - 1:00 PM</p>
                            </div>
                        </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <MessageCircle className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800 mb-1">WhatsApp</h3>
                            <p className="text-gray-600 mb-3">Respuesta inmediata</p>
                            <a 
                            href="https://wa.me/573001234567" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors font-medium"
                            >
                            Escribir por WhatsApp
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* Quick Response - Verde mínimo */}
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
                    <div className="flex items-center gap-3 mb-4">
                        <Clock className="w-6 h-6 text-green-600" />
                        <h3 className="text-xl font-bold text-green-700">Respuesta Rápida</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                        Nos comprometemos a responder tu mensaje en menos de 24 horas hábiles.
                    </p>
                    <div className="flex items-center gap-2 text-green-600 font-medium">
                        <Clock className="w-5 h-5" />
                        <span className="text-sm">Tiempo promedio: 4 horas</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
                    {/* Map Section - Iframe de Google Maps */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-700 mb-2">Nuestra Ubicación</h2>
              <p className="text-gray-600">Visítanos en San Lorenzo - Tarija, Bolivia</p>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-300">
              {/* Google Maps Embed - Ubicación General de Tarija */}
              <div className="h-96 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.587544947665!2d-64.7688887248615!3d-21.536434780842656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93d32f7f4bc0d5eb%3A0x87e19bd29c277d21!2sSan%20Lorenzo%2C%20Tarija%2C%20Bolivia!5e0!3m2!1ses!2s!4v1702140000000!5m2!1ses!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación San Lorenzo Tarija"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

            {/* Información Adicional */}
            <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-700 mb-2">¿Necesitas Ayuda Inmediata?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Nuestro equipo está listo para asistirte con cualquier consulta sobre nutrición animal
                </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">Llámanos Directamente</h3>
                    <p className="text-gray-600 mb-4">
                    Para consultas urgentes o cotizaciones inmediatas
                    </p>
                    <a 
                    href="tel:+573001234567" 
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                    (+57) 300 123 4567
                    </a>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-red-700 mb-3">Envíanos un Email</h3>
                    <p className="text-gray-600 mb-4">
                    Para consultas técnicas o información detallada
                    </p>
                    <a 
                    href="mailto:soporte@sanlorenzo.com" 
                    className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                    >
                    soporte@sanlorenzo.com
                    </a>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-700 mb-3">WhatsApp Rápido</h3>
                    <p className="text-gray-600 mb-4">
                    Para respuestas instantáneas y asesoría personalizada
                    </p>
                    <a 
                    href="https://wa.me/573001234567" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
                    >
                    Escribir por WhatsApp
                    </a>
                </div>
                </div>
            </div>
            </section>
        </main>

        {/* Footer */}
        <Footer />
        </div>
    )
    }