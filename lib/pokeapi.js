// Aquí viven las funciones que hablan con la PokeAPI (otro servidor en internet).
// Documentación: https://pokeapi.co/docs/v2

const BASE_URL = "https://pokeapi.co/api/v2";

const imagenOficial = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

// ─────────────────────────────────────────────────────────────
// TODO (Etapa 3): Datos de una API
//
// Completa esta función para que regrese una lista como esta:
//   [{ id: 1, nombre: "bulbasaur", imagen: "https://..." }, ...]
//
// Pasos:
//   1. Pide los datos:      const res = await fetch(`${BASE_URL}/pokemon?limit=${limite}`);
//   2. Conviértelos a JSON: const datos = await res.json();
//   3. La lista está en datos.results. Cada elemento se ve así:
//        { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" }
//   4. Transforma cada elemento con .map() al formato de arriba.
//      Pista para sacar el id de la url:
//        const id = Number(p.url.split("/").filter(Boolean).pop());
//
// Abre esto en tu navegador para ver cómo se ven los datos:
//   https://pokeapi.co/api/v2/pokemon?limit=5
// ─────────────────────────────────────────────────────────────
export async function obtenerPokemons(limite = 151) {
  return [];
}

// ─────────────────────────────────────────────────────────────
// TODO (Etapa 4): Ruta dinámica
//
// Completa esta función para que regrese UN pokémon con este formato:
//   {
//     id: 25,
//     nombre: "pikachu",
//     imagen: "https://...",
//     tipos: ["electric"],
//     altura: 0.4,   // en metros  (la API la da en decímetros: divide entre 10)
//     peso: 6,       // en kg      (la API lo da en hectogramos: divide entre 10)
//   }
//
// Pasos:
//   1. fetch(`${BASE_URL}/pokemon/${nombre}`)
//   2. Si el pokémon no existe, res.ok es false → regresa null
//   3. Convierte a JSON y arma el objeto.
//      Los tipos vienen así: datos.types = [{ type: { name: "electric" } }, ...]
//
// Míralo en tu navegador: https://pokeapi.co/api/v2/pokemon/pikachu
// ─────────────────────────────────────────────────────────────
export async function obtenerPokemon(nombre) {
  return null;
}
