import { PropTypes } from "prop-types";

const PokemonCard = ({ pkmnName, pkmnImg }) => {
  return (
    <figure>
      {pkmnImg ? (
        <img src={pkmnImg} alt={pkmnName}></img>
      ) : (
        <img
          src="https://pixabay.com/get/ge3d8daafa09504e87748da50807705d8a497e5445dd904ba9bf248d8ceadb4f79cb279b3d4239f9e9d32622bd16003fe1500d0aa9e0efbf26a7891e2cf664dadbe3561ba3e18d931bd0da3becf0db711_640.png"
          alt={pkmnName}
        ></img>
      )}
      <figcaption>{pkmnName}</figcaption>
      {}
    </figure>
  );
};

PokemonCard.propTypes = {
  pokemonList: PropTypes.shape({
    pkmnName: PropTypes.string.isRequired,
    pkmnImg: PropTypes.any,
  }),
};

export default PokemonCard;

// SOLUTION ALTERNATIVE :
//
// import { PropTypes } from "prop-types";
// const PokemonCard = ({ name, imgSrc }) => {
//   return (
//     <figure>
//       <img src={imgSrc} alt={name}></img>
//       <figcaption>{name}</figcaption>
//     </figure>
//   );
// };

// PokemonCard.propTypes = {
//   pokemonList: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     imgSrc: PropTypes.any,
//   }),
// };

// export default PokemonCard;
