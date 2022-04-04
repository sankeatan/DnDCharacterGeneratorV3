import './index.css';
import Action from './Action.js'
import { useState } from 'react';

function Actions() {
    const [isActive, setIsActive] = useState(false);
    return (
    <div className='actions' onClick ={() => setIsActive(!isActive)}>
        <h3>Actions</h3>
            <div className="property-block">
                {isActive && <Action/>}
            </div>
    </div>
    )
}

export default Actions