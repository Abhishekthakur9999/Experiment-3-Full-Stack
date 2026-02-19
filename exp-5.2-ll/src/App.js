import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// FORCE DELAY FUNCTION
function delayImport(factory, time) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(factory()), time);
  });
}

// Lazy Routes with clear delay
const Home = React.lazy(() =>
  delayImport(() => import("./pages/Home"), 2000)
);

const About = React.lazy(() =>
  delayImport(() => import("./pages/About"), 2000)
);

const Dashboard = React.lazy(() =>
  delayImport(() => import("./pages/Dashboard"), 3000)
);

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="title">
          Experiment 5.2 - Route Based Lazy Loading
        </h1>

        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
        </nav>

        <div className="content">
          <Suspense fallback={<div className="loader">Lazy Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
