import React, { useState } from "react";

const NavBar = (props) => {
  //   const name = props.name;
  //   const imgSrc = props.imgSrc;
  const pkmnIndex = props.pkmnIndex;
  const setPkmnIndex = props.setPkmnIndex;
  const pokemonList = props.pokemonList;
  console.log(pkmnIndex);
  console.log(pokemonList);
  const nextPoke = () => {
    setPkmnIndex(() => pkmnIndex + 1);
  };
  const previousPoke = () => {
    setPkmnIndex(() => pkmnIndex - 1);
  };
  return (
    <div>
      {pkmnIndex > 0 ? (
        <button onClick={previousPoke}>Previous pokemon</button>
      ) : (
        <button disabled={true}>No previous pokemon</button>
      )}

      {pkmnIndex < pokemonList.length - 1 ? (
        <button onClick={nextPoke}>Next pokemon</button>
      ) : (
        <button disabled={true}>No pokemon next</button>
      )}
    </div>
  );
};

export default NavBar;
