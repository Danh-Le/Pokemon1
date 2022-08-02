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
    console.log(response);
  };

  const handleRandomClick = () => {
    setPokemon(pokemon);
  };

  return (
    <div className="">
      {/* <h1>{name}</h1> */}
      <p></p>
      <p></p>
      <p></p>
      <button onClick={handleRandomClick}>Random</button>
    </div>
  );
};

export default App;
