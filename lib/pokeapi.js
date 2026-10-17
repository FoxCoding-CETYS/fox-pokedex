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

// Regresa UN pokémon con más detalle, o null si no existe
export async function obtenerPokemon(nombre) {
  const res = await fetch(`${BASE_URL}/pokemon/${nombre}`);

  // Si la API responde 404, el pokémon no existe
  if (!res.ok) return null;

  const datos = await res.json();
  return {
    id: datos.id,
    nombre: datos.name,
    imagen: imagenOficial(datos.id),
    tipos: datos.types.map((t) => t.type.name),
    altura: datos.height / 10, // decímetros → metros
    peso: datos.weight / 10, // hectogramos → kg
  };
}
