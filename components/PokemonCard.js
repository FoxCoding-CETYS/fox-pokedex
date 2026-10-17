// ─────────────────────────────────────────────────────────────
// TODO (Etapa 2): Componentes y props
//
// Este componente debe recibir las props { id, nombre, imagen }
// y mostrar una tarjeta con:
//   - la imagen del pokémon (<img src={...} alt={...} />)
//   - el número, por ejemplo "#25"   (usa className="numero")
//   - el nombre                      (usa un <h3>)
//
// Pista: las props llegan como el parámetro de la función:
//   export default function PokemonCard({ id, nombre, imagen }) { ... }
//
// TODO (Etapa 4): cuando exista la página de detalle, envuelve la tarjeta
// en un <Link href={`/pokemon/${nombre}`}> para que al darle clic te lleve ahí.
// ─────────────────────────────────────────────────────────────

export default function PokemonCard() {
  return <div className="card">Soy una tarjeta vacía 😢</div>;
}
