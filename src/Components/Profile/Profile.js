import React, { useState } from 'react';
import Header from '../Header';
import { Avatar, Button, TextField, Typography } from '@mui/material';
import './Profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [bio, setBio] = useState('This is a bio');
  const [profilePicture, setProfilePicture] = useState(null); // Store profile picture file or URL

  // Function to handle profile picture upload
  const handleProfilePictureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Logic to save profile information
    // Example: API call to save changes

    // After saving, switch back to view mode
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <Header/>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      {!isEditing ? (
        <div>
          <Avatar alt="Profile Picture" src={profilePicture} sx={{ width: 100, height: 100, mb: 2 }} />
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body1">{email}</Typography>
          <Typography variant="body2">{bio}</Typography>
          <Button variant="contained" color="primary" onClick={() => setIsEditing(true)} style={{ marginTop: '20px' }}>
            Edit Profile
          </Button>
        </div>
      ) : (
        <div>
          <Avatar alt="Profile Picture" src={profilePicture} sx={{ width: 100, height: 100, mb: 2 }} />
          <input type="file" onChange={handleProfilePictureUpload} accept="image/*" />

          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            variant="outlined"
            margin="normal"
          />

          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            variant="outlined"
            margin="normal"
          />

          <TextField
            label="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
          />

          <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginRight: '10px' }}>
            Save
          </Button>
          <Button variant="outlined" color="secondary" onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
};

export default Profile;
