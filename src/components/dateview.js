import React from "react";

function DateView(){
    var currentdata= new Date();

   return( <>
    <h4>{currentdata.getFullYear()}</h4>
    </>)
}
export default DateView