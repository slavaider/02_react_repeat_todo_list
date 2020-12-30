import {combineReducers} from "redux";

const InitialState = {
    counter: 0
}

export function LOL(payload) {
    return {
        type: 'LOL',
        value: payload
    }
}

export function LOLTimeout(payload) {
    return (dispatch) => setTimeout(() => dispatch(LOL(payload)), 2000)
}

export function reducerOne(state = InitialState, action) {
    switch (action.type) {
        case 'LOL':
            return {
                ...state,
                counter: state.counter + action.value,
            }
        default:
            return state
    }
}

export default combineReducers({one: reducerOne})
