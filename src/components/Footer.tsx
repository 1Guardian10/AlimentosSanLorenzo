import { Link } from "react-router-dom";
// Importar los iconos de react-icons
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  function handleLocationClick(url:string) {
    navigate(url);
    // Asegurar que la página de nosotros quede al inicio
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 50);
  }
  return (
    <footer className="bg-blue-900 text-white">
      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
                <img src="/images/logoSINFONDO.PNG" alt="Logo San Lorenzo" />
              </div>
              <span className="font-bold text-lg">San Lorenzo</span>
            </div>
            <p className="text-blue-100 text-sm">
              Más de 20 años nutriendo ganado de calidad
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navegación</h3>
            <ul className="space-y-2 text-blue-100">
              <li>
                <button
                  onClick={() => handleLocationClick('/')}
                  className="hover:text-white transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLocationClick('/productos')}
                  className="hover:text-white transition-colors"
                >
                  Catalogo
                </button>
              </li>
            </ul>
          </div>

          {/* Categorías */}
          <div>
            <h3 className="font-bold text-lg mb-4">Categorías</h3>
            <ul className="space-y-2 text-blue-100">
              <li>
                <button className="hover:text-white transition-colors text-left">
                  Bovinos
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors text-left">
                  Porcinos
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors text-left">
                  Aves
                </button>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-center gap-2">
                {/* Icono de teléfono */}
                <FaPhoneAlt className="text-white" />
                <a href="tel:+573001234567" className="hover:text-white transition-colors">
                  (+57) 300 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                {/* Icono de correo */}
                <FaEnvelope className="text-white" />
                <a href="mailto:info@sanlorenzo.com" className="hover:text-white transition-colors">
                  info@sanlorenzo.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                {/* Icono de ubicación */}
                <FaMapMarkerAlt className="text-white" />
                {/* Ubicación corregida */}
                <span>San Lorenzo - Tarija, Bolivia[citation:1]</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisora */}
        <div className="border-t border-blue-700 my-8"></div>

        {/* Pie de página */}
        <div className="flex flex-col md:flex-row justify-between items-center text-blue-100 text-sm">
          <p>
            © 2025 Alimentos Balanceados San Lorenzo. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button
                  onClick={() => handleLocationClick('/Contactanos')}
                  className="hover:text-white transition-colors"
                >
                  Contacto
                </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;