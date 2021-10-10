import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const { user, signInUsingGoogle } = useFirebase();
    return (
        <div className="simple-design">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" placeholder="your email" />
                    <br />
                    <input type="password" placeholder="your password" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>New to ema-john? <Link to="/register">Creact new Account</Link></p>
                <div>-----------or----------</div>
                <button
                    className="btn-regular"
                    onClick={signInUsingGoogle}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;