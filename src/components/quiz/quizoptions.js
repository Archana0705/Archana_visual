import React from "react";
function QuizOptions({options,name}){
    const optionStyle = {
        display: 'flex',
        alignItems: 'baseline'
    }
    return (
        options.map((ele) => {
            return (
                <div style={optionStyle} key={ele}>
                <input type='radio' name={name}/>
                    <p>{ele}</p>
                </div>
            )
        }
        )
    )
}

export default QuizOptions