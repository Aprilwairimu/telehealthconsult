// src/components/SupportSection.js
import React from 'react';
import './SupportSection.css';

const SupportSection = () => {
    return (
        <section className="support-section" id="support">
            <h2>Support</h2>
            <div className="faqs">
                <h3>FAQs</h3>
                <ul>
                    <li>How do I book a consultation?</li>
                    <li>What platforms are supported?</li>
                    <li>How can I update my profile?</li>
                </ul>
            </div>
            <div className="contact-form">
                <h3>Contact Us</h3>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" required />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" required></textarea>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default SupportSection;
