// src/components/Header.js
import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
// import Sidebar from './Sidebar/Sidebar';
import './Header.css';
import { Avatar } from '@mui/material';
import { FaCaretDown } from 'react-icons/fa';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [profilePicture, setProfilePicture] = useState(null); // Store profile picture file or URL
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <header className="header">
            <div className="logo">TeleConsult</div>
            <nav className="nav-links">
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="/signup">Sign Up</a>
                {/* <a href="/login">Log In</a> */}
                <a href="#support">Support</a>
                <div alt="Profile Picture" src={profilePicture} onClick={toggleDropdown}>
                    <FaCaretDown size={30} />
                    {dropdownOpen && (
                        <div className="dropdown-menu">
                            <a href="/profile">Profile</a>
                            <a href="/dashboard">Dashboard</a>
                            <a href="/meetings">Bookings & Meetings</a>
                            <a href="/notifications">Notifications</a>
                            <a href="/privatepolicy">Private Policy</a>
                            <a href="/termservice">Terms Service</a>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
