import React from 'react';
import {Card} from './card.component';

import './card-list.style.css';

export const CardList = (props) => { 
    return (
    <div className='card-list'>
        {props.monsters.map(current => (
            <Card key={current.id} monster={current}/>
        ))}
    </div>
    );
}