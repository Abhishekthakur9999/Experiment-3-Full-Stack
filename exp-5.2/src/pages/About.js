import React from "react";

function About() {
  return (
    <div className="card">
      <h2>About Page</h2>
      <p>This demonstrates route-based lazy loading in SPA.</p>
      <p>Each route component loads only when visited.</p>
    </div>
  );
}

export default About;
