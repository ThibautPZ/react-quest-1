const pokemonList = [
  {
    name: "bulbasaur",

    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
    name: "mew",
  },
];

function PokemonCard() {
  let pokemon = pokemonList[0];
  return (
    <figure>
      {pokemon.imgSrc != undefined ? (
        <img src={pokemon.imgSrc} alt={pokemon.name}></img>
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;

// Solution alternative, mais la boucle for ne fait qu'un seul tour (comme si i ne prenait que la valeur = 0)
// Est-ce à cause de return qui fait sortir de la boucle ?
//
//
// function PokemonCard() {
//   {
//     for (let i = 0; i < pokemonList.length; i++) {
//       if (pokemonList[i].imgSrc != undefined) {
//         return (
//           <figure>
//             <img src={pokemonList[i].imgSrc} alt={pokemonList[i].name}></img>

//             <figcaption>{pokemonList[i].name}</figcaption>
//           </figure>
//         );
//       } else {
//         return (
//           <figure>
//             <p> {"???"}</p>

//             <figcaption>{pokemonList[i].name}</figcaption>
//           </figure>
//         );
//       }
//     }
//   }
// }
