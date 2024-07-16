// src/components/FeaturesSection.js
import React from 'react';
import './Policies.css';
import Header from '../Header';

const features = [
    { title: 'Information Collection And Use', description: 'We collect basic user information such as name and email for the purpose of scheduling appointments.We may collect usage data for improving our service and user experience.' },
    { title: 'Data Storage and Security', description: 'User data is stored securely and is not shared with third parties unless required by law or for service provision.We implement industry-standard security measures to protect user data.' },
    { title: 'Cookies', description: 'We use cookies to maintain user sessions.Users can disable cookies through their browser settings.' },
    { title: 'Third-Party Services', description: 'We may use third-party services for analytics or authentication.These services may collect information according to their own privacy policies.' },
    { title: 'Changes to Privacy Policy', description: 'We may update this Privacy Policy as our application evolves.Users will be notified of any significant changes.' },
];

const PrivacyPolicy = () => {
    return (
        <div>
            <Header/>
            <section className="policy" id="about">
                <h2>Application Privacy Policy</h2>
                <div className="cards-container">
                    {features.map((feature, index) => (
                        <div className="card" key={index}>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
