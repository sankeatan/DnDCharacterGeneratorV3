import './index.css'
import { useState } from 'react';

function NavBar({ currentPage, handlePageChange }) {
    const [navSelection, setNavSelection] = useState('Races');
    return(
        <div className='nav-bar'>
            <button onClick={() => handlePageChange('Races')}>
                <h4>Races</h4></button>
            <button onClick={() => handlePageChange('Classes')}>
                <h4>Classes</h4></button>
            <button onClick={() => handlePageChange('Ability Scores')}>
                <h4>Ability Scores</h4></button>
            <button onClick={() => handlePageChange('Backgrounds')}>
                <h4>Backgrounds</h4></button>
            <button onClick={() => handlePageChange('Languages')}>
                <h4>Languages</h4></button>
            <button onClick={() => handlePageChange('Proficiencies')}>
                <h4>Proficiencies</h4></button>
            <button onClick={() => handlePageChange('Feats')}>
                <h4>Feats</h4></button>
            <button onClick={() => handlePageChange('Inventory')}>
                <h4>Inventory</h4></button>
        </div>
    )
}

export default NavBar