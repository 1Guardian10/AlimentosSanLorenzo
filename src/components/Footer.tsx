import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
                <img 
                  src="/images/logoSINFONDO-96.webp" 
                  srcSet="/images/logoSINFONDO-96.webp 96w, /images/logoSINFONDO-224.webp 224w, /images/logoSINFONDO-448.webp 448w"
                  sizes="24px"
                  alt="Logo San Lorenzo"
                  width={24}
                  height={24}
                />
              </div>
              <span className="font-bold text-lg">San Lorenzo</span>
            </div>
            <p className="text-blue-100 text-sm">
              Desde 1998 nutriendo ganado de calidad
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navegación</h3>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/nosotros"
                  className="hover:text-white transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/productos"
                  className="hover:text-white transition-colors"
                >
                  Catálogo
                </Link>
              </li>
              <li>
                <Link
                  to="/promociones"
                  className="hover:text-white transition-colors"
                >
                  Promociones
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorías */}
          <div>
            <h3 className="font-bold text-lg mb-4">Categorías</h3>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link
                  to="/productos?categoria=Bovinos"
                  className="hover:text-white transition-colors text-left"
                >
                  Bovinos
                </Link>
              </li>
              <li>
                <Link
                  to="/productos?categoria=Porcinos"
                  className="hover:text-white transition-colors text-left"
                >
                  Porcinos
                </Link>
              </li>
              <li>
                <Link
                  to="/productos?categoria=Aves"
                  className="hover:text-white transition-colors text-left"
                >
                  Aves
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-center gap-2">
                {/* Icono de teléfono */}
                <Phone className="text-white" size={16} />
                <a href="tel:+573001234567" className="hover:text-white transition-colors">
                  (+57) 300 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                {/* Icono de correo */}
                <Mail className="text-white" size={16} />
                <a href="mailto:info@sanlorenzo.com" className="hover:text-white transition-colors">
                  info@sanlorenzo.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                {/* Icono de ubicación */}
                <MapPin className="text-white" size={16} />
                {/* Ubicación corregida */}
                <span>San Lorenzo - Tarija, Bolivia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisora */}
        <div className="border-t border-blue-700 my-8"></div>

        {/* Pie de página */}
        <div className="flex flex-col md:flex-row justify-between items-center text-blue-100 text-sm">
          <p>
            © {new Date().getFullYear()} Alimentos Balanceados San Lorenzo. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              to="/contactanos"
              className="hover:text-white transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;