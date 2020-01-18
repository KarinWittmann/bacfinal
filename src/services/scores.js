import axios from './axios';

export const save = ({dog, level, hits, fails}) => {
  axios.post("/scores", {
      dog,
      level,
      hits,
      fails,
      date: Date.now()
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

export const getScores = dog => axios
  .get("/scores", {
    params: {
      q: {
        dog: {
          _id: dog._id
        }
      }
    }
  })
  .then(response => response.data)
  .catch(error => console.log(error));