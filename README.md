# 🦊 Fox Pokédex — Taller de Next.js

Taller práctico de Fox Coding. Vas a construir una Pokédex que usa datos reales de
la [PokeAPI](https://pokeapi.co) y la vas a publicar en internet.

## Antes de la clase (¡obligatorio!)

1. Instala **Node.js** (versión LTS): https://nodejs.org
2. Instala **VS Code**: https://code.visualstudio.com
3. Crea cuentas en **GitHub** y **Vercel** (entra a Vercel con tu cuenta de GitHub).
4. Abre una terminal y verifica que funcione:

   ```bash
   node -v   # debe mostrar v20 o más
   npm -v
   git --version
   ```

## Arrancar el proyecto

```bash
git clone <URL-DEL-REPO>
cd fox-pokedex
npm install
npm run dev
```

Abre http://localhost:3000 en tu navegador. Cada vez que guardes un archivo,
la página se actualiza sola.

## Cómo funciona Next.js en 3 reglas

1. **Carpeta + `page.js` = página.** `app/about/page.js` se convierte en `/about`.
2. **Componente = función que regresa HTML (JSX).** Las *props* son sus parámetros.
3. **Las páginas pueden pedir datos antes de mostrarse** con `await fetch(...)`.

---

## Etapas

Busca los comentarios `TODO` en el código. Cada etapa tiene su TODO.

### Etapa 1 — Rutas 🗺️
El menú tiene links a `/pokedex` y `/about`, pero dan error 404.

- [ ] Crea `app/about/page.js` con un título y un párrafo sobre ti o tu equipo.
- [ ] Crea `app/pokedex/page.js` con el título "Pokédex".

**Listo cuando:** puedes navegar a las dos páginas desde el menú.

### Etapa 2 — Componentes y props 🧩
- [ ] Completa `components/PokemonCard.js` (lee el TODO).
- [ ] En `app/pokedex/page.js`, importa `pokemonLocales` de `@/data/pokemon` y usa
      `.map()` para mostrar una `<PokemonCard />` por cada pokémon dentro de `<div className="grid">`.

**Listo cuando:** ves 6 tarjetas con imagen, número y nombre.

### Etapa 3 — Datos de una API 🌐
- [ ] Completa `obtenerPokemons()` en `lib/pokeapi.js`.
- [ ] Convierte la página de la Pokédex en `async` y cambia `pokemonLocales` por
      `await obtenerPokemons()`.

**Listo cuando:** ves los 151 pokémon originales.

### Etapa 4 — Ruta dinámica 🔀
- [ ] Completa `obtenerPokemon(nombre)` en `lib/pokeapi.js`.
- [ ] Crea `app/pokemon/[nombre]/page.js`. Los corchetes significan
      "esta parte de la URL cambia". Lee el nombre así:

      ```js
      export default async function Pagina({ params }) {
        const { nombre } = await params;
        // ...
      }
      ```
- [ ] Muestra imagen, nombre, tipos, altura y peso.
- [ ] En `PokemonCard`, envuelve la tarjeta en un `<Link>` hacia `/pokemon/<nombre>`.

**Listo cuando:** al darle clic a una tarjeta llegas a su página de detalle.

### Reto final 🏆 (elige uno)
- Si el pokémon no existe (`/pokemon/fox`), muestra una página 404 con `notFound()`
  de `next/navigation`.
- Muestra las estadísticas (`datos.stats`) con barras hechas con `<div>` y CSS.
- Agrega un link de "Siguiente" y "Anterior" en la página de detalle.
- Cambia el color de cada tipo (fuego = rojo, agua = azul...).
- Agrega a tu equipo en "Sobre nosotros" con su propio componente `MiembroCard`.

### Publícalo en internet 🚀
1. Sube tu código a tu propio repo de GitHub.
2. En https://vercel.com → **Add New → Project** → elige tu repo → **Deploy**.
3. Comparte tu link en el grupo de Fox Coding.

---

## ¿Te atrasaste? No pasa nada

Cada etapa tiene su solución en una rama. Para ponerte al día:

```bash
git stash            # guarda tus cambios por si acaso
git checkout etapa-2 # o etapa-1, etapa-3, etapa-4
npm run dev
```

| Rama      | Tiene resuelto            | Sigue con |
|-----------|---------------------------|-----------|
| `main`    | Nada (punto de partida)   | Etapa 1   |
| `etapa-1` | Rutas                     | Etapa 2   |
| `etapa-2` | + Componentes y props     | Etapa 3   |
| `etapa-3` | + Datos de la API         | Etapa 4   |
| `etapa-4` | + Ruta dinámica (completo)| Reto final|

## Errores comunes

| Error | Qué significa |
|-------|---------------|
| `404 This page could not be found` | Falta la carpeta o el archivo se llama distinto a `page.js`. |
| `Cannot read properties of undefined (reading 'map')` | Lo que quieres recorrer no es una lista. ¿Te faltó un `await`? |
| `X is not defined` | Te faltó importar algo al inicio del archivo. |
| `Objects are not valid as a React child` | Intentas mostrar un objeto entero; muestra una propiedad (`pokemon.nombre`). |
| La imagen no aparece | Revisa que pasaste la prop `imagen` y que el `src` sea correcto. |
