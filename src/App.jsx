import "./App.css";
import { PropTypes } from "prop-types";
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

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
  const [pkmnIndex, setPkmnIndex] = useState(0);
  return (
    <>
      <div>
        <PokemonCard
          name={pokemonList[pkmnIndex].name}
          imgSrc={pokemonList[pkmnIndex].imgSrc}
          pkmnIndex={pkmnIndex}
        />
        <NavBar
          pkmnIndex={pkmnIndex}
          setPkmnIndex={setPkmnIndex}
          pokemonList={pokemonList}
        />
      </div>
    </>
  );
}

export default App;
