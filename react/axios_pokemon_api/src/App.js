import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=808")
    .then(response => setPokemon(response.data.results))
  }, []);
  return (
    <div className="App" style={{display: 'flex', justifyContent: 'center' }} >
      <ol> 
        {pokemon.map((pokemon, index) => { 
          return <li key={index}>{capitalize(pokemon.name)}</li>
        })}
      </ol>
    </div>
  );
}

export default App;
