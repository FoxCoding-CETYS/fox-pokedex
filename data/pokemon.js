// Datos "de mentira" para la Etapa 2. En la Etapa 3 los cambiaremos por datos reales de una API.
const imagen = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

export const pokemonLocales = [
  { id: 1, nombre: "bulbasaur", imagen: imagen(1) },
  { id: 4, nombre: "charmander", imagen: imagen(4) },
  { id: 7, nombre: "squirtle", imagen: imagen(7) },
  { id: 25, nombre: "pikachu", imagen: imagen(25) },
  { id: 39, nombre: "jigglypuff", imagen: imagen(39) },
  { id: 133, nombre: "eevee", imagen: imagen(133) },
];
