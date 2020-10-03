import { HIDECALCULATOR, HIDEPOMODORO } from './action'

const initState = {
    hide_calculator: true,
    hide_pomodoro : true
}

export const rootReducer = ( state = initState, action) => {
    if(action.type === HIDECALCULATOR){
        return {
            ...state,
            hide_calculator: !state.hide_calculator
        }
    }
    if(action.type === HIDEPOMODORO){
        return {
            ...state,
            hide_pomodoro: !state.hide_pomodoro
        }
    }
    return state;
}