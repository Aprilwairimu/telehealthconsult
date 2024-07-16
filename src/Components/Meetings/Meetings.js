// import React, { useState,useEffect, useRef } from 'react';
// import Header from '../Header';
// import AppointmentBooking from '../Appointments/AppointmentBooking';
// import './Meetings.css';

// const Meetings = () => {
//   const [summary, setSummary] = useState('');
//   const [description, setDescription] = useState('');
//   const [start, setStart] = useState('');
//   const [end, setEnd] = useState('');
//   const [eventId, setEventId] = useState('');
//   const [bookingType, setBookingType] = useState(null);
//   const calendarRef = useRef(null);


//   const [events, setEvents] = useState([]);
//   useEffect(() => {
//     // Fetch events from backend when component mounts
//     //fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/events');
//       if (response.ok) {
//         const data = await response.json();
//         setEvents(data); // Set fetched events to state
//       } else {
//         console.error('Failed to fetch events');
//       }
//     } catch (error) {
//       console.error('Error fetching events:', error);
//     }
//   };

//   const handleUpdateEvent = async () => {
//     const response = await fetch(`http://localhost:3001/update-event/${eventId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ summary, description, start, end }),
//     });

//     if (response.ok) {
//       alert('Event updated successfully');
//       reloadCalendar();
//     } else {
//       alert('Error updating event');
//     }
//   };

//   const handleDeleteEvent = async () => {
//     const response = await fetch(`http://localhost:3001/delete-event/${eventId}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       setEventId('');
//       alert('Event deleted successfully');
//       reloadCalendar();
//     } else {
//       alert('Error deleting event');
//     }
//   };

//   const reloadCalendar = () => {
//     if (calendarRef.current) {
//       const src = calendarRef.current.src;
//       calendarRef.current.src = '';
//       calendarRef.current.src = src;
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="container">
//         <div className="event-management">
//           <h2>Google Calendar Event Management</h2>
//           <div className="booking-switch">
//             <button onClick={() => setBookingType('appointment')}>Book Appointment</button>
//           </div>
//           {bookingType === 'appointment' && <AppointmentBooking />}
//           <div>
            
//             <button onClick={handleUpdateEvent}>Update Event</button>
//             <button onClick={handleDeleteEvent}>Delete Event</button>
//           </div>
//         </div>
//         <div className="calendar">
//           <iframe
//             ref={calendarRef}
//             src="https://calendar.google.com/calendar/embed?src=addressbook%23contacts%40group.v.calendar.google.com&ctz=Africa%2FNairobi"
//             style={{ border: 0, width: '800px', height: '600px', frameBorder: '0', scrolling: 'no' }}
//           ></iframe>
//         </div>

//         <div style={{ flex: 1 }}>
//           {/* Display events fetched from backend */}
//           <h3>Events</h3>
//           {/* <ul>
//             {events.map((event) => (
//               <li key={event.id}>
//                 <strong>{event.summary}</strong>
//                 <p>{event.start.dateTime}</p>
//                 <p>{event.end.dateTime}</p>
//                 <p>{event.description}</p>
//               </li>
//             ))}
//           </ul> */}
//         </div>


//       </div>
//     </div>
//   );
// };

// export default Meetings;


import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import Notifications from "../Notifications/Notifications";
import Header from "../Header";
import './Meetings.css';

const locales = {
  "en-US": require('date-fns/locale/en-US')
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function Meetings() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleStartDateChange = (date) => {
    setNewEvent({ ...newEvent, start: date });
  };

  const handleEndDateChange = (date) => {
    setNewEvent({ ...newEvent, end: date });
  };

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
    setNewEvent({ title: "", start: "", end: "" });

    // Add notification message
    const notification = `Event "${newEvent.title}" created successfully.`;
    setNotifications([notification, ...notifications]);
  };

  const handleEventClick = (event) => {
    // Implement logic to display event summary when clicked
    alert(`Event Summary: ${event.title}\nStart: ${event.start}\nEnd: ${event.end}`);
  };

  return (
    <div className="consultation-booking">
      <Header/>
      <h1>Event Scheduler</h1>
      <div className="flex-container">
        <form className="event-form" onSubmit={(e) => { e.preventDefault(); handleAddEvent(); }}>
           <h2>Add Event</h2>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={newEvent.title}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Start Date:
            <DatePicker
              selected={newEvent.start}
              onChange={handleStartDateChange}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </label>
          <br />
          <label>
            End Date:
            <DatePicker
              selected={newEvent.end}
              onChange={handleEndDateChange}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </label>
          <br />
          <button type="submit">Add Event</button>
        </form>

        <div className="calendar-container">
          <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, margin: "50px" }}
            onSelectEvent={handleEventClick} // Handle event click to show summary
          />
        </div>

        {/* Display notifications */}
        <Notifications notifications={notifications} />
      </div>
    </div>
  );
}

export default Meetings;
