import './index.css'
import { useState } from 'react';

function AbilityScores() {

    const absArray = [
        'Strength',
        'Dexterity',
        'Constitution',
        'Intelligence',
        'Wisdom',
        'Charisma'
    ];

    var statArray = [
        9, 11, 13, 14, 15, 16
    ]
    
    return(
        <div className='classes-container character-heading'>
            <h3>Stat Array</h3>
            <div className='stat-array'>
            {statArray.map((abs)=>(
                <h4>{abs}</h4>
            ))}
            </div>
            <svg height="5" width="100%" className="tapered-rule">
            <polyline points="0,0 600,2.5 0,5"></polyline>
            </svg>
            {absArray.map((abs)=>(
                <div>
                <h3>{abs}</h3>
                <input></input>
                </div>
            ))}
        </div>
    )
    
}

export default AbilityScores