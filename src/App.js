import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    age: '',
    gender: '',
    date: '',
    doctor: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment booked successfully!');
    setFormData({
      patientName: '',
      phone: '',
      age: '',
      gender: '',
      date: '',
      doctor: ''
    });
  };

  return (
    <div className="container">
      <h2>Doctor Appointment Booking</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Patient Name:
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          Appointment Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Doctor Name:
          <input
            type="text"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default App;


