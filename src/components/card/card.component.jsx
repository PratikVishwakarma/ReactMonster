import React from 'react';

import './card.styles.css'

export const Card = (props) => (
    <div className="card-container">
        <img alt={props.monster.name} src={`https://robohash.org/${props.monster.id}?set=set2`}></img>
        <h2>{props.monster.name}</h2>
        <h3>{props.monster.email}</h3>
    </div>
)
