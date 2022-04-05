import './index.css';
import Features from './Features';
import Actions from './Actions';
import Equipment from './Equipment';

function CharacterCard() {

    return (
    <div className="stat-block section-left">
        <hr className="orange-border" />
        <div>
            <div className="character-heading">
                <h1>Sankeatan</h1>
                <h3>Human, Monk, Lvl 1</h3>
            </div> 
            <svg height="5" width="100%" className="tapered-rule">
            <polyline points="0,0 400,2.5 0,5"></polyline>
            </svg>
            <div className="top-stats">
                <div className="property-line first">
                    <h4>Armor class</h4>
                    <p> 15 (natural armor)</p>
                </div>
                <div className="property-line">
                    <h4>Hit Points</h4>
                    <p> 10 (1d8)</p>
                </div> 
                <div className="property-line">
                    <h4>Speed</h4>
                    <p> 30ft.</p>
                </div>
                <div className="property-line last">
                    <h4>Background </h4>
                    <p> Acolyte</p>
                </div>
                <svg height="5" width="100%" className="tapered-rule">
                <polyline points="0,0 400,2.5 0,5"></polyline>
                </svg>
                <div className="abilities">
                    <div className="ability-strength">
                        <h4>STR</h4>
                        <p>13 (+1)</p>
                    </div>
                    <div className="ability-dexterity">
                        <h4>DEX</h4>
                        <p>16 (+3)</p>
                    </div>
                    <div className="ability-constitution">
                        <h4>CON</h4>
                        <p>14 (+2)</p>
                    </div>
                    <div className="ability-intelligence">
                        <h4>INT</h4>
                        <p>11 (+0)</p>
                    </div>
                    <div className="ability-wisdom">
                        <h4>WIS</h4>
                        <p>15 (+2)</p>
                    </div> 
                    <div className="ability-charisma">
                        <h4>CHA</h4>
                        <p>9 (-1)</p>
                    </div>
                </div>
                <svg height="5" width="100%" className="tapered-rule">
            <polyline points="0,0 400,2.5 0,5"></polyline>
          </svg>
                <div className="property-line first">
                    <h4>Proficency </h4>
                    <p>+2</p>
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
            <div className="actions">
                <h3>Equipment</h3>
                <div className="property-block">
                    <h4>Multiattack.</h4>
                    <p>The armor makes two melee attacks.</p>
                </div>
                <div className="property-block">
                    <h4>Slam.</h4>
                    <p><i>Melee Weapon Attack:</i> +4 to hit, reach 5 ft., one target.
                    <i>Hit:</i> 5 (1d6 + 2) bludgeoning damage.</p>
                </div>
            </div> 
        <hr className="orange-border bottom" />
    </div> 
    </div>
    );
  }
  
export default CharacterCard;