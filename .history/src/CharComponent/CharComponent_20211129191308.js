import React from 'react';

const CharComponent = props => {
    let style = {
        display: 'inline-block',
        
    }

    return(
        <div style={style}>
            {props.textChar} <br/>     
        </div>
    );
}

export default CharComponent;