    // components/Navbar.tsx
    "use client"

    import { useState } from "react"
    import { Link, useLocation } from "react-router-dom"

    // Íconos SVG personalizados
    const HomeIcon = ({ active }: { active: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${active ? 'text-white' : 'text-blue-800 group-hover:text-blue-800 transition-colors duration-300'}`} viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
    )

    const UsersIcon = ({ active }: { active: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${active ? 'text-white' : 'text-blue-800 group-hover:text-blue-800 transition-colors duration-300'}`} viewBox="0 0 20 20" fill="currentColor">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
    </svg>
    )

    const PackageIcon = ({ active }: { active: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${active ? 'text-white' : 'text-blue-800 group-hover:text-blue-800 transition-colors duration-300'}`} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
    </svg>
    )

    const TagIcon = ({ active }: { active: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${active ? 'text-white' : 'text-blue-800 group-hover:text-blue-800 transition-colors duration-300'}`} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
    </svg>
    )

    const PhoneIcon = ({ active }: { active: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${active ? 'text-white' : 'text-blue-800 group-hover:text-blue-800 transition-colors duration-300'}`} viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
    )

    const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    )

    const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
    )

    const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const navLinks = [
        { path: "/", label: "INICIO", icon: HomeIcon },
        { path: "/nosotros", label: "NOSOTROS", icon: UsersIcon },
        { path: "/productos", label: "PRODUCTOS", icon: PackageIcon },
        { path: "/promociones", label: "PROMOCIONES", icon: TagIcon },
        { path: "/contactanos", label: "CONTACTANOS", icon: PhoneIcon },
    ]

    return (
        <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <div className="relative">
                <img 
                    src="/images/logoSINFONDO.PNG" 
                    alt="Alimentos San Lorenzo" 
                    className="h-12 w-auto transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-red-400/20 rounded-full blur-sm"></div>
                </div>
                <span className="text-xl font-bold text-blue-800 hidden sm:inline tracking-tight">
                San Lorenzo
                </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2">
                {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                const Icon = link.icon
                return (
                    <Link
                    key={link.path}
                    to={link.path}
                    className={`group relative font-medium transition-all duration-400 ease-out flex items-center gap-2 px-4 py-3 rounded-xl ${
                        isActive
                        ? "bg-gradient-to-r from-blue-500 via-blue-600 to-red-500 text-white shadow-lg"
                        : "text-blue-700 hover:text-blue-900"
                    }`}
                    >
                    {/* Fondo suave en hover/active */}
                    <div className={`absolute inset-0 rounded-xl transition-all duration-400 ease-out ${
                        isActive 
                        ? "bg-gradient-to-r from-blue-500 via-blue-600 to-red-500 opacity-100" 
                        : "bg-gradient-to-r from-blue-100/50 to-red-100/50 opacity-0 group-hover:opacity-100"
                    }`}></div>
                    
                    {/* Contenido */}
                    <div className="relative z-10 flex items-center gap-2">
                        <Icon active={isActive} />
                        <span className="transition-all duration-400">{link.label}</span>
                    </div>
                    
                    {/* Efecto de subrayado elegante */}
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[3px] rounded-full transition-all duration-500 ease-out ${
                        isActive 
                        ? "w-4/5 bg-gradient-to-r from-blue-300 to-red-300" 
                        : "w-0 bg-gradient-to-r from-blue-400 to-red-400 group-hover:w-4/5"
                    }`}></div>
                    </Link>
                )
                })}
            </div>

            {/* Mobile Menu Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="md:hidden p-3 rounded-xl bg-gradient-to-r from-blue-50 to-red-50 hover:from-blue-100 hover:to-red-100 transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
            >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
            <div className="md:hidden py-4 space-y-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-blue-100 animate-fadeIn">
                {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                const Icon = link.icon
                return (
                    <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center gap-4 px-6 py-4 mx-2 rounded-xl transition-all duration-300 ease-out ${
                        isActive
                        ? "bg-gradient-to-r from-blue-500 to-red-500 text-white shadow-md"
                        : "text-blue-700 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-red-50/80"
                    }`}
                    >
                    <div className={`p-2 rounded-lg transition-all duration-300 ${
                        isActive 
                        ? "bg-white/30" 
                        : "bg-gradient-to-r from-blue-50 to-red-50 group-hover:bg-gradient-to-r group-hover:from-blue-100 group-hover:to-red-100"
                    }`}>
                        <Icon active={isActive} />
                    </div>
                    <span className="font-medium transition-all duration-300">{link.label}</span>
                    
                    {/* Flecha suave para activo */}
                    {isActive && (
                        <div className="ml-auto opacity-0 animate-fadeIn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        </div>
                    )}
                    </Link>
                )
                })}
            </div>
            )}
        </div>
        </nav>
    )
    }

    export default Navbar