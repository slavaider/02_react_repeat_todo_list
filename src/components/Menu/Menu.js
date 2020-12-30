import React from 'react';
import './Menu.css'
import {NavLink} from "react-router-dom";

const Menu = (props) => {
    const classes = ['Menu']
    if (props.menuVisibility) {
        classes.push('show')
    } else {
        classes.push('hide')
    }
    return (
        <div className={classes.join(' ')} onClick={props.handleMouseDown}>
            <h2><NavLink exact to='/'>Home</NavLink></h2>
            <h2><NavLink exact to='/one'>One</NavLink></h2>
            <h2><NavLink exact to='/two'>Two</NavLink></h2>
        </div>
    );

}

export default Menu;
