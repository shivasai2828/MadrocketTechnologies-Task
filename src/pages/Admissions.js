import React from "react";
import "../styles/Admissions.css";

function Admissions() {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1jXPaXwiI2buwHyIsV_S8b-ILgHGsVreO/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <div className="admissions">
      <h2>Admissions</h2>
      <h3>Process</h3>
      <p className="downloade-para">
        Download the Form and Fill The Form See The Process
      </p>
      <button onClick={handleDownload}>Download Form </button>
      <h3>Criteria</h3>
      <p>
        Admission is based on merit and availability of seats. Entrance tests
        may be conducted for certain grades.
      </p>
      <h3>Important Dates</h3>
      <ul>
        <li>Admission Form Availability: March 1st</li>
        <li>Last Date for Submission: March 31st</li>
        <li>Entrance Test: April 15th</li>
        <li>Announcement of Results: April 30th</li>
      </ul>
    </div>
  );
}

export default Admissions;
