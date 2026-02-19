import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";

const Dashboard = React.lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./components/Dashboard"));
    }, 2000); // 2 second delay
  })
);


function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="title">Experiment 5.1 - Lazy Loading</h1>

        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={
                <Suspense fallback={<h2 className="loading">Lazy Loading...</h2>}>
                  <Dashboard />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
