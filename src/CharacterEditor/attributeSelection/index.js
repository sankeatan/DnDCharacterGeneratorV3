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
                return (<Races key='races'/>)
            case 'Classes':
                return (<Classes key='classes'/>)
            case 'Ability Scores':
                return (<AbilityScores key='abilityScores'/>)
            case 'Backgrounds':
                return (<Backgrounds key='backgrounds'/>)
            case 'Languages':
                return (<Languages key='languages'/>)
            case 'Proficiencies':
                return (<Proficiencies key='proficiencies'/>)
            case 'Feats':
                return (<Feats key='feats'/>)
            case 'Inventory':
                return (<Inventory key='inventory'/>)
            default:
                return (<Races key='races'/>)
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