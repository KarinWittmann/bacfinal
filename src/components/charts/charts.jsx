import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
import "./charts.css";
const DATE_FORMAT = "DD.MM.YYYY HH:mm";

export default function Chart({ title, scores }) {
  const options = {
    title: {
      text: title
    },
    series: [
      {
        name: "hits",
        color: "#008000",
        data: scores.map(score => ({
          name: moment(score.date).format(DATE_FORMAT),
          y: score.hits
        }))
      },
      {
        name: "fails",
        color: "#ff0000",
        data: scores.map(score => ({
          name: moment(score.date).format(DATE_FORMAT),
          y: score.fails
        }))
      }
    ]
  };

  return (
    <div className="charts">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
