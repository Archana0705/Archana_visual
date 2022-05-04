import React,{useState} from "react";
import "../Products/login.css"
import { useHistory } from "react-router-dom";
function LoginPagecom() {
  const history = useHistory()
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
 
    if (!values.username) {
      errors.username = "Username is required!";
    }
    else if(values.username.length< 3){
      errors.username = "Must be more than 3 character"
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    else if(Object.keys(errors).length===0 && isSubmit){
      history.push("/Shop")
      return null;
    }
    return errors;
  };

  return (
    <center>
    <div className="container">
      {Object.keys(formErrors).length ===0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre></pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label id="user_label">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p class="para-class">{formErrors.username}</p>
          <div className="field">
            <label id="pass_label">Password</label>
            <input 
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p class="para-class">{formErrors.password}</p>
          <button className="fluid ui button blue" >Submit</button>
        </div>
      </form>
    </div>
    </center>
  );
}
export default LoginPagecom