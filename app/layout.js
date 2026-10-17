import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Fox Pokédex",
  description: "Taller de Next.js de Fox Coding",
};

// El layout envuelve TODAS las páginas: lo que pongas aquí aparece en todo el sitio.
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="contenedor">{children}</main>
      </body>
    </html>
  );
}
