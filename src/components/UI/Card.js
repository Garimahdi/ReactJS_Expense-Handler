// This component acts as wrapper to avoid repeating same CSS command

import React from 'react';
import './Card.css';

function Card(props){
    const classes = 'card '+ props.className;
    return(
        <div className = {classes}>{props.children}</div> // 'children' is a reserved word to wrap components
    );
}

export default Card;