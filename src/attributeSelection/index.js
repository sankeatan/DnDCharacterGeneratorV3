import './index.css'
import NavBar from './NavBar.js'
import { useState } from 'react';
import Races from './Races.js'
import Classes from './Classes.js'
import AbilityScores from './AbilityScores.js'
import Backgrounds from './Backgrounds.js'
import Languages from './Languages.js'
import Proficiencies from './Proficiencies.js'
import Feats from './Feats.js'
import Inventory from './Inventory.js'


function AttributeSelection () {

    const [currentPage, setCurrentPage] = useState('Races')

    const renderPage = () => {
        switch (currentPage) {
            case 'Races':
                return (<Races/>)
            case 'Classes':
                return (<Classes/>)
            case 'Ability Scores':
                return (<AbilityScores/>)
            case 'Backgrounds':
                return (<Backgrounds/>)
            case 'Languages':
                return (<Languages/>)
            case 'Proficiencies':
                return (<Proficiencies/>)
            case 'Feats':
                return (<Feats/>)
            case 'Inventory':
                return (<Inventory/>)
            default:
                return (<Races/>)
        }
    };

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div className='stat-block wide'>
            <hr className='orange-border'/>
            <NavBar
                currentPage={currentPage}
                handlePageChange={handlePageChange}/>
            <hr className='orange-border bottom'/>
            <hr className='orange-border mb-3'/>
            {renderPage()}
            <hr className='orange-border bottom'/>
        </div>
    )
}

export default AttributeSelection