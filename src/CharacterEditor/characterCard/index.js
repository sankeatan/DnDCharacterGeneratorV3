import './index.css';
import Features from './Features';
import Actions from './Actions';
import Inventory from './Inventory';
//import { characterData } from '../../characterData.js'
import { useState, useContext } from 'react';
import { CharacterContext } from '../../App';


function CharacterCard() {
    const character = useContext(CharacterContext)
    const [editedCharacter, updateEditedCharacter] = useState(character);

    return (
    <div className="stat-block wide section-left">
        <hr className="orange-border" />
        <div>
            <div className="character-heading">
                <h1>{editedCharacter.name}</h1>
                <h3>
                    {editedCharacter.race},  
                    {' '}{editedCharacter.class},
                    Lvl {editedCharacter.level}</h3>
            </div> 
            <svg height="5" width="100%" className="tapered-rule">
            <polyline points="0,0 400,2.5 0,5"></polyline>
            </svg>
            <div className="top-stats">
                <div className="property-line first">
                    <h4>Armor class</h4>
                    <p> {editedCharacter.armor.number} ({editedCharacter.armor.kind} armor)</p>
                </div>
                <div className="property-line">
                    <h4>Hit Points</h4>
                    <p> {editedCharacter.hp} ({editedCharacter.hitDie})</p>
                </div> 
                <div className="property-line">
                    <h4>Speed</h4>
                    <p> {editedCharacter.speed}</p>
                </div>
                <div className="property-line last">
                    <h4>Background </h4>
                    <p> {editedCharacter.background}</p>
                </div>
                <svg height="5" width="100%" className="tapered-rule">
                <polyline points="0,0 400,2.5 0,5"></polyline>
                </svg>
                <div className="abilities">
                    <div className="ability-strength">
                        <h4>STR</h4>
                        <p>{editedCharacter.str} (+1)</p>
                    </div>
                    <div className="ability-dexterity">
                        <h4>DEX</h4>
                        <p>{editedCharacter.dex} (+3)</p>
                    </div>
                    <div className="ability-constitution">
                        <h4>CON</h4>
                        <p>{editedCharacter.con} (+2)</p>
                    </div>
                    <div className="ability-intelligence">
                        <h4>INT</h4>
                        <p>{editedCharacter.int} (+0)</p>
                    </div>
                    <div className="ability-wisdom">
                        <h4>WIS</h4>
                        <p>{editedCharacter.wis} (+2)</p>
                    </div> 
                    <div className="ability-charisma">
                        <h4>CHA</h4>
                        <p>{editedCharacter.cha} (-1)</p>
                    </div>
                </div>
                <svg height="5" width="100%" className="tapered-rule">
            <polyline points="0,0 400,2.5 0,5"></polyline>
          </svg>
                <div className="property-line first">
                    <h4>Proficency </h4>
                    <p>{editedCharacter.proficiencyBonus}</p>
                </div> 
                <div className="property-line">
                    <h4>Saving Throws </h4>
                    <p> Str +3, Dex +5</p>
                </div>
                <div className="property-line">
                    <h4>Skills </h4>
                    <p>Acrobatics +5, Insight +4, Religion +2, Stealth +5</p>
                </div>
                <div className="property-line">
                    <h4>Languages </h4>
                    <p>Common, Gnomish, Orc, Celestial</p>
                </div>
            </div>
            <svg height="5" width="100%" className="tapered-rule">
            <polyline points="0,0 400,2.5 0,5"></polyline>
          </svg>
          <div>
            <Features/>
            </div>
            <div> 
            <Actions/>
            </div>
            <div>
            <Inventory/>
            </div>
        <hr className="orange-border bottom" />
    </div> 
    </div>
    );
  }
  
export default CharacterCard;