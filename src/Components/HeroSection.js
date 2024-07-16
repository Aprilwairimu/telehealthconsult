// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';
import SignUp from './SignUp';


const HeroSection = () => {
    return (
        <section className="hero-section" id="home">
            <h1>Welcome to TeleConsult</h1>
            <p>Your trusted tele-consultation platform</p>
            <div className="hero-buttons">
                <a href="/signup" className="btn">Sign Up</a>
                <a href="/login" className="btn">Log In</a>
                <a href="/about" className="btn">Learn More</a>
            </div>
        </section>
    );
};

export default HeroSection;
