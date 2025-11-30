import Navbar from "../components/Navbar";
import Carrusel from "../components/Carrusel";
import Footer from "../components/Footer";

const Inicio = () => {
    return (
        <div className="min-h-screen relative">
        <Navbar />
        
        <div className="flex">
            <Carrusel />
            
            {/* Texto - Lado derecho */}
            <div className="w-1/2 p-12 flex items-center">
            <div>
                <h1 className="text-5xl font-bold mb-6">ALIMENTOS SAN LORENZO</h1>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                tadore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit is.
                </p>
                
                <div className="flex items-center gap-12 mb-10">
                <div>
                    <span className="text-3xl font-bold">14.5+</span>
                    <p className="text-gray-600">Our Project</p>
                </div>
                <div>
                    <span className="text-3xl font-bold">Our Project</span>
                    <p className="text-gray-600">Our Project</p>
                </div>
                </div>

                <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
                Explorar
                </button>
            </div>
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default Inicio;