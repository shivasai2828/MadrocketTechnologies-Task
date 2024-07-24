import React from "react";
import "../styles/Carousel.css";

function Carousel() {
  return (
    <div className="carousel">
      <div className="carousel-item">
        Annual Sports Day - Celebrating Excellence in Sports
        <img
          src="https://media.istockphoto.com/id/695604058/photo/many-activities.jpg?s=1024x1024&w=is&k=20&c=C_PaxVH7idE34QZhyHifiWmth1UcBO5-j5bVsM1SG1Q="
          alt="sports-img"
          className="carouser-img"
        />
      </div>
      <div className="carousel-item">
        Science Exhibition - Showcasing Student Innovations
      </div>
      <div className="carousel-item">
        Cultural Fest - Embracing Diversity and Creativity
      </div>
    </div>
  );
}

export default Carousel;
