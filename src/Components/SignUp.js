import React, {useState} from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
const SignUp = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

     const handleSubmit = (e) => {
        e.preventDefault();

        // Validate that the passwords match
        if (password !== confirmpassword) {
            alert('Passwords do not match');
            return;
        }

        // Simulate signup validation
        if (name && email && password) {
            // Simulate API call for signup
            // If signup is successful, navigate to the homepage
            navigate('/Login');
        } else {
            // If signup fails, show an alert (you can handle this differently)
            alert('All fields are required');
        }
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <h2>Sign Up</h2>
                <form>
                    <label>
                        Name:
                        <input type="text" 
                        name="name" required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label>
                        Email:
                        <input type="email" 
                        name="email" required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                    <label>
                        Password:
                        <input type="password" 
                        name="password" required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                    <label>
                        Confirm Password:
                        <input type="password" 
                        name="confirmpassword" required 
                        value={confirmpassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </label>
                    <button type="submit" onClick={handleSubmit}>Sign Up</button>
                    <div>
                        <h4>Already have an Account <a href="/Login">Login</a></h4>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
