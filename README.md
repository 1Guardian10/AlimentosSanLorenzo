# Alimentos San Lorenzo

Sitio web institucional de Alimentos San Lorenzo, empresa de alimentos balanceados para bovinos, porcinos y aves con base en Tarija, Bolivia.

Es una aplicación de una sola página (SPA) con fines de marketing: presenta la empresa, el catálogo de productos, las promociones y los canales de contacto.

## Stack

- **React 19** con **TypeScript** (modo estricto)
- **Vite 7** como bundler y servidor de desarrollo
- **Tailwind CSS 4** vía `@tailwindcss/vite`
- **React Router 7** para el ruteo del lado del cliente
- **lucide-react** para iconos

## Requisitos

- **Node.js 20.19+** o **22.12+** (requisito de Vite 7)
- **npm** (el proyecto usa `package-lock.json`)

## Ejecutar en local

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar el servidor de desarrollo con recarga en caliente
npm run dev
```

El sitio queda disponible en **http://localhost:5173**.

Para probar el build de producción tal como se sirve en un hosting:

```bash
npm run build
npm run preview
```

El preview queda en **http://localhost:4173**.

## Scripts disponibles

| Script | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Verifica tipos (`tsc -b`) y genera `dist/` |
| `npm run preview` | Sirve localmente el resultado de `dist/` |
| `npm run lint` | Ejecuta ESLint sobre todo el proyecto |

## Rutas

| Ruta | Página | Contenido |
| --- | --- | --- |
| `/` | Inicio | Carrusel principal, categorías de producto y propuesta de valor |
| `/productos` | Productos | Catálogo completo con búsqueda y filtro por categoría |
| `/promociones` | Promociones | Combos y ofertas con filtro por categoría |
| `/nosotros` | Nosotros | Quiénes somos, la fábrica, misión y visión, video institucional |
| `/contactanos` | Contáctanos | Datos de contacto, formulario y accesos directos a WhatsApp |
| `*` | 404 | Página no encontrada |

## Estructura del proyecto

```
src/
  components/     Componentes reutilizables (Navbar, Footer, Carrusel, ProductCard, ...)
  data/           Fuente de datos del catálogo (productos.ts)
  layouts/        RootLayout: Navbar + <main> + Footer + ScrollToTop
  pages/          Una página por ruta
  router/         Definición de rutas
  index.css       Tailwind + animaciones globales
public/
  images/         Todas las imágenes optimizadas del sitio
```

El layout se aplica una sola vez en `src/layouts/RootLayout.tsx`. Las páginas no deben volver a renderizar `Navbar` ni `Footer`, ni agregar otro `<main>`.

## Editar contenido

### Productos y categorías

Todo el catálogo vive en `src/data/productos.ts`:

- `productos`: array de productos del catálogo (nombre, categoría, características, imagen, precio, descuento, combos).
- `categoriasInfo`: tarjetas de categorías de la página de inicio (icono, color, beneficios, descripción).
- `categorias`: lista de filtros, derivada de `categoriasInfo`.

Para agregar un producto, sumá un objeto a `productos`. Para que aparezca en los filtros, su categoría debe existir en `categoriasInfo`.

### Imágenes del hero

Las diapositivas del carrusel se configuran en `src/components/Carrusel.tsx` (array `slides`). Cada una usa un `base` y el componente arma las rutas por convención:

```
/images/{base}-960.avif
/images/{base}-1920.avif
/images/{base}-960.webp
/images/{base}-1920.webp
```

Si cambiás una imagen del hero, generá las cuatro variantes con esos nombres o la diapositiva no va a cargar.

### Imágenes de producto y fábrica

Se referencian directamente en `src/data/productos.ts` y `src/components/Fabrica.tsx` con rutas absolutas (`/images/...`). Los productos usan `productoN.webp` a 832px de ancho y la fábrica `fabricaN.webp` a 1280px.

Para comprimir una imagen nueva se necesita **ImageMagick** (`magick`) instalado:

```bash
magick origen.jpg \
  -auto-orient -strip \
  -resize '832x>' \
  -quality 80 \
  public/images/producto4.webp
```

- `-auto-orient`: corrige fotos rotadas.
- `-strip`: elimina metadatos EXIF.
- `-resize '832x>'`: reduce solo si es más grande, sin agrandar.
- `-quality 80`: equilibrio entre peso y calidad para WebP.

Todas las imágenes van en `public/images/`. Vite copia **toda** la carpeta `public/` al build, así que no dejes originales pesados ahí.

## Accesibilidad

- El carrusel tiene control de pausa, navegación por teclado (flechas izquierda/derecha), nombres accesibles en todos los controles y respeta `prefers-reduced-motion`.
- El layout incluye un enlace "Saltar al contenido".
- Los formularios y filtros tienen etiquetas y estados ARIA.

## Despliegue

El build genera archivos estáticos en `dist/`. Al ser una SPA con ruteo del lado del cliente, **el hosting debe redirigir cualquier ruta desconocida a `index.html`**; de lo contrario, entrar directo a `/productos` o recargar la página devuelve un 404 del servidor.

Ejemplos:

- Netlify: agregar `/* /index.html 200` en `public/_redirects`.
- Vercel: agregar una regla de rewrite a `/index.html`.
- Nginx: `try_files $uri $uri/ /index.html;`

## Pendientes conocidos

- **Formulario de contacto**: hoy valida y muestra "mensaje enviado" pero no envía nada. Falta integrarlo con un servicio (Formspree, Web3Forms, API propia) o convertirlo en un enlace de WhatsApp con mensaje precargado.
- **Datos de contacto**: los teléfonos usan prefijo de Colombia (+57) y los correos no están unificados. Falta centralizarlos y confirmar los valores reales.
- **SEO**: faltan Open Graph, canonical, sitemap y datos estructurados porque dependen del dominio de producción.
- **Tests**: el proyecto no tiene tests configurados.
