// src/components/FeaturesSection.js
import React from 'react';
import './Policies.css';
import Header from '../Header';

const features = [
    { title: 'Acceptance of Terms', description: 'By using our service, you agree to these Terms of Service and our Privacy Policy.' },
    { title: 'Limitation of Liability', description: 'Users agree not to misuse the service or violate any laws in their jurisdiction.Users are responsible for maintaining the confidentiality of their account credentials.' },
    { title: 'Changes to Terms', description: 'We are not liable for any damages resulting from the use or inability to use our service.Our liability is limited to the fullest extent permitted by law.' },
    { title: 'Governing Law', description: 'We may modify these Terms of Service at any time.Continued use of the service after changes constitutes acceptance of the new Terms.' },
    { title: 'Secure & Compliant', description: 'These Terms are governed by and construed in accordance with the laws of jurisdiction' },
];

const TermsService = () => {
    return (
        <div>
            <Header/>    
            <section className="policy" id="about">
                <h2>Application Terms of Service</h2>
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

export default TermsService;
