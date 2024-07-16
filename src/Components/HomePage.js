import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import SupportSection from './SupportSection';
import Footer from './Footer';
//import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <HeroSection />
            <FeaturesSection />
            <SupportSection />
            <Footer />
        </div>
    );
};

export default HomePage;
