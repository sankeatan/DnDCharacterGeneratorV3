import './index.css';
import Action from './Action.js'
import { actionData } from './actionData.js';
import { useState } from 'react';

function Actions() {
    const [isActive, setIsActive] = useState(false);
    return (
    <div className='actions' onClick ={() => setIsActive(!isActive)}>
        <h3>Actions</h3>
        <div className="property-block">
            {isActive && actionData.map(({ title, content }) => (
            <><Action title={title} content={content}/></>
                ))}
            </div>
    </div>
    )
}

export default Actions