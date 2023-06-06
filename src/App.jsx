import "./App.css";
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

const pokemonList = [
  {
    id: 1,
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    id: 2,
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    id: 3,
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    id: 4,
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  { id: 5, name: "mew" },
];

function App() {
  const [pkmnName, setPkmnName] = useState("Choose a pokemon");
  const [pkmnImg, setPkmnImg] = useState(
    "https://pixabay.com/get/ge3d8daafa09504e87748da50807705d8a497e5445dd904ba9bf248d8ceadb4f79cb279b3d4239f9e9d32622bd16003fe1500d0aa9e0efbf26a7891e2cf664dadbe3561ba3e18d931bd0da3becf0db711_640.png"
  );
  return (
    <>
      <div>
        <PokemonCard
          pkmnName={pkmnName}
          pkmnImg={pkmnImg}
          pokemonList={pokemonList}
        />
        <NavBar
          pkmnName={pkmnName}
          pkmnImg={pkmnImg}
          pokemonList={pokemonList}
          id={pokemonList.id}
          setPkmnName={setPkmnName}
          setPkmnImg={setPkmnImg}
        />
      </div>
    </>
  );
}

export default App;

//SOLUTION ALTERNATIVE
//
// function App() {
//   const [pkmnIndex, setPkmnIndex] = useState(0);
//   return (
//     <>
//       <div>
//         <PokemonCard
//           name={pokemonList[pkmnIndex].name}
//           imgSrc={pokemonList[pkmnIndex].imgSrc}
//           pkmnIndex={pkmnIndex}
//           pokemonList={pokemonList}
//         />
//         <NavBar
//           pkmnIndex={pkmnIndex}
//           setPkmnIndex={setPkmnIndex}
//           pokemonList={pokemonList}
//           id={pokemonList.id}
//         />
//       </div>
//     </>
//   );
// }

// export default App;
