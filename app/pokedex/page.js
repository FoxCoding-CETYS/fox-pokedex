import { obtenerPokemons } from "@/lib/pokeapi";
import PokemonCard from "@/components/PokemonCard";

export default async function PokedexPage() {
  let pokemones = await obtenerPokemons();
  return (
    <div>
      <h1>Pagina de Pokedex</h1>
      {pokemones.map((pokemon) => (
        <PokemonCard id={pokemon.id} />
      ))}
    </div>
  );
}
