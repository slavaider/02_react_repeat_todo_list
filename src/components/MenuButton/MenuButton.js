import React from 'react';
import './MenuButton.css'

const MenuButton = (props) => {
    return (
        <button
            onMouseDown={props.handleMouseDown}
            className='MenuButton'>
        </button>
    );
}


export default MenuButton;
