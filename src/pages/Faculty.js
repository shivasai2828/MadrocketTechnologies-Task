import React from "react";
import "../styles/Faculty.css";

function Faculty() {
  return (
    <div className="faculty">
      <h2>Faculty</h2>
      <ul>
        <li>
          John Doe: Principal, M.Ed, 20 years of experience in educational
          administration.
        </li>
        <li>
          Jane Smith: Vice Principal, M.Sc. in Physics, 15 years of teaching
          experience.
        </li>
        <li>
          Emily Johnson: English Teacher, M.A. in English, 10 years of teaching
          experience.
        </li>
        <li>
          Michael Brown: Mathematics Teacher, M.Sc. in Mathematics, 8 years of
          teaching experience.
        </li>
        <li>
          Sophia Davis: Science Teacher, M.Sc. in Chemistry, 12 years of
          teaching experience.
        </li>
        <li>
          David Wilson: Computer Science Teacher, B.Tech in Computer Science, 5
          years of teaching experience.
        </li>
      </ul>
    </div>
  );
}

export default Faculty;
