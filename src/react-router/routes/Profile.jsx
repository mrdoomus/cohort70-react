import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
      <p>This is the profile</p>
      <Link to="/">Back to App</Link>
    </div>
  );
};

export default Profile;
