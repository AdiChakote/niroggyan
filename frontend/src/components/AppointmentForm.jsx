import React, { useState } from "react";
import "./AppointmentForm.css";

const AppointmentForm = ({ doctorName }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    datetime: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    console.log("Appointment booked:", formData);
    setSuccess(true);
    setFormData({ name: "", email: "", datetime: "" });
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <label>Patient Name</label>
      <input
        type="text"
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
      />

      <label>Preferred Date & Time</label>
      <input
        type="datetime-local"
        name="datetime"
        required
        value={formData.datetime}
        onChange={handleChange}
      />

      <button type="submit">Book Appointment</button>

      {success && (
        <p className="success-msg">
          Appointment successfully booked with {doctorName}!
        </p>
      )}
    </form>
  );
};

export default AppointmentForm;
