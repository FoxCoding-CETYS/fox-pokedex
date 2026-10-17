// Este archivo es la ruta "/" (la página de inicio).
// Regla de oro de Next.js: carpeta dentro de app/ + archivo page.js = una página.
export default function Inicio() {
  return (
    <section className="hero">
      <h1>Bienvenido a la Fox Pokédex</h1>
      <p>
        Hoy vamos a construir este sitio paso a paso con Next.js:
        páginas, componentes, datos de una API real y deploy a internet.
      </p>
      <p className="pista">
        👉 Intenta darle clic a &quot;Pokédex&quot; o &quot;Sobre nosotros&quot; en el menú.
        ¿Qué pasa? (Spoiler: es tu primer TODO).
      </p>
    </section>
  );
}
