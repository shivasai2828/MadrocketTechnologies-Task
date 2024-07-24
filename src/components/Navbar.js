import React, { Component } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/">
            <img
              src="https://racharlasrikanth.netlify.app/static/media/logo.aa78497e534416d460cb8eac1661bee4.svg"
              alt="logo-home navbar-logo"
            />
          </Link>

          <div className="menu-icon" onClick={this.toggleMenu}>
            <i className={this.state.isOpen ? "fas fa-times" : "fas fa-bars"}>
              <GiHamburgerMenu />
            </i>
          </div>
          <ul
            onClick={this.toggleMenu}
            className={this.state.isOpen ? "nav-menu active" : "nav-menu"}
          >
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-links">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/academics" className="nav-links">
                Academics
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admissions" className="nav-links">
                Admissions
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/faculty" className="nav-links">
                Faculty
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/students" className="nav-links">
                Students
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-links">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact-us" className="nav-links">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
