import React from "react";
import "./Description.css";

// class Description extends Component {

//     render(){
export default function Description(props) {
  return (
    <div className="Description">
      <h1>{props.description.heading}</h1>
      <div className="DescriptionBody">
        <p>{props.description.text}</p>
      </div>
    </div>
  );
}
