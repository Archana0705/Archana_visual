import React from "react";

function Employee(props){
    return(<div>
            <h1>Hi{props.name}</h1>
            <h1>Employee ID:{props.empid}</h1>
            </div>)
}
export default Employee