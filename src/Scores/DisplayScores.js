import React, { Component } from "react";
import "./DisplayScores.css";

class DisplayScores extends Component {
  render() {
    // table
    return (
      <div className="DisplayScores">
        <h1>
          Hier kommen die gerade erreichten Punkte pro Profil und Level hin
        </h1>
        
        {this.props.scores}
      </div>
    );
  }
}

export default DisplayScores;
