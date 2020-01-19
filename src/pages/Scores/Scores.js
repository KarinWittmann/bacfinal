import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import Card from "../../components/cards/card";
import FlexContainer from "../../components/containers/flex-container";
import Spinner from "../../UI/Spinner/Spinner";
import { HOME } from "../../config/routes";
import { LinkButton } from "../../components/buttons/buttons";
import { scoresAPI } from "../../services/services";
import Context from "../../context/context";
import "./Scores.css";
import Chart from "../../components/charts/charts";
import CardSlider from "../../components/cardslide/CardSlider";

const DATE_FORMAT = "DD.MM.YYYY HH:mm";

const Scores = () => {
  const dog = useContext(Context).dog;
  const [scores, setScores] = useState();

  useEffect(() => {
    scoresAPI.getScores(dog).then(setScores);
  }, [dog]);

  const renderScores = scores ? (
    <div className="Panel">
      <h1 className="text-center">Scores for {dog.name}</h1>
      <CardSlider>
        {scores.map(score => (
          <Card key={score._id} title={moment(score.date).format(DATE_FORMAT)}>
            <p>level: {score.level}</p>
            <p>hits: {score.hits}</p>
            <p>fails: {score.fails}</p>
          </Card>
        ))}
      </CardSlider>
      <Chart
        title={"Level 1"}
        scores={scores.filter(score => score.level === 1)}
      />
      <Chart
        title={"Level 2"}
        scores={scores.filter(score => score.level === 2)}
      />
      <Chart
        title={"Level 3"}
        scores={scores.filter(score => score.level === 3)}
      />
    </div>
  ) : null;

  const renderNoScores = (
    <div className="Panel">
      <h1 className="text-center">No scores yet for {dog.name}</h1>
      <LinkButton to={HOME} label={"start a game"} className="linkbtn" />
    </div>
  );

  return (
    <>
      {scores ? scores.length > 0 ? renderScores : renderNoScores : <Spinner />}
    </>
  );
};

//const render = () => (scores.length > 0 ? renderScores() : renderNoScores());
// return scores ? render() : <Spinner />;

export default Scores;
