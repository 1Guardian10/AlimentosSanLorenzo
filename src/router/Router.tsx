import { Routes, Route } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Inicio from "../pages/Inicio";
import Productos from "../pages/Productos";
import Promociones from "../pages/Promociones";
import Nosotros from "../pages/Nosotros";
import Contactanos from "../pages/Contactanos";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route path="/" element={<Inicio />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/promociones" element={<Promociones />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/contactanos" element={<Contactanos />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default AppRouter;
