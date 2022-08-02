import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {}, [pokemon]);

  const fetchData = async () => {
    const request = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    const response = await request.json();
    setPokemon(response);
  };

  const handleRandomClick = () => {
    setPokemon(pokemon);
  };
  if (pokemon === null) {
    <div></div>;
  } else
    return (
      <div className="">
        <img src={pokemon.sprites.front_default} />
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
        <button onClick={handleRandomClick}>Random</button>
      </div>
    );
};

export default App;
