import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            history.push("/");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <form onSubmit={Register}>
            <h3>Sign Up</h3>

            <p className="has-text-centered">{msg}</p>

            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" placeholder="Confirm password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="/">sign in?</a>
            </p>
        </form>
    );

}

export default SignUp