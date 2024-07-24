import React from "react";

import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="home-page">
      <div className="back-to-school">
        <div className="content">
          <h1 className="home-heading">Back to School</h1>
          <h1 className="home-heading">Welcome to Springdale Public School</h1>
          <p className="para-home">
            Where we nurture young minds for a brighter future.
          </p>
          <button>
            <Link className="para-home" to="/about">
              Learn More
            </Link>
          </button>
        </div>
        <div className="image-container">
          <img
            src="https://as2.ftcdn.net/v2/jpg/04/40/71/07/1000_F_440710721_7M3ih0JgX1MIb5X5df6EHNvN43VQAh5b.jpg"
            alt="Back to School"
          />
        </div>
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <h2>Annual Sports Day</h2>
            <p>Celebrating Excellence in Sports</p>
            <img
              src="https://media.istockphoto.com/id/1146896078/photo/teachers-cheering-student-playing-tug-of-war.jpg?s=1024x1024&w=is&k=20&c=5Zylat07Eraf___pNF67JdDJi6kEwvn50vaSTVR2yU4="
              alt="slider-img"
            />
          </div>
          <div>
            <h2>Science Exhibition</h2>
            <p>Showcasing Student Innovations</p>
            <img
              src="https://media.istockphoto.com/id/973293918/photo/kids-having-fun-watching-an-experiment-at-a-science-centre.jpg?s=1024x1024&w=is&k=20&c=AG1DYjr1g0DJY4M1OlBXavmxIbbYoGaDQzWl2WJPL6A="
              alt="slider-img"
            />
          </div>
          <div>
            <h2>Cultural Fest</h2>
            <p>Embracing Diversity and Creativity</p>
            <img
              src="https://dikshant.org/school/wp-content/uploads/60974662_2430368560531938_7556910084463263744_n-2.jpg"
              alt="slider-img"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default HomePage;
