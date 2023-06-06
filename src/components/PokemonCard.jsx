import { PropTypes } from "prop-types";
import { useState } from "react";

const PokemonCard = (props) => {
  const name = props.name;
  const imgSrc = props.imgSrc;
  const pkmnIndex = props.pkmnIndex;
  const setPkmnIndex = props.setPkmnIndex;

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
