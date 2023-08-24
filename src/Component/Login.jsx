import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => { 
    
    e.preventDefault();
    let localdata = JSON.parse(localStorage.getItem("userdata"));
    console.log(localdata);
    if (localdata) {
      let user = localdata.find((item) => item.email === email);
      if (user.email === email && user.password === password) {
        navigate("/home");
      } else {
        alert("Invaild email or password");
      }
    } else {
      alert("Please register and login");
    }
  };
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email} 
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={()=>navigate('/home')} >Login</button>
             </form>
      <h3>
          Don't have an account?
          <button onClick={()=>navigate('/')} >
            Register
          </button>
        </h3>
    </div>
  );
};
export default Login;