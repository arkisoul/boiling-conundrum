import React from 'react';

function BoilingVerdict(props) {
    if(props.celcius >= 100) {
        return <p className="BoilingVerdict">The water would boil.</p>
    } else {
        return <p className="BoilingVerdict">The water would not boil</p>
    }
}

export default BoilingVerdict;
