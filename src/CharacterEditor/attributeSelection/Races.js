import './index.css'
import { useState } from 'react';

function Races() {
    const raceArray = [{
        name: 'Dragonborn',
        maleIcon: '../images/DragonbornMaleIcon.png',
        femaleIcon: '../images/DragonbornFemaleIcon.png'
        },
        { 
        name: 'Dwarf',
        maleIcon: '',
        femaleIcon: '',
        },
        {
        name: 'Elf',
        maleIcon: '',
        femaleIcon: '', 
        },
        {
        name: 'Gnome', 
        maleIcon: '',
        femaleIcon: '',
        },
        {
        name: 'Half-elf',
        maleIcon: '',
        femaleIcon: '',
        },
        {
        name: 'Halfling',
        maleIcon: '',
        femaleIcon: '',
        },
        {
        name: 'Half-orc',
        maleIcon: '',
        femaleIcon: '',
        },
        {
        name: 'Human',
        maleIcon: '',
        femaleIcon: '',
        },
        {
        name: 'Tiefling',
        maleIcon: '',
        femaleIcon: '',
        }];
    return(
        <div className='classes-container'>
            {raceArray.map(({ name, maleIcon, femaleIcon })=>(
                <button className='character-heading'><h3>{ name }</h3></button>
            ))}
        </div>
    )
}

export default Races