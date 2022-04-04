import './index.css';
import Feature from './Feature.js'
import { useState } from 'react';

function Features() {
    const [isActive, setIsActive] = useState(false);
    return (
    <div className="actions" onClick ={() => setIsActive(!isActive)}>
        <h3>Features</h3>
            <div className="property-block">
                {isActive && <Feature/>}
            </div>
    </div>
    )
}

export default Features