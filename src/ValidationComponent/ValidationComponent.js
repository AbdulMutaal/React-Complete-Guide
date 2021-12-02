import React from 'react';

const Validation = props => {
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

export default Validation;