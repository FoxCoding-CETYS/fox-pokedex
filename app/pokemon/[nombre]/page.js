import { obtenerPokemon } from "@/lib/pokeapi";

export default async function PokemonPage({ params }) {
  const resolvedParams = await params;
  const nombre = resolvedParams.nombre;
  let pokemon = await obtenerPokemon(nombre);
  return (
    <div>
      <h1>Hola, {pokemon.nombre}</h1>
    </div>
  );
}
