import './index.css'
import { useState } from 'react';

function NavBar() {
    const [navSelection, setNavSelection] = useState('Race');
    return(
        <div className='nav-bar'>
            <h4>Race</h4>
            <h4>Class</h4>
            <h4>Ability Scores</h4>
            <h4>Background</h4>
            <h4>Languages</h4>
            <h4>Proficiencies</h4>
            <h4>Feats</h4>
            <h4>Inventory</h4>
        </div>
    )
}

export default NavBar