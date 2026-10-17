import PokemonCard from "@/components/PokemonCard";
import { obtenerPokemons } from "@/lib/pokeapi";

// La página es "async": espera los datos de la API ANTES de mandarse al navegador.
// Este código corre en el servidor, no en la computadora de quien visita el sitio.
export default async function Pokedex() {
  const pokemons = await obtenerPokemons();

  return (
    <section>
      <h1>Pokédex</h1>
      <p className="pista">{pokemons.length} pokémon cargados desde la PokeAPI</p>
      <div className="grid">
        {pokemons.map((p) => (
          <PokemonCard key={p.id} id={p.id} nombre={p.nombre} imagen={p.imagen} />
        ))}
      </div>
    </section>
  );
}
