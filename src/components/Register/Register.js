import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="simple-design">
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="your email" />
                    <br />
                    <input type="password" name="" id="" placeholder="password" />
                    <br />
                    <input type="password" name="" id="" placeholder="re-enter-password" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>-----------or----------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;