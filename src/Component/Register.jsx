import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [userdata, setuserdata] = useState({
        username: "",
        email: "",
        password: "",
        contactno: ""
    });
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        let localdata = localStorage.getItem("userdata");
        if (localdata) {
            let userArray = JSON.parse(localdata);
            console.log(localdata)
            if (userArray.find((item) => item.email === userdata.email)) {
                alert("Email already exsist");
            } else {
                userArray.push(userdata);
                localStorage.setItem("userdata", JSON.stringify(userArray));
                navigate('/login')
            }
        } else {
            localStorage.setItem("userdata", JSON.stringify([userdata]));
        }
    };
    return (
        <>
            <div className="container">
                <h1>Register</h1>
                <form onSubmit={handleRegister}>
                    <input placeholder="Enter username"
                        type="text"
                        value={userdata.username} required
                        onChange={(e) =>
                            setuserdata({ ...userdata, username: e.target.value })} />
                    <input placeholder="Enter mail id" type="email"
                        value={userdata.email} required
                        onChange={(e) => setuserdata({ ...userdata, email: e.target.value })} />
                    <input placeholder="Enter password" type="password"
                        value={userdata.password}
                        required
                        onChange={(e) => setuserdata({ ...userdata, password: e.target.value })} />
                    <input placeholder="Enter contact no" type="contact-no" required value={userdata.contactno}
                        onChange={(e) => setuserdata({ ...userdata, contactno: e.target.value })} />
                    <button type="submit">Register</button>
                </form>
                <h3>Already have an account
                    <button onClick={() => navigate('/login')}>Login</button>
                </h3>
            </div>
        </>
    )
}
export default Register;