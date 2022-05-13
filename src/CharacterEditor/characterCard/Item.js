import './index.css';

function Item({title,  dmg, dmgType, properties, weight}) {

return(
<>
<br/>
<h2>{title} </h2>
    <br/>
    <p>Damage: {dmg}</p>
    <br/>
    <p>Damage Type: {dmgType}</p>
    <br/>
    <p>Properties: {properties}</p>
    <br/>
    <p>Weight: {weight}</p>
</>
    )
}

export default Item