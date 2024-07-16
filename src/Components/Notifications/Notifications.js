import React from 'react';
import './Notifications.css'; // Import the CSS file for styling

function Notifications({ notifications }) {
  return (
    <div className="notifications-container">
      <h2>Events</h2>
      {notifications.map((notification, index) => (
        <div key={index} className="notification">
          {notification}
        </div>
      ))}
    </div>
  );
}

export default Notifications;
