import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/shop';
    console.log('came from', location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (
        <div className="simple-design">
            <div>
                <h2>Login</h2>
                <form>
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
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;