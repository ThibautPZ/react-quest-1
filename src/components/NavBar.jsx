import React, { useEffect } from "react";

const NavBar = ({ pkmnIndex, setPkmnIndex, pokemonList }) => {
  const nextPoke = () => {
    setPkmnIndex(() => pkmnIndex + 1);
  };
  const previousPoke = () => {
    setPkmnIndex(() => pkmnIndex - 1);
  };
  useEffect(() => {
    pkmnIndex === 3 && alert("pika pikachu !!!");
  });
  return (
    <div>
      {pkmnIndex > 0 ? (
        <button onClick={previousPoke}>Previous pokemon</button>
      ) : (
        <button disabled={true}>No previous pokemon</button>
      )}

      {pkmnIndex < pokemonList.length - 1 ? (
        <button onClick={nextPoke}>Next Pokemon</button>
      ) : (
        <button disabled={true}>No pokemon next</button>
      )}
    </div>
  );
};

export default NavBar;
