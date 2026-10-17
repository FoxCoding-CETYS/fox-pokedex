import Link from "next/link";
import { obtenerPokemon } from "@/lib/pokeapi";

// Ruta dinámica: /pokemon/pikachu, /pokemon/eevee, /pokemon/lo-que-sea...
// Los corchetes [nombre] hacen que esa parte de la URL llegue en "params".
export default async function DetallePokemon({ params }) {
  const { nombre } = await params;
  const pokemon = await obtenerPokemon(nombre);

  // Reto final: en lugar de esto, usa notFound() de "next/navigation"
  if (!pokemon) {
    return (
      <section>
        <Link href="/pokedex" className="volver">← Volver a la Pokédex</Link>
        <h1>No encontramos a &quot;{nombre}&quot; 🤔</h1>
      </section>
    );
  }

  return (
    <section>
      <Link href="/pokedex" className="volver">← Volver a la Pokédex</Link>
      <div className="detalle">
        <img src={pokemon.imagen} alt={pokemon.nombre} />
        <div>
          <p className="pista">#{pokemon.id}</p>
          <h1>{pokemon.nombre}</h1>
          <div className="tipos">
            {pokemon.tipos.map((tipo) => (
              <span key={tipo} className="tipo">{tipo}</span>
            ))}
          </div>
          <p>Altura: {pokemon.altura} m</p>
          <p>Peso: {pokemon.peso} kg</p>
        </div>
      </div>
    </section>
  );
}
