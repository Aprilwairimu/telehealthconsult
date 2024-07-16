// src/components/FeaturesSection.js
import React from 'react';
import './FeaturesSection.css';

const features = [
    { title: 'Easy Scheduling', description: 'Easily schedule and book consultations.' },
    { title: 'Calendar Integration', description: 'Sync with popular calendars like Google and Outlook.' },
    { title: 'Automated Meetings', description: 'Automatic creation of virtual meeting rooms.' },
    { title: 'Multi-channel Notifications', description: 'Receive notifications via email, WhatsApp, and SMS.' },
    { title: 'Secure & Compliant', description: 'Ensure data security and compliance with regulations.' },
];

const FeaturesSection = () => {
    return (
        <section className="features-section" id="about">
            <h2>Key Features</h2>
            <div className="cards-container">
                {features.map((feature, index) => (
                    <div className="card" key={index}>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
