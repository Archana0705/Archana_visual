import React, { useState } from "react";
import "../Products/Login2.css";

function LoginComponent() {
  
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const submit = (e) => {
    e.preventDefault();
        if ( user.length < 3) {
      console.log("Enter Username");
    } else if (pass.length < 6) {
      var pass = /^[A-Za-z]\w{7,14}$/;
      console.log("weak");
    } else {
      console.log("Login Successful");
    }
  };

  return (
    <div className="main-container">
      <form onSubmit={submit}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN6PSb90rGnT4WTxYC7HBxNWs2Ig-mSP2b0g&usqp=CAU"
          alt="No img"
        />
        <br />
        <br />
        <h1>Login</h1>
        <div className="login-fields">
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            required
          />
        </div>
        <br />
        <div className="login-button">
          <input type="submit" name="button" />
        </div>
      </form>
    </div>
  );
}
export default LoginComponent;
