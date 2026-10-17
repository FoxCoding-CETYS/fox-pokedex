// Aquí viven las funciones que hablan con la PokeAPI (otro servidor en internet).
// Documentación: https://pokeapi.co/docs/v2

const BASE_URL = "https://pokeapi.co/api/v2";

const imagenOficial = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

// Regresa una lista: [{ id: 1, nombre: "bulbasaur", imagen: "https://..." }, ...]
export async function obtenerPokemons(limite = 151) {
  // 1. Pedirle los datos a otro servidor (la PokeAPI)
  const res = await fetch(`${BASE_URL}/pokemon?limit=${limite}`);

  // 2. Convertir la respuesta a un objeto de JavaScript
  const datos = await res.json();

  // 3. Transformar cada elemento al formato que usa nuestra app
  return datos.results.map((p) => {
    // "https://pokeapi.co/api/v2/pokemon/25/" → 25
    const id = Number(p.url.split("/").filter(Boolean).pop());
    return { id, nombre: p.name, imagen: imagenOficial(id) };
  });
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
