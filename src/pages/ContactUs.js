import React from "react";
import "../styles/ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>
        Address: Springdale Public School, 123 Education Lane, Cityville, State,
        ZIP Code
      </p>
      <p>Phone: +1 (123) 456-7890</p>
      <p>Email: info@springdale.edu</p>
      <form className="contact-form">
        <label>Name</label>
        <input type="text" name="name" required />
        <label>Email</label>
        <input type="email" name="email" required />
        <label>Message</label>
        <textarea name="message" required />
        <button type="submit">Send</button>
      </form>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509383!2d144.95373531531576!3d-37.816279979751294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d7ed85c7df29!2sSchool!5e0!3m2!1sen!2sus!4v1615686796547!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
          
    </div>
  );
}

export default ContactUs;
