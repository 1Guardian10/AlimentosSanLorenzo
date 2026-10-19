import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"

const slides = [
  {
    title: "Alimentos Balanceados Premium",
    subtitle: "Nutrición de calidad para el crecimiento saludable de tus animales",
    base: "vacas1",
    alt: "Vacas pastando en un campo verde",
  },
  {
    title: "Máxima Calidad Garantizada",
    subtitle: "Productos elaborados con los mejores ingredientes naturales",
    base: "fabrica1",
    alt: "Interior de la fábrica de alimentos balanceados San Lorenzo",
  },
  {
    title: "Cuidado Total de tu Ganadería",
    subtitle: "Soluciones nutricionales para vacas, gallinas y cerdos",
    base: "alimento1",
    alt: "Alimento balanceado para la ganadería",
  },
]

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleChange = (event: MediaQueryListEvent) =>
      setPrefersReducedMotion(event.matches)

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return prefersReducedMotion
}

export default function Carrusel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [announcement, setAnnouncement] = useState("")
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isDocumentVisible, setIsDocumentVisible] = useState(
    () => typeof document === "undefined" || !document.hidden,
  )
  const [isInView, setIsInView] = useState(true)
  const prefersReducedMotion = usePrefersReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const navigate = useNavigate()

  const announceSlide = (index: number) =>
    setAnnouncement(
      `Diapositiva ${index + 1} de ${slides.length}: ${slides[index].title}`,
    )

  const nextSlide = () => {
    setIsPaused(true)
    if (isAnimating) return
    const nextIndex = (currentSlide + 1) % slides.length
    announceSlide(nextIndex)
    setIsAnimating(true)
    setCurrentSlide(nextIndex)
  }

  const prevSlide = () => {
    setIsPaused(true)
    if (isAnimating) return
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length
    announceSlide(prevIndex)
    setIsAnimating(true)
    setCurrentSlide(prevIndex)
  }

  const goToSlide = (index: number) => {
    setIsPaused(true)
    if (isAnimating || index === currentSlide) return
    announceSlide(index)
    setIsAnimating(true)
    setCurrentSlide(index)
  }

  // Auto-slide: only while the carousel is active, visible and motion is allowed.
  useEffect(() => {
    if (
      isPaused ||
      isHovered ||
      isFocused ||
      !isDocumentVisible ||
      !isInView ||
      prefersReducedMotion
    ) {
      return
    }

    const timer = setInterval(() => {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [
    isPaused,
    isHovered,
    isFocused,
    isDocumentVisible,
    isInView,
    prefersReducedMotion,
  ])

  // Reset the transition flag once the 1000ms slide transition finishes.
  useEffect(() => {
    if (!isAnimating) return
    const timer = setTimeout(() => setIsAnimating(false), 1000)
    return () => clearTimeout(timer)
  }, [isAnimating])

  // Pause when the tab is hidden.
  useEffect(() => {
    const handleVisibilityChange = () =>
      setIsDocumentVisible(!document.hidden)

    handleVisibilityChange()
    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange)
  }, [])

  // Pause when the hero is scrolled out of view.
  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      prevSlide()
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      nextSlide()
    }
  }

  const handleBlur = (event: React.FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsFocused(false)
    }
  }

  const navigateToContact = () => {
    setIsPaused(true)
    navigate("/contactanos")
  }

  return (
    <section
      id="inicio"
      ref={sectionRef}
      tabIndex={0}
      aria-roledescription="carrusel"
      aria-label="Imágenes destacadas de Alimentos San Lorenzo"
      className="relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={handleBlur}
    >
      {/* Carrusel que ocupa toda la pantalla */}
      <div className="h-[100svh] min-h-[100svh] w-full overflow-hidden">
        {/* Slides */}
        <div className="relative h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} de ${slides.length}`}
              aria-hidden={index !== currentSlide}
              className={`absolute inset-0 transition-all duration-1000 ease-out motion-reduce:transition-none ${
                index === currentSlide
                  ? "opacity-100 scale-110"
                  : "opacity-0 scale-100"
              }`}
            >
              {/* Imagen con parallax effect */}
              <picture className="absolute inset-0 block h-full w-full overflow-hidden">
                <source
                  type="image/avif"
                  srcSet={`/images/${slide.base}-960.avif 960w, /images/${slide.base}-1920.avif 1920w`}
                  sizes="100vw"
                />
                <img
                  src={`/images/${slide.base}-1920.webp`}
                  srcSet={`/images/${slide.base}-960.webp 960w, /images/${slide.base}-1920.webp 1920w`}
                  sizes="100vw"
                  alt={slide.alt}
                  width={1920}
                  height={1280}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : undefined}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[10000ms] motion-reduce:transition-none"
                  style={{
                    transform:
                      index === currentSlide && !prefersReducedMotion
                        ? "scale(1.05)"
                        : "scale(1)",
                  }}
                />
              </picture>

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
                transition-all duration-700 motion-reduce:transition-none
                ${isAnimating ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"}
              `}
            >
              {slides[currentSlide].title}
            </h1>

            <p
              className={`
                text-lg sm:text-xl md:text-2xl lg:text-3xl
                mb-8 md:mb-12 max-w-3xl mx-auto
                transition-all duration-700 delay-100 motion-reduce:transition-none
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
                transition-all duration-500 delay-200 motion-reduce:transition-none
                hover:scale-105 hover:shadow-2xl active:scale-95
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
          type="button"
          aria-label="Diapositiva anterior"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20
                    bg-black/40 hover:bg-black/60 backdrop-blur-sm
                    text-white p-3 rounded-full transition-all duration-300 motion-reduce:transition-none
                    hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <ChevronLeft size={28} aria-hidden="true" />
        </button>

        <button
          type="button"
          aria-label="Diapositiva siguiente"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20
                    bg-black/40 hover:bg-black/60 backdrop-blur-sm
                    text-white p-3 rounded-full transition-all duration-300 motion-reduce:transition-none
                    hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <ChevronRight size={28} aria-hidden="true" />
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((slide, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Ir a la diapositiva ${index + 1}: ${slide.title}`}
              aria-current={index === currentSlide ? "true" : undefined}
              onClick={() => goToSlide(index)}
              className="group relative w-6 h-6 flex items-center justify-center rounded-full
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span
                className={`
                  block w-3 h-3 rounded-full transition-all duration-300 motion-reduce:transition-none
                  ${
                    index === currentSlide
                      ? "bg-gradient-to-r from-blue-500 to-blue-400 scale-125"
                      : "bg-white/50 group-hover:bg-white/80"
                  }
                `}
              />
              {index === currentSlide && (
                <span
                  className="absolute inset-0 w-3 h-3 m-auto rounded-full
                            bg-gradient-to-r from-blue-500 to-blue-400
                            animate-ping opacity-40 motion-reduce:hidden"
                />
              )}
            </button>
          ))}
        </div>

        {/* Contador */}
        <div
          aria-hidden="true"
          className="absolute bottom-8 right-8 z-20
                      bg-black/30 backdrop-blur-sm
                      text-white px-4 py-2 rounded-full text-sm"
        >
          <span className="font-bold">{currentSlide + 1}</span>
          <span className="mx-2">/</span>
          <span>{slides.length}</span>
        </div>

        {/* Control de reproducción */}
        <button
          type="button"
          aria-label={
            prefersReducedMotion
              ? "Carrusel en modo manual"
              : isPaused
                ? "Reproducir carrusel"
                : "Pausar carrusel"
          }
          disabled={prefersReducedMotion}
          onClick={() => {
            setIsFocused(false)
            setIsPaused((prev) => !prev)
          }}
          className="absolute top-24 right-4 sm:right-8 z-20
                    bg-black/60 hover:bg-black/80 backdrop-blur-sm
                    text-white px-3 py-2 rounded-full text-xs font-medium
                    flex items-center gap-2 transition-all duration-300 motion-reduce:transition-none
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {prefersReducedMotion || isPaused ? (
            <Play size={14} aria-hidden="true" />
          ) : (
            <Pause size={14} aria-hidden="true" />
          )}
          <span>
            {prefersReducedMotion ? "Manual" : isPaused ? "Reproducir" : "Pausar"}
          </span>
        </button>

        {/* Anuncio de cambio de diapositiva para lectores de pantalla */}
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          {announcement}
        </p>
      </div>
    </section>
  )
}
