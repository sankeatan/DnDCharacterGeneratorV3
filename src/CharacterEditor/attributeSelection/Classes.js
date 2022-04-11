import './index.css'
import { useState } from 'react';

function Classes() {
    const classArray = [
    'Barbarian', 
    'Bard', 
    'Cleric', 
    'Druid', 
    'Fighter', 
    'Monk', 
    'Paladin', 
    'Ranger', 
    'Rogue', 
    'Sorcerer', 
    'Warlock', 
    'Wizard'
    ]
    return(
        <div className='classes-container'>
            {classArray.map((cls)=>(
                <button className='character-heading'>
                <h3>{cls}</h3>
                </button>
            ))}
        </div>
    )
}

export default Classes