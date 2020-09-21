import {INCREASE,DECREASE,RESET,HIDE_COUNTER,SHOW_COUNTER} from './ActionTypes'

export const increase=()=>{
    return{
        type:INCREASE
    }
}
export const decrease=()=>{
    return{
        type:DECREASE
    }
}
export const reset=()=>{
    return{
        type:RESET
    }
}
export const show=()=>{
    return{
        type:SHOW_COUNTER
    }
}
export const hide=()=>{
    return{
        type:HIDE_COUNTER
    }

}