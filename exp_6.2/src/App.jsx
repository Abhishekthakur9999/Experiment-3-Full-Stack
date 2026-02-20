import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateForm = (e) => {
    e.preventDefault();

    let valid = true;

    // Email Regex
    const emailPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|[a-z]{2,})$/;

    // Password Regex
    const passwordPattern =
      /^[A-Z](?=.*[0-9])(?=.*[!@#$%^&*]).{4,}$/;

    setEmailError("");
    setPasswordError("");

    // Email Validation
    if (!emailPattern.test(email)) {
      setEmailError("Invalid Email format!");
      valid = false;
    }

    // Password Validation
    if (!passwordPattern.test(password)) {
      setPasswordError(
        "Password must start with capital letter, contain number, special character & minimum 5 characters."
      );
      valid = false;
    }

    if (valid) {
      alert("Form Submitted Successfully 🚀");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="container">
      <h2>Login Form</h2>

      <form onSubmit={validateForm}>
        {/* Email */}
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="error">{emailError}</div>

        {/* Password */}
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="error">{passwordError}</div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;