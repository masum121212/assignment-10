import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <div className="container my-5 py-5">
            <h1>please Login</h1>
            <button onClick={signInUsingGoogle} className="btn btn-outline-info">Google Sign In</button>
            </div>
            <div className="container my-5 py-5">
            <Link to="/home">
                    <button className="btn btn-outline-info "><i className="fas fa-home"></i> Back To Home</button>
            </Link>
            </div>
        </div>
    );
};

export default Login;