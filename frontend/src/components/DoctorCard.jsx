import React from "react";
import { Link } from "react-router-dom";
import "./DoctorCard.css";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <img src={doctor.image} alt={doctor.name} className="doctor-image" />
      <div className="doctor-info">
        <h3>{doctor.name}</h3>
        <p>{doctor.specialization}</p>
        <p
          className={`status ${doctor.available ? "available" : "unavailable"}`}
        >
          {doctor.available ? "Available" : "Unavailable"}
        </p>
        <Link to={`/doctor/${doctor.id}`} className="view-profile-btn">
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
