import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
function Footer() {
  return (
    <div className="footer-bg">
      <div className="footer-main">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about-us">About Us</Link>
          </li>
          <li>
            <Link to="academics">Academics</Link>
          </li>
          <li>
            <Link to="admissions">Admissions</Link>
          </li>
          <li>
            <Link to="faculty">Faculty</Link>
          </li>
          <li>
            <Link to="students">Students</Link>
          </li>
          <li>
            <Link to="gallery">Gallery</Link>
          </li>
          <li>
            <Link to="contact-us">ContactUs</Link>
          </li>
        </ul>
        <p className="copy-rights-para">
          Copyright ©7-24-2024 - 2028 Learn With Boddu Shiva Sai, Inc. All
          rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
