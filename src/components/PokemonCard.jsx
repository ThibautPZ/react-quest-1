import { PropTypes } from "prop-types";
import { useState } from "react";

const PokemonCard = (pokemonList) => {
  const { name, imgSrc } = pokemonList;

  return (
    <figure>
      <img src={imgSrc} alt={name}></img>
      <figcaption>{name}</figcaption>
    </figure>
  );
};

PokemonCard.propTypes = {
  pokemonList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.any.isRequired,
  }),
};

export default PokemonCard;
