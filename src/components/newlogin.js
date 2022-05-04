import React, { useState } from "react";
import "../React Project/Products/login.css"
import { useHistory } from "react-router-dom";
function LoginValidation() {
    const history = useHistory()
    const initialValues = { username: "", lastname: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [dateof, setDateof] = useState('');
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
        else if (values.username.length < 10) {
            errors.username = "Must be more than 3 character"
        }

        if (!values.lastname) {
            errors.lastname = "LastName is required!";
        }
        else if (values.lastname.length < 10) {
            errors.lastname = "Must be more than 10 character"
        }
        else if (Object.keys(errors).length === 0 && isSubmit) {
            history.push("/Shop")
            return null;
        }
        return errors;
    };
    function getAge(e) {
        var today = new Date();
        var birthDate = new Date(e.target.value);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
            console.log('the age is', +age)
        }
        return age;

    }

    return (
        <center>
            <div className="container">
                {Object.keys(formErrors).length === 0 && isSubmit ? (
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
                        <p className="para-class">{formErrors.username}</p>
                        <div className="field">
                            <label id="user_label_1">LastName</label>
                            <input
                                type="text"
                                name="lastname"
                                placeholder="Lastname"
                                value={formValues.lastname}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="para-class">{formErrors.lastname}</p>
                        <div className="field">
                            <label id="dob_label">DOB:</label>
                            <input type='date' value={dateof} name='date-of-birth' placeholder='date-of-birth' onChange={(e) => setDateof(e.target.value)} />
                            <button id="btnCalculate" onClick={() => getAge()}
                            >Check Age</button><br /><br />
                            <p>{ }</p>
                        </div>
                        <div className="field">
                            <label id="qualify_label">Qualification:</label>
                            <select name="dropdown" id="dropdown">
                                <optgroup label="UG">
                                    <option value="bsc">B.Sc</option>
                                    <option value="bcom">B.Com</option>
                                </optgroup>
                                <optgroup label="PG">
                                    <option value="msc">M.Sc</option>
                                    <option value="mcom">M.Com</option>
                                </optgroup>
                            </select><br /><br />
                        </div>
                        <div class="check-container" id="check_container">
                        <div class="input-class">
                            <label>Course:</label><br />
                            <input className="course-one" type="checkbox" id="course1" name="course1" value="Front End" />
                            <label for="course1" id="label_front"> Front End</label><br></br>
                            <input className="course-one" type="checkbox" id="course2" name="course2" value="Back End" />
                            <label for="course2"  id="label_back"> BackEnd</label><br></br>
                            <input className="course-one" type="checkbox" id="course3" name="course3" value="Data Science" />
                            <label for="course3"  id="label_data"> Data Science</label><br></br>
                            </div>
                            <br />

                        </div>
                        <button className="fluid ui button blue" >Submit</button>
                    </div>
                </form>
            </div>

        </center>
    );
}
export default LoginValidation