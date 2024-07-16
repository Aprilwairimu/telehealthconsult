// AppointmentBooking.js
import React, { useState } from 'react';
import './AppointmentBooking.css'; // Import your CSS for styling

const ConsultationtBooking = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [doctor, setDoctor] = useState('');
  const [reason, setReason] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false); // State for booking success

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call, validation, etc.)
    console.log('Form submitted:', { date, time, doctor, reason });
    // Reset form fields after submission
     setTimeout(() => {
      setBookingSuccess(true);
      // Optionally, reset form fields after submission
      setDate('');
      setTime('');
      setDoctor('');
      setReason('');
    }, 1000);
  };

  return (
    <div className="appointment-booking">
      <h2>Book Consultation</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
        <label>
          Doctor:
          <input
            type="text"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            required
          />
        </label>
        <label>
          Reason for Consultation:
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </label>
        <button type="submit">Book Consultation</button>
      </form>

      {/* Show notification if booking success */}
      {bookingSuccess && (
        <div className="success-notification">
          <p>Booking successful!</p>
        </div>
      )}
      
    </div>
  );
};

export default ConsultationtBooking;
