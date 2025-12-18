    "use client"
    import { useNavigate } from 'react-router-dom';
    import { useState, useEffect, useCallback } from "react"
    import { ChevronLeft, ChevronRight } from "lucide-react"

    const slides = [
    {
        title: "Alimentos Balanceados Premium",
        subtitle: "Nutrición de calidad para el crecimiento saludable de tus animales",
        image: "/images/vacas1.jpg",
    },
    {
        title: "Máxima Calidad Garantizada",
        subtitle: "Productos elaborados con los mejores ingredientes naturales",
        image: "/images/fabrica1.jpg",
    },
    {
        title: "Cuidado Total de tu Ganadería",
        subtitle: "Soluciones nutricionales para vacas, gallinas y cerdos",
        image: "/images/alimento1.jpg",
    },
    ]

    export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const navigate = useNavigate();

    const nextSlide = useCallback(() => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setTimeout(() => setIsAnimating(false), 700)
    }, [isAnimating])

    const prevSlide = useCallback(() => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        setTimeout(() => setIsAnimating(false), 700)
    }, [isAnimating])

    const goToSlide = useCallback(
        (index: number) => {
        if (isAnimating || index === currentSlide) return
        setIsAnimating(true)
        setCurrentSlide(index)
        setTimeout(() => setIsAnimating(false), 700)
        },
        [isAnimating, currentSlide]
    )

    // Auto-slide
    useEffect(() => {
        if (!isAutoPlaying) return

        const timer = setInterval(() => {
        nextSlide()
        }, 5000)

        return () => clearInterval(timer)
    }, [isAutoPlaying, nextSlide])

    const pauseAutoPlay = () => {
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    const navigateToContact = () => {
        pauseAutoPlay()
        navigate('/contactanos')
    }

    return (
        <section id="inicio" className="relative">
        {/* Carrusel que ocupa toda la pantalla */}
        <div className="h-screen w-full overflow-hidden">

            {/* Slides */}
            <div className="relative h-full w-full">
            {slides.map((slide, index) => (
                <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-out ${
                    index === currentSlide
                    ? "opacity-100 scale-110"
                    : "opacity-0 scale-100"
                }`}
                >

                {/* Imagen con parallax effect */}
                <div
                    className="
                    absolute inset-0 w-full h-full 
                    bg-cover bg-center bg-no-repeat
                    transition-transform duration-[10000ms]
                    "
                    style={{
                    backgroundImage: `url(${slide.image})`,
                    transform: index === currentSlide ? "scale(1.05)" : "scale(1)",
                    }}
                />

                {/* Overlay para mejor legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
                </div>
            ))}
            </div>

            {/* Contenido centrado verticalmente */}
            <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 sm:px-8 max-w-6xl z-10">

                <h1
                className={`
                    text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                    font-bold mb-4 md:mb-6 
                    transition-all duration-700
                    ${isAnimating ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"}
                `}
                >
                {slides[currentSlide].title}
                </h1>

                <p
                className={`
                    text-lg sm:text-xl md:text-2xl lg:text-3xl 
                    mb-8 md:mb-12 max-w-3xl mx-auto
                    transition-all duration-700 delay-100
                    ${isAnimating ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"}
                `}
                >
                {slides[currentSlide].subtitle}
                </p>

                <button
                className={`
                    bg-white 
                    text-blue-600 
                    px-8 py-4 rounded-xl 
                    font-semibold text-lg 
                    shadow-2xl 
                    transition-all duration-500 delay-200
                    hover:scale-105 hover:shadow-3xl active:scale-95
                    ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}
                `}
                onClick={navigateToContact}
                >
                Obtén Más Información
                </button>

            </div>
            </div>

            {/* Botones de control */}
            <button
            onClick={() => {
                prevSlide()
                pauseAutoPlay()
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 
                        bg-white/20 hover:bg-white/30 backdrop-blur-sm 
                        text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
            <ChevronLeft size={28} />
            </button>

            <button
            onClick={() => {
                nextSlide()
                pauseAutoPlay()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 
                        bg-white/20 hover:bg-white/30 backdrop-blur-sm 
                        text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
            <ChevronRight size={28} />
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {slides.map((_, index) => (
                <button
                key={index}
                onClick={() => {
                    goToSlide(index)
                    pauseAutoPlay()
                }}
                className="group relative"
                >
                <div
                    className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${
                        index === currentSlide
                        ? "bg-gradient-to-r from-blue-500 to-blue-400 scale-125"
                        : "bg-white/50 group-hover:bg-white/80"
                    }
                    `}
                />
                {index === currentSlide && (
                    <div
                    className="absolute inset-0 w-3 h-3 rounded-full 
                                bg-gradient-to-r from-blue-500 to-blue-400 
                                animate-ping opacity-40"
                    />
                )}
                </button>
            ))}
            </div>

            {/* Contador */}
            <div className="absolute bottom-8 right-8 z-20 
                            bg-black/30 backdrop-blur-sm 
                            text-white px-4 py-2 rounded-full text-sm">
            <span className="font-bold">{currentSlide + 1}</span>
            <span className="mx-2">/</span>
            <span>{slides.length}</span>
            </div>

            {/* Indicador de AutoPlay */}
            <div className="absolute top-8 right-8 z-20 
                            bg-black/30 backdrop-blur-sm 
                            text-white px-3 py-1 rounded-full text-xs 
                            flex items-center gap-2">
            <div
                className={`
                w-2 h-2 rounded-full 
                ${isAutoPlaying ? "bg-green-400 animate-pulse" : "bg-yellow-400"}
                `}
            />
            <span>{isAutoPlaying ? "Auto" : "Pausado"}</span>
            </div>

        </div>

        {/* Espacio en blanco para forzar scroll */}
        <div className="h-0"></div>
        </section>
    )
    }