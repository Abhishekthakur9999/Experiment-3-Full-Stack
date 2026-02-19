import React from "react";

function Dashboard() {
  return (
    <div className="card">
      <h2>Dashboard</h2>
      <p>This component is loaded using React.lazy()</p>

      <h3>Skills</h3>
      <ul className="skills">
        <li>React.js</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>HTML & CSS</li>
        <li>Database (MySQL / Oracle)</li>
      </ul>
    </div>
  );
}

export default Dashboard;
