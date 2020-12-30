import React from 'react';
import {connect} from "react-redux";
import {LOLTimeout} from "../store/root_reducer";

const One = (props) => {
    return (
        <div>
            {props.counter}
            <button onClick={props.Add.bind(this, 1)}>ADD</button>
            <button onClick={props.Add.bind(this, 5)}>ADD 5</button>
        </div>
    );
};


function mapStateToProps(state) {
    return {
        counter: state.one.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        Add: (value) => dispatch(LOLTimeout(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(One);
