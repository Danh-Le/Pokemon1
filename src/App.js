import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [pokemon, setPokemon] = useState(null);
  const [randomPokemon, setRandomPokemon] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [randomPokemon]);

  const fetchData = async () => {
    const request = await fetch(
      ` https://pokeapi.co/api/v2/pokemon/${randomPokemon}`
    );
    const response = await request.json();
    setPokemon(response);
  };

  const handleRandomClick = () => {
    const random = Math.floor(Math.random() * 151) + 1;
    setRandomPokemon(random);
  };
  if (pokemon === null) {
    <div></div>;
  } else
    return (
      <div className="">
        <img src={pokemon.sprites.front_default} alt="pokemonPic" />
        <h1>{pokemon.name}</h1>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        {pokemon.types.map((type) => {
          return (
            <>
              <p>Types: {type.type.name}</p>
            </>
          );
        })}
        <button onClick={handleRandomClick}>Random pokemon</button>
      </div>
    );
};

export default App;
