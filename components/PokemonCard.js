// TODO (Etapa 4): cuando exista la página de detalle, envuelve la tarjeta
// en un <Link href={`/pokemon/${nombre}`}> para que al darle clic te lleve ahí.

// Un componente es una función. Sus "props" son los datos que recibe.
export default function PokemonCard({ id, nombre, imagen }) {
  return (
    <div className="card">
      <img src={imagen} alt={nombre} />
      <p className="numero">#{id}</p>
      <h3>{nombre}</h3>
    </div>
  );
}
