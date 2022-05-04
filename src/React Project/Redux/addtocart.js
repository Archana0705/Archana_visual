import React, { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { addtocart, selectCount} from "./productreducer";
import {Link} from "react-router-dom"
 

function AddCart(props){
    const stateData = useSelector(selectCount);
    const dispatch= useDispatch();
      function valueinc(){
          
        dispatch(addtocart(props.detail)) 
    }
    return(   
        <>
        <button onClick={()=>valueinc()}><Link to={"/cart"}>Add To Cart</Link></button>
        <div>
           <p> {stateData.productName}</p>
        </div>
        </>  
    )
};
export default AddCart