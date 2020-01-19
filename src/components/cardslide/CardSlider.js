import React from "react";
import Slider from "react-slick";
import "./CardSlider.css";

export default function Cardslider({ children }) {
  const settings = {
    accessibility: true,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true
  };

  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
