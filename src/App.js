import React, { useState, createContext } from 'react'
import { characterData } from './characterData';
import CharacterEditor from './characterEditor'
import './App.css';

export const CharacterContext = createContext();

export default function App() {
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
      <CharacterContext.Provider value={character.characterData}>
        <CharacterEditor/>
      </CharacterContext.Provider>
    </div>
  );
}
