import React from "react";
import Slider from "react-slick"; // Importing the slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/img_1.jpg";
import image2 from "../assets/img_2.jpg";
import image3 from "../assets/img_3.jpg";
import image4 from "../assets/img_4.jpg";

// PhotoSlider Component
const PhotoSlider = () => {
  // Slider settings
  const sliderSettings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite scroll
    speed: 500, // Transition speed
    slidesToShow: 1, // Show 1 image at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable auto-play
    autoplaySpeed: 2000, // Auto-play speed
  };

  return (
    <div className="w-full max-w-lg mt-8 mb-6">
      <Slider {...sliderSettings}>
        <div>
          <img
            src={image1}
            alt="Happy Birthday 1"
            className="w-full h-108 object-cover rounded-lg shadow-lg" // Fixed height and width
          />
        </div>
        <div>
          <img
            src={image2}
            alt="Happy Birthday 2"
            className="w-full h-108 object-cover rounded-lg shadow-lg" // Fixed height and width
          />
        </div>
        <div>
          <img
            src={image3}
            alt="Happy Birthday 3"
            className="w-full h-108 object-cover rounded-lg shadow-lg" // Fixed height and width
          />
        </div>
        <div>
          <img
            src={image4}
            alt="Happy Birthday 4"
            className="w-full h-108 object-cover rounded-lg shadow-lg" // Fixed height and width
          />
        </div>
      </Slider>
    </div>
  );
};

export default PhotoSlider;
