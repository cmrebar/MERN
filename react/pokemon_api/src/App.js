import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=808")
    .then(response => response.json())
    .then(response => setPokemon(response.results))
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
