import "./App.css";
import { PropTypes } from "prop-types";
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  let [pokemonIndex, setI] = useState(0);
  const nextPoke = () => {
    setI(pokemonIndex++);
  };
  const previousPoke = () => {
    setI(pokemonIndex--);
  };
  return (
    <>
      <div>
        <PokemonCard
          name={pokemonList[pokemonIndex].name}
          imgSrc={pokemonList[pokemonIndex].imgSrc}
        />
        {pokemonIndex > 0 ? (
          <button onClick={previousPoke}>
            Previous pokemon : {pokemonList[pokemonIndex - 1].name}
          </button>
        ) : (
          <button disabled={true}>Previous pokemon</button>
        )}
        {pokemonIndex < pokemonList.length - 1 ? (
          <button onClick={nextPoke}>
            Next pokemon : {pokemonList[pokemonIndex + 1].name}
          </button>
        ) : (
          <button disabled={true}>Next pokemon</button>
        )}
      </div>
    </>
  );
}

export default App;
