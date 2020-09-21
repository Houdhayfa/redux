import * as ACTIONS from './ActionTypes'

const initialState={
    counter:0,
    counterIsDisplayed:false
}
function reducer(state=initialState,action) {
    switch (action.type) {
        case ACTIONS.INCREASE:
           return {...state,counter:state.counter+1} 
            ;
        case ACTIONS.DECREASE:
            if(state.counter>0)
            return {...state,counter:state.counter-1} 
            ;
        case ACTIONS.RESET:
            return {...state,counter:0}
            ;
        case ACTIONS.SHOW_COUNTER:
        return {...state,counterIsDisplayed:true}
        ;
        case ACTIONS.HIDE_COUNTER:
        return {...state,counterIsDisplayed:false}
        ;
        default:
           return state ;
    }
}

export default reducer
