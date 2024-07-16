import React, {useState} from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import HomePage from './HomePage';

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

     const handleSubmit = (e) => {
        e.preventDefault();

          console.log('Email:', email);
          console.log('Password:', password);

        // Simulate login validation
        if (email === 'user@example.com' && password === 'password123') {
            // If login is successful, navigate to the homepage
            navigate('/');
        } else {
            // If login fails, show an alert (you can handle this differently)
            alert('Invalid email or password');
            setEmail('');
            setPassword('');
        }
    };
    
    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Log In</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Email:
                        <input type="email" 
                        name="email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                        Password:
                        <input type="password" 
                        name="password" 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
