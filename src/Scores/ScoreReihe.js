import React from "react";
import "./ScoreReihe.css";

class ScoreReihe extends React.Component {
  render() {
    const outputString = this.props.profile + " --- " + this.props.level + " --- " + this.props.points;
    return (
      <div className="ScoreReihe">
        <p>{outputString}</p>
      </div>
    );
  }
}

export default ScoreReihe;
