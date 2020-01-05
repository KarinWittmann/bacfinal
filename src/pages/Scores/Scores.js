import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "../../services/axios";
import Card from "../../components/cards/card";
import FlexContainer from "../../components/containers/flex-container";
import Spinner from "../../UI/Spinner/Spinner";
import Navigation from "../../Navigation/Navigation";
import "./Scores.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const DATE_FORMAT = "DD.MM.YYYY HH:mm";

export default function Scores({ dog }) {
  const [scores, setScores] = useState();

  useEffect(() => {
    axios
      .get("/scores", {
        params: {
          q: {
            dog: {
              _id: dog._id
            }
          }
        }
      })
      .then(response => {
        console.log(response);
        setScores(response.data);
      })
      .catch(error => console.log(error));
  }, [dog]);

  return scores ? (
    <div className="Panel">
      <header>
        <Navigation />
      </header>
      <h1 className="text-center">Scores for {dog.name}</h1>
      <FlexContainer>
        {scores.length > 0 ? (
          scores.map(score => (
            <Card
              key={score._id}
              title={moment(score.date).format(DATE_FORMAT)}
            >
              <p>level: {score.level}</p>
              <p>points: {score.points}</p>
            </Card>
          ))
        ) : (
          <div>
            <p class="text-center">No scores yet</p>
            <Button variant="primary" as={Link} to="/">
              Start a game
            </Button>
          </div>
        )}
      </FlexContainer>
    </div>
  ) : (
    <Spinner />
  );
}
