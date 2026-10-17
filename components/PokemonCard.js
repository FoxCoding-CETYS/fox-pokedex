import Link from "next/link";

// Un componente es una función. Sus "props" son los datos que recibe.
export default function PokemonCard({ id, nombre, imagen }) {
  return (
    <Link href={`/pokemon/${nombre}`} className="card">
      <img src={imagen} alt={nombre} />
      <p className="numero">#{id}</p>
      <h3>{nombre}</h3>
    </Link>
  );
}
