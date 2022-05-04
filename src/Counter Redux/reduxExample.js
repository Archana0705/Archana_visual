import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {increment, decrement, selectCount} from "../Counter Redux/counterReducer"
function Counter(){
    const stateData = useSelector(selectCount);
    const dispatch= useDispatch();
    function Add(){
        dispatch(increment())
    }
    function Minus(){
        dispatch(decrement())
    }
    return(
        <>
        <p>{stateData}</p>
        <button onClick={()=>Add()}>Increment</button>
        <button  onClick={()=>Minus()}>Decrement</button>
        </>
    )
}
export default Counter