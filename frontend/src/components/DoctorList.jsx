import React from "react";
import DoctorCard from "./DoctorCard";
import "./DoctorList.css";

const DoctorList = ({ doctors }) => {
  if (doctors.length === 0) {
    return <p className="no-results">No doctors found.</p>;
  }

  return (
    <div className="doctor-list">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorList;
