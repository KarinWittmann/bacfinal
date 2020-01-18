import React from "react";
import "./cardslide.css";
import Slider from "react-slick";
import "../../index";
import "../../pages/Scores/Scores";
import Scores from "../../pages/Scores/Scores";

export default function Cardslide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <h2> Scores</h2>
      <Slider {...settings}>
        <div>
          <Scores />
        </div>
      </Slider>
    </div>
  );
}
