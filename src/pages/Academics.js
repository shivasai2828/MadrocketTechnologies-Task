import React from "react";
import "../styles/Academics.css";
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
const images = [
  {
    src: "https://media.istockphoto.com/id/1146925274/photo/teacher-helping-schoolgirl-with-writing.jpg?s=1024x1024&w=is&k=20&c=G6zYeX6fK3idpJY4fJ-ifINlUY06bLYBmNL8N7JK_0Q=",
    alt: "school",
  },
  {
    src: "https://media.istockphoto.com/id/1369754239/photo/university-student-in-white-background-stock-photo.jpg?s=1024x1024&w=is&k=20&c=yG6Y1qfTygTpg-LH1E54dT0iMn5icY6lHZkUAdwEjWE=",
    alt: "school",
  },
  {
    src: "https://www.google.com/search?sca_esv=6b5a9356d0b1c2af&sca_upv=1&rlz=1C1RXQR_enIN1104IN1104&sxsrf=ADLYWIJaEvnCZK1hx8erq8uExQJWti-6Lg:1721839307166&q=school+images&udm=2&fbs=AEQNm0DPvcmG_nCbmwtBO9j6YBzM68ZanC7g01Skprhw5JoufVCiMv-hxC44jt6JduRQysBab-bgQXjPraaWFXMvOy8Kr1OAG3K-aj3De4zf3-LxKtkBtWaSCp743evHzhY6J0rIQUCXki65vOxhV0cGJtj0S1dF8YREnKrWtJctBkTv8-bs83YpB7p3IMTdYvjisDEty1xSxeLS4B_TKFXUiCrenmEMcA&sa=X&sqi=2&ved=2ahUKEwiXh46ij8CHAxXQR2wGHUVrA20QtKgLegQIEhAB&biw=1517&bih=674&dpr=0.9",
    alt: "school",
  },

  {
    src: "https://cdn.dnaindia.com/sites/default/files/2021/08/09/989786-school-reopen-2.jpg?im=FitAndFill=(1200,900)",
    alt: "school ",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvojSd8edVpyl1HILQAp4Kci6tqPWHlUJsBQ&s",
    alt: "school",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_vg4icn-C6-zy-RpWfS8sOtfB2tkBtR5cew&s",
    alt: "school",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOSrNKOdI29ZACMkTfcnXtFPfbO9eb82I10w&s",
    alt: "school",
  },
  {
    src: "https://schooledu.telangana.gov.in/ISMS/img/theme/revolution/New/slider1.jpg",
    alt: "school",
  },
];
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

function Academics() {
  const coursesView = () => {
    return (
      <div className="academic-courses-section">
        <h2 className="academic-title">Academic Courses & Curriculum </h2>
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
    <div className="academics">
      {coursesView()}
      <h2>Academics</h2>
      <h3>Curriculum</h3>
      <ul>
        <li>
          Primary (Grades 1-5): English, Mathematics, Science, Social Studies,
          Art, Physical Education
        </li>
        <li>
          Secondary (Grades 6-10): English, Mathematics, Science (Physics,
          Chemistry, Biology), Social Studies, Computer Science, Physical
          Education, Art
        </li>
        <li>
          Senior Secondary (Grades 11-12): Science Stream: Physics, Chemistry,
          Biology, Mathematics, Computer Science, English
        </li>
        <li>
          Commerce Stream: Accountancy, Business Studies, Economics,
          Mathematics, English
        </li>
      </ul>
      <h3>Teaching Methodologies</h3>
      <p>
        We use a blend of traditional and modern teaching techniques to cater to
        different learning styles.
      </p>
      <h3>Educational Resources</h3>
      <p>
        Digital classrooms, interactive learning modules, and access to online
        educational platforms.
      </p>
      <div className="grid-container">
        {images.map((image, index) => (
          <div className="grid-item" key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Academics;
