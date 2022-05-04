import React,{useState} from "react";



function FormValidation(){
   const [firstName,setFirstName]= useState("");
   const [lastName,setLastName]=useState("")
   const [firstNameErr, setFirstNameErr]=useState({});
   const [lastNameErr, setLastNameErr]=useState({});

    return(
        <div>
        <h1>Hello World</h1>
            <form>
                <label> FirstName: </label>
                    <input type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}>

                    </input>
                    <label> LastName: </label>
                    <input type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
              
            </form>
    </div>
    )
}
export default FormValidation
