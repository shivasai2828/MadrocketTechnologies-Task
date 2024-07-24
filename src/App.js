import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Faculty from "./pages/Faculty";
import Students from "./pages/Students";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import contactimg from "./assets/contact-img.png";
import "./styles/App.css";

function App() {
  const ContactSection = () => {
    return (
      <div className="contact-section">
        <h2 className="contact-title">Contact Us For Your Future</h2>
        <div className="contact-banner">
          <img src={contactimg} alt="Graduation" className="contact-image" />
          <div className="contact-content">
            <h3>Enroll For Our Various Courses Anywhere From India</h3>
            <button className="contact-button">
              <Link to="contact-us">Contact Us</Link>
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Router>
      <Navbar />
      <div className="bg">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/students" element={<Students />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        {ContactSection()}
      </div>
      <Footer />
    </Router>
  );
}

export default App;
