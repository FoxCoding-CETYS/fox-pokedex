import Link from "next/link";

// <Link> es como <a>, pero cambia de página sin recargar todo el sitio.
export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        🦊 Fox Pokédex
      </Link>
      <div className="links">
        <Link href="/pokedex">Pokédex</Link>
        <Link href="/about">Sobre nosotros</Link>
      </div>
    </nav>
  );
}
