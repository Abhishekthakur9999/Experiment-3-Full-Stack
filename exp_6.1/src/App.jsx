import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    skills: [],
    address: "",
    state: ""
  });

  const states = ["Punjab", "Haryana", "Himachal Pradesh", "Delhi", "Rajasthan"];
  const skillOptions = ["HTML", "CSS", "JavaScript", "React"];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, value]
      });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter((skill) => skill !== value)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `First Name: ${formData.firstName}
Last Name: ${formData.lastName}
DOB: ${formData.dob}
Gender: ${formData.gender}
Skills: ${formData.skills.join(", ")}
Address: ${formData.address}
State: ${formData.state}`
    );
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      skills: [],
      address: "",
      state: ""
    });
  };

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>

        {/* First Name */}
        <div>
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <br />

        {/* Last Name */}
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <br />

        {/* DOB */}
        <div>
          <label>DOB: </label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <br />

        {/* Gender */}
        <div>
          <label>Gender: </label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          /> Male

          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          /> Female
        </div>
        <br />

        {/* Skills */}
        <div>
          <label>Skills: </label>
          {skillOptions.map((skill) => (
            <div key={skill}>
              <input
                type="checkbox"
                value={skill}
                checked={formData.skills.includes(skill)}
                onChange={handleCheckbox}
              /> {skill}
            </div>
          ))}
        </div>
        <br />

        {/* Address */}
        <div>
          <label>Address: </label><br />
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <br />

        {/* State Dropdown */}
        <div>
          <label>State: </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
          >
            <option value="">Select State</option>
            {states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <br />

        {/* Buttons */}
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel} style={{ marginLeft: "10px" }}>
          Cancel
        </button>

      </form>
    </div>
  );
}

export default App;