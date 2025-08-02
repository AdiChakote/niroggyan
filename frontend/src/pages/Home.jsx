import React, { useEffect, useState } from "react";
import DoctorList from "../components/DoctorList";
import "./Home.css";

const Home = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <h1>Find a Doctor</h1>
      <input
        type="text"
        placeholder="Search doctor by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <DoctorList doctors={filteredDoctors} />
    </div>
  );
};

export default Home;
