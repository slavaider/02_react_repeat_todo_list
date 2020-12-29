import './App.css';
import React, {Component} from "react";
import MenuContainer from "./components/MenuContainer";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    addItem = (event) => {
        event.preventDefault()
        const items = this.state.items;
        items.unshift({text: event.target.text.value, key: Date.now()})
        this.setState({items})
        event.target.text.value = ''
    }

    deleteItem(key) {
        this.setState({items: this.state.items.filter(item => item.key !== key)})
    }

    render() {
        return (
            <div className="App">
                <MenuContainer/>
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input name='text' placeholder='Введите задачу' type="text"/>
                        <button type='submit'>Добавить</button>
                    </form>
                    <ul className='List'>
                        {this.state.items.map((item) =>
                            (
                                <li
                                    onClick={this.deleteItem.bind(this, item.key)}
                                    key={item.key}>{item.text}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
