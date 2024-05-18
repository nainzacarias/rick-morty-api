
import imagen1 from '../src/Assets/rick-morty.png';
import { useState } from 'react'
import Characters from './Components/Characters';
import './App.css';

function App() {
  const [characters, setCharacters] = useState(null);
  const reqAPI = async () =>{
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterAPI = await api.json();
    setCharacters(characterAPI.results);
    console.log(characters);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick and Morty</h1>
        {
          characters ? (
            <Characters characters={characters}></Characters>
          ):(
          <div>
            <img src={imagen1} className="img-home" alt="logo"></img>
            <button onClick={reqAPI} className="btn-search"> 
              Buscar personajes
            </button>
          </div>
          )
        }
      </header>
    </div>
  );
}

export default App;
