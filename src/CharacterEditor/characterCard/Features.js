import './index.css';
import { featuresData } from './featuresData.js';
import Feature from './Feature.js'
import { useState } from 'react';

function Features() {
    const [isActive, setIsActive] = useState(false);
    return (
    <div className="actions" onClick ={() => setIsActive(!isActive)}>
        <h3>Features</h3>
            <div className="property-block">
                {isActive && featuresData.map(({ title, content }) => (
                <><Feature title={title} content={content}/><br/></>
                ))}
            </div>
    </div>
    )
}

export default Features