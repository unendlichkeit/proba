import React from 'react';
import './card-list/searchBox.style.css';

export function SearchBox (props) {
    return (
        <input className="searchBox" type="search" placeholder={props.placeholder} onChange={props.handleChange}/>
    );
};