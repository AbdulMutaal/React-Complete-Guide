import React from 'react';

const CharComponent = props => {
    let textMsg = 'Text Too Short';

    if (props.textLength > 5) {
        textMsg = 'Text long enough';
    }

    return(
        <div>
            {textMsg}        
        </div>
    );
}

export default CharComponent;