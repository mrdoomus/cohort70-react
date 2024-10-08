import React from "react";
import { Link, useParams } from "react-router-dom";

const About = () => {
  // Use useParams hook to get the parameter value
  const { firstName } = useParams();

  return (
    <div>
      <h2>About {firstName}</h2>
      <p>This is the about page.</p>
      <Link to="/">Back to App</Link>
    </div>
  );
};

export default About;
