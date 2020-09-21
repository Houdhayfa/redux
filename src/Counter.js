import React from 'react'
import {connect} from 'react-redux'
import {increase,decrease,reset,show,hide} from './Store/Actions'
import {FaPlusCircle,FaMinusCircle,FaUndoAlt} from 'react-icons/fa'

function Counter(props) {
    return (
        <div className="counterContainer">
            {props.counterIsDisplayed?(
            <>
            <div>
              <h3 id="counter">{props.counter}</h3>
            </div>
            <div className="buttonsGroup btn-group" role="group" aria-label="Basic example">
            <button type="button" className=" btn btn-secondary" onClick={()=>props.increase()} ><FaPlusCircle/></button>
            <button type="button" className=" btn btn-secondary" onClick={()=>props.decrease()} ><FaMinusCircle/></button>
            <button type="button" className=" btn btn-secondary" onClick={()=>props.reset()} ><FaUndoAlt/></button>
            </div>
            </>) :null}
            <h3 id="title">{props.counterIsDisplayed?null:"COUNTER"}</h3>
            <h4 id="title">{props.counterIsDisplayed?null:"WorkShop Redux"}</h4>
            <div>
            <button className="button btn btn-secondary" 
                    onClick={props.counterIsDisplayed? ()=>props.hide():()=>props.show()} >
                {props.counterIsDisplayed? "HIDE":"SHOW"} 
            </button>
            </div>
        </div>
    )
}


const mapStateToProps=(state)=>{
    return {counter:state.counter,
            counterIsDisplayed:state.counterIsDisplayed}
}
const mapDispatchToProps=(dispatch)=>{
    return {
        increase:()=>dispatch(increase()),
        decrease:()=>dispatch(decrease()),
        reset:()=>dispatch(reset()),
        show:()=>dispatch(show()),
        hide:()=>dispatch(hide())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)