import React, { useState } from "react";
import { Link } from "react-router-dom";
import dp from "./assets/dp.jpg";
// Assuming you're importing the CSS from an external file, uncomment the next line
// import './Profile.css';

function Profile() {
  // Placeholder user data - replace this with actual data fetching in a real app
  const [userData, setUserData] = useState({
    name: "Chief Chef",
    email: "testuser@example.com",
    bio: "Food enthusiast. Love to cook and experiment. Traveler.",
    profilePicture: { dp },
  });

  const [isEditing, setIsEditing] = useState(false);

  // Function to handle the Edit button click
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Function to handle the Save & Exit button click
  const handleSaveExitClick = () => {
    setIsEditing(false);
    // Here you would typically save the updated user data to your backend or state management
    console.log("Saved data: ", userData);
  };

  return (
    <>
      <style>
        {`/* Profile.css */
.profile-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: #fff;
}

.profile-header {
  text-align: center;
}

.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.profile-details strong {
  font-weight: bold;
}

.edit-button, .save-exit-button {
  cursor: pointer;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
}

.edit-button {
  background-color: #f0ad4e;
  color: white;
}

.save-exit-button {
  background-color: #5cb85c;
  color: white;
}
`}
      </style>
      <div className="profile-container">
        <div className="profile-header">
          <img src={dp} alt="Profile" className="profile-picture" />
          <h1>{userData.name}</h1>
        </div>
        <div className="profile-details">
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Bio:</strong> {userData.bio}
          </p>
        </div>
        {/* More profile information here */}
        {isEditing ? (
          <Link to="/feed" className="save-exit-button">
            Save & Exit
          </Link>
        ) : (
          <button className="edit-button" onClick={handleEditClick}>
            Edit
          </button>
        )}
      </div>
    </>
  );
}

export default Profile;
