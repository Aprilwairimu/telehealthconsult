const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { google } = require('googleapis');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());


// (ZOOM MEETING INTERGRATION)
// const zoomAPIBaseURL = 'https://api.zoom.us/v2';

// const getZoomToken = async () => {
//   const response = await fetch('https://zoom.us/oauth/token', {
//     method: 'POST',
//     headers: {
//       'Authorization': `Basic ${Buffer.from(`${process.env.ZOOM_CLIENT_ID}:${process.env.ZOOM_CLIENT_SECRET}`).toString('base64')}`,
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: new URLSearchParams({
//       'grant_type': 'client_credentials',
//     }),
//   });
//   const data = await response.json();
//   return data.access_token;
// };

// app.post('/create-meeting', async (req, res) => {
//   const { date, time, doctor, reason } = req.body;
//   const token = await getZoomToken();

//   const startTime = new Date(`${date}T${time}:00`).toISOString();

//   const response = await fetch(`${zoomAPIBaseURL}/users/me/meetings`, {
//     method: 'POST',
//     headers: {
//       'Authorization': `Bearer ${token}`,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       topic: `Consultation with Dr. ${doctor}`,
//       type: 2,
//       start_time: startTime,
//       duration: 30,
//       agenda: reason,
//     }),
//   });

//   const data = await response.json();
//   res.json(data);
// });

// (END ZOOM MEETING INTERGRATION)






// (GOOGLE CALENDAR INTERGRATION)

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'Frontend/build')));

// Configure OAuth client
const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);

const SCOPES = ['https://www.googleapis.com/auth/calendar'];
const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES,
});
console.log('Authorize this app by visiting this url:', authUrl);

// Middleware to check if the OAuth2 client is authenticated
const ensureAuthenticated = async (req, res, next) => {
  if (!oauth2Client.credentials || !oauth2Client.credentials.access_token) {
    console.log('No access token found');
    return res.status(401).send('Unauthorized: No access token found');
  }

  // Check if the access token is expired
  if (oauth2Client.credentials.expiry_date <= Date.now()) {
    console.log('Access token expired, refreshing token');
    try {
      const tokens = await oauth2Client.refreshAccessToken();
      oauth2Client.setCredentials(tokens.credentials);
    } catch (error) {
      console.error('Error refreshing access token:', error);
      return res.status(401).send('Unauthorized: Error refreshing access token');
    }
  }

  next();
};

// Handle OAuth callback
app.get('/oauth/callback', async (req, res) => {
  const { code } = req.query;
  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    console.log('Access token and refresh token set:', tokens);
    res.redirect('/'); // Redirect to frontend or success page
  } catch (error) {
    console.error('Error retrieving access token:', error);
    res.status(500).send('Error retrieving access token');
  }
});

// Route to initiate OAuth2 flow
app.get('/auth', (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  res.redirect(authUrl);
});

// Endpoint to create an event
app.post('/create-event', ensureAuthenticated, async (req, res) => {
  const { summary, description, start, end } = req.body;

  const event = {
    summary,
    description,
    start: {
      dateTime: start,
      timeZone: 'Africa/Nairobi' // EAT timezone
    },
    end: {
      dateTime: end,
      timeZone: 'Africa/Nairobi' // EAT timezone
    }
  };
  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

  try {
    const result = await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
    });
    console.log('Event created: ', result.data);
    res.send('Event created successfully');
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).send('Error creating event');
  }
});

// Fallback for other routes, serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'Frontend/build', 'index.html'));
});

// (END GOOGLE CALENDAR INTERGRATION)
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
