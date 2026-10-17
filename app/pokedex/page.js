import PokemonCard from "@/components/PokemonCard";
import { pokemonLocales } from "@/data/pokemon";

// TODO (Etapa 3): cambia pokemonLocales por datos reales de la API.
// Pistas: convierte esta función en `async` y usa `await obtenerPokemons()`
// de "@/lib/pokeapi".

export default function Pokedex() {
  return (
    <section>
      <h1>Pokédex</h1>
      <div className="grid">
        {pokemonLocales.map((p) => (
          // "key" ayuda a React a identificar cada elemento de la lista
          <PokemonCard key={p.id} id={p.id} nombre={p.nombre} imagen={p.imagen} />
        ))}
      </div>
    </section>
  );
}
