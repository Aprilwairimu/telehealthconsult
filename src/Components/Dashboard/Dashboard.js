import React from 'react';
import './Dashboard.css'; // Make sure to create this CSS file
import Header from '../Header';

const Dashboard = () => {
  return (
    <div>
        <Header/>
    
        <div className="dashboard">
        <div className="card profile-card">
            {/* Profile and Account Management */}
            <h3>Profile and Account Management</h3>
            <p>Manage your profile information and account settings here.</p>
            <ul>
            <li>Edit profile details</li>
            <li>Change account settings</li>
            <li>Update password</li>
            </ul>
        </div>

        <div className="card appointment-card">
            {/* Appointment Management */}
            <h3>Appointment Management</h3>
            <p>View and manage your upcoming appointments.</p>
            <ul>
            <li>Book new appointments</li>
            <li>Reschedule or cancel appointments</li>
            <li>Set appointment reminders</li>
            </ul>
        </div>

        <div className="card consultation-card">
            {/* Consultation History */}
            <h3>Consultation History</h3>
            <p>View your past consultations and their details.</p>
            <ul>
            <li>Review past consultations</li>
            <li>Download consultation reports</li>
            <li>View consultation summaries</li>
            </ul>
        </div>

        <div className="card calendar-card">
            {/* Calendar */}
            <h3>Calendar</h3>
            
            <p>View your schedule and upcoming events.</p>
            <ul>
            <li>View daily, weekly, or monthly calendar</li>
            <li>Add new events or appointments</li>
            <li>Sync with external calendars</li>
            </ul>
        </div>

        <div className="card support-card">
            {/* Help and Support */}
            <h3>Help and Support</h3>
            <p>Get assistance and support for using the TeleConsult service.</p>
            <ul>
            <li>FAQs and support articles</li>
            <li>Contact support team</li>
            <li>Report issues or feedback</li>
            </ul>
        </div>
        </div>
    </div>
  );
};

export default Dashboard;

