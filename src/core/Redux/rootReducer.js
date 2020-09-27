import { HIDECALCULATOR } from './action'

const initState = {
    hide_calculator: false,
}

export const rootReducer = ( state = initState, action) => {
    if(action.type === HIDECALCULATOR){
        return {
            ...state,
            hide_calculator: !state.hide_calculator
        }
    }
    return state;
}