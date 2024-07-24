import React from "react";
import { Link } from "react-router-dom";
import "../styles/QuickLinks.css";

function QuickLinks() {
  return (
    <div className="quick-links">
      <Link to="/about-us">About Us</Link>
      <Link to="/academics">Academics</Link>
      <Link to="/admissions">Admissions</Link>
      <Link to="/faculty">Faculty</Link>
      <Link to="/students">Students</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/contact-us">Contact Us</Link>
    </div>
  );
}

export default QuickLinks;
