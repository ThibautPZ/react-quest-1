const NavBar = ({ pokemonList, setPkmnName, setPkmnImg }) => {
  return (
    <div>
      {pokemonList.map((pkmn) => (
        <button
          key={pkmn.id}
          onClick={() => {
            setPkmnImg(pkmn.imgSrc);
            setPkmnName(pkmn.name);
          }}
        >
          {pkmn.name}
        </button>
      ))}
    </div>
  );
};

export default NavBar;

// SOLUTION ALTERNATIVE :
//
// const NavBar = ({ setPkmnIndex, pokemonList }) => {
//   return (
//     <div>
//       {pokemonList.map((pkmn) => (
//         <button key={pkmn.id} onClick={() => setPkmnIndex(pkmn.id - 1)}>
//           {pkmn.name}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default NavBar;
