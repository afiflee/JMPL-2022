import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';
 
const Dashboard = () => {
    const [name, setName] = useState('');
    const [expire, setExpire] = useState('');
    const history = useHistory();
 
    useEffect(() => {
        refreshToken();
    }, []);
 
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            const token = response.data.accessToken;
            const decoded = jwt_decode(token);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            history.push("/");
        }
    }
 
    return (
        <div className="container mt-5">
            <h3>Welcome Back: {name}</h3>
            <p>Your token will expire at: {expire}</p>
        </div>
    )
}
 
export default Dashboard