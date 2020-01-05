import React, { Component } from "react";
import "./Slider.css";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { Link } from "react-router-dom";

class Slider extends Component {
  state = {
    images: [
      require("../assets/Level1.jpg"),
      require("../assets/Level2.jpg"),
      require("../assets/Level3.jpg")
      // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
    ],
    currentIndex: 0,
    translateValue: 0
  };

  goToPrevSlide = () => {
    console.log("inisde gotoPRevSlide");
    this.props.leftClicked();
    if (this.state.currentIndex === 0) return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  };

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    this.props.rightClicked();

    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.45s"
          }}
        >
          {this.state.images.map((image, i) => (
            <Slide key={i} levelId={i + 1} image={image} />
          ))}
        </div>

        <LeftArrow goToPrevSlide={this.goToPrevSlide} />

        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
  }
}

const Slide = ({ image, levelId }) => {
  const level = "/level" + levelId;
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%"
  };
  return (
    <Link to={level}>
      <div className="slide" style={styles}></div>
    </Link>
  );
};

const LeftArrow = props => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      <IoIosArrowDropleft />
    </div>
  );
};

const RightArrow = props => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      <IoIosArrowDropright />
    </div>
  );
};

export default Slider;
