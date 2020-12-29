import React, {Component} from 'react';
import MenuButton from "./MenuButton/MenuButton";
import Menu from "./Menu/Menu";

class MenuContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    toggleMenu = () => {
        this.setState({visible: !this.state.visible});
    }

    handleMouseDown = (e) => {
        this.toggleMenu()
        e.stopPropagation()
    }

    render() {
        return (
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown}/>
                <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
            </div>
        );
    }
}


export default MenuContainer;
