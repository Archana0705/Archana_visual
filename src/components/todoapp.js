import React, { useState } from "react";

function TodoAppexample(){
    const[inputValue,setInputValue]=useState(' ')
    const[todo,setTodo]=useState([])
    function handle(e){
         setInputValue(e.target.value)
    }
     function gettodo(){
         setTodo(todo.concat(inputValue))
     }
        return(
       <div> <input type ="text" value={inputValue} onChange={(e)=>handle(e)}></input><br/>
       <button onClick={()=>gettodo()}>add</button>
         <div>
         {
                    todo.map((ele)=>{
                       return <><div> {ele} <i>X</i></div>
                       
                       </>
                    }
                    )
                }
         </div>
       </div>
    )
}
export default TodoAppexample