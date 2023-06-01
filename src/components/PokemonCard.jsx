const PokemonCard = (props) => {
  const name = props.name;
  const imgSrc = props.imgSrc;

  return (
    <figure>
      {imgSrc != undefined ? <img src={imgSrc} alt={name}></img> : <p>???</p>}
      <figcaption>{name}</figcaption>
    </figure>
  );
};

export default PokemonCard;
