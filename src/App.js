import { useState } from 'react'
import { characterData } from './characterData';
import CharacterEditor from './characterEditor'
import './App.css';

function App() {
  const [character, setCharacter] = useState({ characterData })

  const updateCharacter = ( value ) => {
    let updatedValue = {};
    updatedValue = {value}
    setCharacter(character => ({
      ...character,
      updatedValue
    }));
  }

  return (
    <div>
    <CharacterEditor character={character} updateCharacter={updateCharacter}/>
    </div>
  );
}

export default App;
