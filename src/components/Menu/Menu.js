import React from 'react';
import './Menu.css'
const Menu = (props) => {
    const classes = ['Menu']
    if (props.menuVisibility) {
        classes.push('show')
    } else {
        classes.push('hide')
    }
    return (
        <div className={classes.join(' ')} onMouseDown={props.handleMouseDown}>
            <h2><a href="#">Home</a></h2>
            <h2><a href="#">About</a></h2>
            <h2><a href="#">Contact</a></h2>
            <h2><a href="#">Search</a></h2>
        </div>
    );

}

export default Menu;
