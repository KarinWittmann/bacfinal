import axios from './axios';

export const getProfile = ({email, password}) => axios
  .get("/profiles", {
    params: {
      q: { email, password }
    }
  })
  .then(response => response.data[0])
  .catch(error => console.log(error))

export const postProfile = ({email, password}) =>  axios
  .post("/profiles", { email, password })
  .then(response => response.data);