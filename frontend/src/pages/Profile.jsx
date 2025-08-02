import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppointmentForm from "../components/AppointmentForm";
import "./Profile.css";

const Profile = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((d) => d.id === parseInt(id));
        setDoctor(found);
      });
  }, [id]);

  if (!doctor) return <p>Loading doctor profile...</p>;

  return (
    <div className="profile-container">
      <img src={doctor.image} alt={doctor.name} className="profile-image" />
      <div className="profile-details">
        <h2>{doctor.name}</h2>
        <p>
          <strong>Specialization:</strong> {doctor.specialization}
        </p>
        <p>
          <strong>Bio:</strong> {doctor.bio}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span className={doctor.available ? "available" : "unavailable"}>
            {doctor.available ? "Available" : "Unavailable"}
          </span>
        </p>
      </div>

      {doctor.available ? (
        <>
          <h3>Book Appointment</h3>
          <AppointmentForm doctorName={doctor.name} />
        </>
      ) : (
        <p className="not-available">Doctor is currently unavailable.</p>
      )}
    </div>
  );
};

export default Profile;
