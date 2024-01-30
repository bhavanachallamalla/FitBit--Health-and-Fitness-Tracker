// RegistrationForm.js
import React, { useState } from 'react';
import './RegistrationForm.css'; // Import CSS file

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    mobileNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to server
    console.log(formData);
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>Register Fitbit</h2>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Mobile Number:
        <input
          type="tel"  
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <button type="Register">Register</button>
    </form>
  );
};

export default RegistrationForm;
