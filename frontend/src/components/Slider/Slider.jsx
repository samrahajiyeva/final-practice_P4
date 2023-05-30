import React from "react";
import Slider from "react-slick";
import "./Slider.scss";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="slider">
      <div className="img1">
        <div className="wrapper">
          <span>Welcome to</span>
          <h2>
            Pato Place
          </h2>
          <button>Look Menu</button>
        </div>
      </div>
      <div className="img2">
      <div className="wrapper">
          <span>Welcome to</span>
          <h2>
            Pato Place
          </h2>
          <button>Look Menu</button>
        </div>
      </div>
    </Slider>
  );
}
