import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-full flex-col bg-gray-50">
      <div className="flex-grow flex items-center justify-center pt-24 pb-16 px-4">
        <div className="text-center max-w-xl">
          <p className="text-7xl md:text-8xl font-bold text-blue-800 mb-4">404</p>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Página no encontrada
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            La página que buscás no existe o fue movida.
          </p>
          <Link
            to="/"
            className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors shadow-md hover:shadow-lg"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
