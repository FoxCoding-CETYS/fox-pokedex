import PokemonCard from "@/components/PokemonCard";
import { obtenerPokemons } from "@/lib/pokeapi";
import Link from "next/link";

export default async function PokedexPage() {
  let lista = await obtenerPokemons();
  return (
    <>
      <div>
        <h1>Pagina para la pokedex</h1>
        <div className="grid">
          {lista.map((pokemon) => (
            <Link href={`/pokemon/${pokemon.nombre}`} key={pokemon.id}>
              <PokemonCard
                key={pokemon.id}
                id={pokemon.id}
                imagen={pokemon.imagen}
                nombre={pokemon.nombre}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
