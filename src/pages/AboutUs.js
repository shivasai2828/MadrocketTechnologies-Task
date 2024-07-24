import React from "react";
import "../styles/AboutUs.css";

import image1 from "../assets/course-1.jpeg";
import image2 from "../assets/course-10.jpeg";
import image3 from "../assets/course-11.jpeg";
import image4 from "../assets/course-11.jpeg";
import image5 from "../assets/course-3.jpeg";
import image6 from "../assets/course-4.jpeg";
import image7 from "../assets/course-5.jpeg";
import image8 from "../assets/course-6.jpeg";
import image9 from "../assets/course-12.jpeg";
import image10 from "../assets/course-8.jpeg";

const courses = [
  { name: "Computer Science", image: image1 },
  { name: "Computer Architecture", image: image10 },
  { name: "Electrical Engineering", image: image2 },
  { name: "Computer Software", image: image3 },
  { name: "Computer Technical Skills", image: image4 },
  { name: "Civil Services", image: image5 },
  { name: "Computer Architecture", image: image6 },
  { name: "Electrical Engineering", image: image7 },
  { name: "Computer Software", image: image8 },
  { name: "Computer Technical Skills", image: image9 },
  { name: "Civil Services", image: image10 },
];

function AboutUs() {
  const coursesView = () => {
    return (
      <div className="academic-courses-section">
        <h2 className="academic-title">Academic Courses</h2>
        <div className="courses-container">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <img
                src={course.image}
                alt={course.name}
                className="course-image"
              />
              <h3 className="course-name">{course.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>
        Founded in 1985, Springdale Public School has been dedicated to
        providing quality education and holistic development to students.
      </p>
      <h3>Vision</h3>
      <p>
        To create a learning environment that fosters academic excellence,
        critical thinking, and ethical values.
      </p>
      <h3>Mission</h3>
      <p>
        To empower students with the knowledge, skills, and values needed to
        thrive in a dynamic world.
      </p>
      <h3>Principal's Message</h3>
      <p>
        At Springdale, we believe in nurturing the potential of every student
        and guiding them towards a successful future.
      </p>
      <h3>Infrastructure and Facilities</h3>
      <ul>
        <li>State-of-the-art science and computer labs</li>
        <li>Spacious and well-equipped classrooms</li>
        <li>Library with a vast collection of books and digital resources</li>
        <li>
          Sports facilities including a playground, gymnasium, and swimming pool
        </li>
      </ul>
      {coursesView()}
    </div>
  );
}

export default AboutUs;
