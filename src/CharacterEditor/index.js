import React from 'react'
import CharacterCard from './characterCard'
import AttributeSelection from './attributeSelection'

class CharacterEditor extends React.Component {
    render() {
        return (
        <>
        <div className='character-creation-container'>
            <CharacterCard/>
            <AttributeSelection/>
        </div>
        </>
        )
    }
}

export default CharacterEditor;
