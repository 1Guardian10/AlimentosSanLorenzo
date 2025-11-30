    // components/Navbar.tsx
    import { Link, useLocation } from "react-router-dom";

    const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="ml-0">
            <div className="flex space-x-6 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <Link 
                to="/" 
                className={`font-medium transition-all duration-300 ${
                    location.pathname === "/" 
                    ? "text-white bg-blue-600 px-4 py-2 rounded-full" 
                    : "text-black hover:text-white hover:bg-blue-600 px-4 py-2 rounded-full"
                }`}
                >
                INICIO
                </Link>
                <Link 
                to="/nosotros" 
                className={`font-medium transition-all duration-300 ${
                    location.pathname === "/nosotros" 
                    ? "text-white bg-blue-600 px-4 py-2 rounded-full" 
                    : "text-black hover:text-white hover:bg-blue-600 px-4 py-2 rounded-full"
                }`}
                >
                NOSOTROS
                </Link>
                <Link 
                to="/productos" 
                className={`font-medium transition-all duration-300 ${
                    location.pathname === "/productos" 
                    ? "text-white bg-blue-600 px-4 py-2 rounded-full" 
                    : "text-black hover:text-white hover:bg-blue-600 px-4 py-2 rounded-full"
                }`}
                >
                PRODUCTOS
                </Link>
                <Link 
                to="/promociones" 
                className={`font-medium transition-all duration-300 ${
                    location.pathname === "/promociones" 
                    ? "text-white bg-blue-600 px-4 py-2 rounded-full" 
                    : "text-black hover:text-white hover:bg-blue-600 px-4 py-2 rounded-full"
                }`}
                >
                PROMOCIONES
                </Link>
                <Link 
                to="/contactanos" 
                className={`font-medium transition-all duration-300 ${
                    location.pathname === "/contactanos" 
                    ? "text-white bg-blue-600 px-4 py-2 rounded-full" 
                    : "text-black hover:text-white hover:bg-blue-600 px-4 py-2 rounded-full"
                }`}
                >
                CONTACTANOS
                </Link>
            </div>
            </div>

            <div className="flex items-center mr-0">
            <img 
                src="/images/logoSINFONDO.PNG" 
                alt="Alimentos San Lorenzo" 
                className="h-16 w-auto"
            />
            </div>
        </div>
        </nav>
    );
    };

    export default Navbar;  