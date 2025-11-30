import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Productos from "../pages/Productos";
import Promociones from "../pages/Promociones";
import Nosotros from "../pages/Nosotros";
import Contactanos from "../pages/Contactanos";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/promociones" element={<Promociones />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contactanos" element={<Contactanos />} />
        </Routes>
    )
}

export default AppRouter;