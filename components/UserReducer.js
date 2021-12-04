import Redux, { createStore } from 'redux';

//Action 
export function initializeUser(value) {
    return {
        type: 'initializeUser',
        valueOfState: value
    }
}

//Reducer
export function changeUserValue(state, action) {
    if (state == undefined) {
        state = null
    }
    if (action.type == 'initializeUser') {
        return action.valueOfState
    } else {
        return state = null
    }
}

export const userStore = createStore(changeUserValue);
