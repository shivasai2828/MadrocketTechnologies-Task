import React from "react";
import "../styles/Gallery.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

function Gallery() {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="grid-container">
        {images.map((image, index) => (
          <div className="grid-item" key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img
              src="https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="slider-img"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/261895/pexels-photo-261895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="slider-img"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900"
              alt="slider-img"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/1206101/pexels-photo-1206101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="slider-img"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Gallery;
