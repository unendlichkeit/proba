import React from 'react';

import './card.style.css';

export const Card = (props) => { 

    return <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set3&size=140x140`}/>
        {props.monster.name}
        <p>{props.monster.email}</p>
    </div>
};
