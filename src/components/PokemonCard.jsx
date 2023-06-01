import { PropTypes } from "prop-types";

const PokemonCard = ({ pokemon }) => {
  const { name, imgSrc } = pokemon;
  return (
    <figure>
      <img src={imgSrc} alt={name}></img>
      <figcaption>{name}</figcaption>
    </figure>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;
