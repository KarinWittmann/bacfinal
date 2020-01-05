import React, { Component } from "react";
import "./Scores.css";
import SelectDog from "../pages/SelectDog/SelectDog";
import DisplayScores from "../Scores/DisplayScores";
import WithNavbar from "../HOC/withNavbar";
import Scorejetzt from "../Scores/Scorejetzt";
import ScoreReihe from "../Scores/ScoreReihe";
import axios from 'axios';

class Scores extends Component {
  state = {
    scores: [],
    isLoading: true
  };

  render() {

    const scores = this.state.scores.map(score => {
      return (
        <ScoreReihe
          key = {score._id}
          profile = {score.profile}
          points = {score.points}
          level = {score.level}
        />
      ) 
    });



    return (
      <div className="Panel">
        <div className="Oben">
          <DisplayScores scores={scores}/>
        </div>
        <div className="Unten">
          <DisplayScores />
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios
      .get(
        "https://targetpractise-3737.restdb.io/rest/usertable/5dc4608cd6e262610002212d/scores",
        {
          headers: {
            "content-type": "application/json",
            "x-apikey": "5dc456d464e7774913b6ea11",
            "cache-control": "no-cache"
          }
        }
      )
      .then(response => {
        if (response.data.length > 0) {
          this.setState({ scores: response.data });
          console.log(response);
        }
        this.setState({
          isLoading: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false
        });
      });
  }

}

export default WithNavbar(Scores);
