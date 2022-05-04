import React, { useState } from "react";
import "./todo.css"
function Todoapp(){
    const [inputvalue, setInputValue] = useState(' ')
    const [todo, setTodo] = useState([])
    function handler(e) {
        setInputValue(e.target.value)
    }
    function getvalue() {
        setTodo(todo.concat({id:todo.length,todo:inputvalue})
        )
    }
    function removeTask(index){
        setTodo(prevState => {
            const todo = [...prevState];
            todo.splice(index, 1);
            return todo;
        });
    }
    return (
        <>
            <center>
                <input type="text" value={inputvalue} onChange={(e) => handler(e)} id="form_input"></input>
                <button onClick={() => getvalue()} id="btn_id">Add</button>
                <div>
                    {
                        todo.map((ele) => {
                            return <><div id="division_id"><div id="ele_id">{ele.todo}</div><button onClick={() => removeTask(ele.id)} id="delete_id">Delete</button></div>
                            </>
                        }
                        )
                    }
                </div>
            </center>
        </>
    )

}
export default Todoapp