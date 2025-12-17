import Navbar from "../components/Navbar";
import Carrusel from "../components/Carrusel";
import Footer from "../components/Footer";
import InfoProductos from "../components/InfoProductos";

const Inicio = () => {
    return (
        <div className="min-h-screen relative">
            <Navbar />
            <Carrusel />
            <InfoProductos />
            <Footer />
        </div>
    );
};
export default Inicio;
