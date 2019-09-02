import React from 'react'
import StyledNightMode from './NIghtmode.style';

const NightMode = () => {
    return (
        <StyledNightMode>
             <span>Nightmode: </span>
            <label className="switch"><input type="checkbox" onChange="jdfj|"/>
            <span className="slider round" />
            </label>
        </StyledNightMode>
    )
}

export default NightMode
