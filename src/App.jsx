import "./App.css";

import { useState } from "react";
import { useEffect } from "react";
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
    imgSrc: "https://i.imgur.com/FsDyBfU.jpg",
  },
  {
    name: "mew",
    imgSrc:
      "https://static.wikia.nocookie.net/gaming-urban-legends/images/d/d8/MewUnderTruck.jpg",
  },
];

// Pour je-ne-sais quelle raison mon useEffect s'effectuait 2 fois d'affilée, du coup il y avait 2 alertes à chaque chargement de page.
// Du coup j'ai défini une variable alertNotDone qui est vérifiée par useEffect, si true l'alerte se déclenche et la valeur de alertNotDone devient false.

const App = () => {
  let alertNotDone = true;
  useEffect(() => {
    alertNotDone &&
      (alert("Hello, pokemon trainer :)"), (alertNotDone = false));
  }, []);
  const [pkmnIndex, setPkmnIndex] = useState(0);
  return (
    <>
      <div>
        <PokemonCard
          name={
            pokemonList[pkmnIndex].name.charAt(0).toUpperCase() +
            pokemonList[pkmnIndex].name.slice(1)
          }
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
};

export default App;
