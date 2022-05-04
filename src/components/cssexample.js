import React from "react";
import "./cssexample.css";

function CssExample(){
    const CssStyle={
        color:"green",
        fontSize:"20px",
    }
   return(<div>
       <h1 id="external">Css Example</h1>
       <h1 style={CssStyle}>Hello World</h1>
       <h1 style={{color:"brown"}}>Hello </h1>
   </div>)
}
export default CssExample
