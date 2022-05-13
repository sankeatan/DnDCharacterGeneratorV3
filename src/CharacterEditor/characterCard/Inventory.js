import './index.css';
import Item from './Item.js';
import { itemData } from './itemData'
import { useState } from 'react';

function Inventory() {
    const [isActive, setIsActive] = useState(false);

    return (
    <div className='actions' onClick ={() => setIsActive(!isActive)}>
        <h3>Inventory</h3>
        <div className="property-block">
                {isActive && itemData.map(({ title, dmg, dmgType, properties, weight }) => (
                <><Item 
                        title={title} 
                        dmg={dmg} 
                        dmgType={dmgType} 
                        properties={properties} 
                        weight={weight}/><br/></>
                ))}
            </div>
    </div>
    )
}

export default Inventory